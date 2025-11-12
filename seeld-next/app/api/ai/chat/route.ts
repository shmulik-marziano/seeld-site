import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';

/**
 * POST /api/ai/chat
 * AI Chatbot for clients and agents
 *
 * This endpoint uses Claude API to provide intelligent responses
 * Context-aware based on user role (CLIENT, AGENT, ADMIN)
 */
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession();

    if (!session?.user?.email) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Get user from session
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      include: {
        clientProfile: {
          include: {
            policies: true,
            agent: {
              include: {
                user: true,
              },
            },
          },
        },
        agentProfile: {
          include: {
            clients: {
              take: 5,
              orderBy: {
                createdAt: 'desc',
              },
            },
          },
        },
      },
    });

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    const body = await request.json();
    const { message, conversationHistory } = body;

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Build context based on user role
    let systemContext = '';

    if (user.role === 'CLIENT') {
      systemContext = buildClientContext(user);
    } else if (user.role === 'AGENT') {
      systemContext = buildAgentContext(user);
    } else if (user.role === 'ADMIN') {
      systemContext = buildAdminContext(user);
    }

    // Call Claude API
    const aiResponse = await callClaudeAPI({
      systemContext,
      message,
      conversationHistory: conversationHistory || [],
    });

    // Save interaction to database
    await prisma.aIInteraction.create({
      data: {
        type: 'CHATBOT_CONVERSATION',
        userId: user.id,
        clientId: user.role === 'CLIENT' ? user.clientProfile?.id : undefined,
        input: message,
        output: aiResponse.content,
        model: aiResponse.model,
        confidence: aiResponse.confidence,
        tokensUsed: aiResponse.tokensUsed,
        latencyMs: aiResponse.latencyMs,
      },
    });

    return NextResponse.json({
      success: true,
      response: aiResponse.content,
      model: aiResponse.model,
      suggestions: aiResponse.suggestions || [],
    });

  } catch (error) {
    console.error('Error in AI chat:', error);
    return NextResponse.json(
      { error: 'Failed to process chat message' },
      { status: 500 }
    );
  }
}

/**
 * Build context for CLIENT users
 */
function buildClientContext(user: any): string {
  const profile = user.clientProfile;
  const agent = profile?.agent;
  const policies = profile?.policies || [];

  return `
אתה עוזר AI חכם עבור SeelD - פלטפורמת ביטוח ופיננסים.
אתה מדבר עם לקוח בשם ${user.name}.

פרטי הלקוח:
- שם: ${user.name}
- אימייל: ${user.email}
- מספר פוליסות פעילות: ${policies.length}
- סוכן מטפל: ${agent?.user?.name || 'לא משויך'}

תפקידך:
1. לענות על שאלות כלליות על ביטוח ופנסיה
2. לעזור ללקוח להבין את הפוליסות שלו
3. לעזור בתיאום פגישות עם הסוכן
4. להסביר מושגים פיננסיים בעברית פשוטה

חשוב:
- אל תמציא מידע על פוליסות ספציפיות
- אם אתה לא בטוח במשהו, הפנה את הלקוח לסוכן
- השתמש בשפה ידידותית ומקצועית
- תן תשובות קצרות וברורות
`;
}

/**
 * Build context for AGENT users
 */
function buildAgentContext(user: any): string {
  const profile = user.agentProfile;
  const totalClients = profile?.totalClients || 0;
  const activeClients = profile?.activeClients || 0;

  return `
אתה עוזר AI מקצועי עבור סוכני ביטוח בפלטפורמת SeelD.
אתה מסייע לסוכן בשם ${user.name}.

פרטי הסוכן:
- שם: ${user.name}
- סה"כ לקוחות: ${totalClients}
- לקוחות פעילים: ${activeClients}
- רישיון: ${profile?.licenseNumber}
- התמחויות: ${profile?.specialization?.join(', ') || 'לא צוין'}

תפקידך:
1. לעזור לסוכן לנהל את הלקוחות והלידים שלו
2. להציע המלצות מבוססות נתונים
3. לעזור בניתוח פוליסות וזיהוי פערים
4. לסייע בכתיבת מיילים והצעות מחיר
5. לזהות הזדמנויות Cross-Sell ו-Up-Sell
6. לתת טיפים למכירה וסגירת עסקאות

היכולות שלך:
- גישה למידע על לקוחות ופוליסות
- יכולת ניתוח נתונים ומגמות
- יצירת משימות והמלצות
- דירוג לידים (Lead Scoring)

השתמש בשפה מקצועית אך ידידותית.
תן תשובות מעשיות וישימות.
`;
}

/**
 * Build context for ADMIN users
 */
function buildAdminContext(user: any): string {
  return `
אתה עוזר AI למנהלי מערכת בפלטפורמת SeelD.
אתה מסייע למנהל בשם ${user.name}.

תפקידך:
1. לספק תובנות על ביצועי המערכת
2. לעזור בניתוח נתונים ודוחות
3. לזהות בעיות ולהציע פתרונות
4. לסייע בניהול צוות ואופטימיזציה

השתמש בשפה טכנית ומקצועית.
`;
}

/**
 * Call Claude API
 */
async function callClaudeAPI(params: {
  systemContext: string;
  message: string;
  conversationHistory: Array<{ role: string; content: string }>;
}): Promise<{
  content: string;
  model: string;
  confidence: number;
  tokensUsed?: number;
  latencyMs: number;
  suggestions?: string[];
}> {
  const startTime = Date.now();

  // Check if Anthropic API key is available
  const apiKey = process.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    // Fallback to mock response if no API key
    console.warn('ANTHROPIC_API_KEY not found, using mock response');
    return {
      content: 'שלום! אני עוזר AI של SeelD. כרגע אני במצב דמו. אנא הוסף את ANTHROPIC_API_KEY כדי להפעיל את מלוא היכולות שלי.',
      model: 'mock',
      confidence: 0.5,
      latencyMs: Date.now() - startTime,
      suggestions: ['תזמן פגישה', 'צפה בפוליסות', 'דבר עם סוכן'],
    };
  }

  try {
    // Build messages array
    const messages = [
      ...params.conversationHistory.map((msg) => ({
        role: msg.role,
        content: msg.content,
      })),
      {
        role: 'user',
        content: params.message,
      },
    ];

    // Call Claude API
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 1024,
        system: params.systemContext,
        messages,
      }),
    });

    if (!response.ok) {
      throw new Error(`Claude API error: ${response.statusText}`);
    }

    const data = await response.json();
    const latencyMs = Date.now() - startTime;

    return {
      content: data.content[0].text,
      model: data.model,
      confidence: 0.85, // Claude typically has high confidence
      tokensUsed: data.usage?.total_tokens,
      latencyMs,
      suggestions: extractSuggestions(data.content[0].text),
    };

  } catch (error) {
    console.error('Error calling Claude API:', error);

    // Fallback response
    return {
      content: 'מצטער, נתקלתי בבעיה בעיבוד הבקשה. אנא נסה שוב או פנה לתמיכה.',
      model: 'error-fallback',
      confidence: 0,
      latencyMs: Date.now() - startTime,
    };
  }
}

/**
 * Extract action suggestions from AI response
 */
function extractSuggestions(text: string): string[] {
  // Simple heuristic - look for action phrases
  const suggestions: string[] = [];

  if (text.includes('פגישה') || text.includes('תיאום')) {
    suggestions.push('תזמן פגישה');
  }
  if (text.includes('פוליסה') || text.includes('כיסוי')) {
    suggestions.push('צפה בפוליסות');
  }
  if (text.includes('סוכן') || text.includes('יועץ')) {
    suggestions.push('דבר עם סוכן');
  }
  if (text.includes('מסמך') || text.includes('העלאה')) {
    suggestions.push('העלה מסמך');
  }

  return suggestions.slice(0, 3); // Max 3 suggestions
}
