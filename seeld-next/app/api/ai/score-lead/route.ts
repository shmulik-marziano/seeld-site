import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';

/**
 * POST /api/ai/score-lead
 * AI-powered lead scoring
 *
 * Analyzes a lead and assigns a score (0-100) based on:
 * - Contact information quality
 * - Message content and intent
 * - Source credibility
 * - Historical conversion patterns
 * - Behavioral signals
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

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    // Only agents and admins can score leads
    if (user.role !== 'AGENT' && user.role !== 'ADMIN') {
      return NextResponse.json(
        { error: 'Forbidden - only agents can score leads' },
        { status: 403 }
      );
    }

    const body = await request.json();
    const { leadId } = body;

    if (!leadId) {
      return NextResponse.json(
        { error: 'Lead ID is required' },
        { status: 400 }
      );
    }

    // Get lead details
    const lead = await prisma.lead.findUnique({
      where: { id: leadId },
    });

    if (!lead) {
      return NextResponse.json(
        { error: 'Lead not found' },
        { status: 404 }
      );
    }

    // Calculate lead score using AI
    const scoringResult = await scoreLead(lead);

    // Update lead with score
    const updatedLead = await prisma.lead.update({
      where: { id: leadId },
      data: {
        score: scoringResult.score,
        scoreReason: scoringResult.reasoning,
      },
    });

    // Log AI interaction
    await prisma.aIInteraction.create({
      data: {
        type: 'LEAD_SCORING',
        userId: user.id,
        input: JSON.stringify({
          leadId,
          name: lead.name,
          email: lead.email,
          phone: lead.phone,
          service: lead.service,
          message: lead.message,
          source: lead.source,
        }),
        output: JSON.stringify(scoringResult),
        model: scoringResult.model,
        confidence: scoringResult.confidence,
        latencyMs: scoringResult.latencyMs,
      },
    });

    // Create task if lead score is high
    if (scoringResult.score >= 70) {
      await prisma.task.create({
        data: {
          title: `ליד חם: ${lead.name}`,
          description: `ליד בעל ציון גבוה (${scoringResult.score}) - מומלץ ליצור קשר בהקדם`,
          type: 'CALL',
          priority: scoringResult.score >= 85 ? 'URGENT' : 'HIGH',
          status: 'PENDING',
          assignedTo: lead.assignedTo || user.id,
          assignedBy: user.id,
          leadId: lead.id,
          dueDate: new Date(Date.now() + 24 * 60 * 60 * 1000), // Tomorrow
          isAIGenerated: true,
          aiReasoning: scoringResult.reasoning,
        },
      });
    }

    return NextResponse.json({
      success: true,
      lead: updatedLead,
      score: scoringResult.score,
      reasoning: scoringResult.reasoning,
      recommendations: scoringResult.recommendations,
    });

  } catch (error) {
    console.error('Error scoring lead:', error);
    return NextResponse.json(
      { error: 'Failed to score lead' },
      { status: 500 }
    );
  }
}

/**
 * Score a lead using AI and heuristics
 */
async function scoreLead(lead: any): Promise<{
  score: number;
  reasoning: string;
  confidence: number;
  model: string;
  latencyMs: number;
  recommendations: string[];
}> {
  const startTime = Date.now();

  // Base score calculation (heuristic)
  let score = 50; // Start at middle
  const reasons: string[] = [];
  const recommendations: string[] = [];

  // 1. Contact Information Quality (max +20)
  if (lead.email && lead.email.includes('@')) {
    score += 10;
    reasons.push('כתובת אימייל תקינה');
  }

  if (lead.phone && lead.phone.length >= 9) {
    score += 10;
    reasons.push('מספר טלפון תקין');
  }

  // 2. Message Quality (max +20)
  if (lead.message) {
    const messageLength = lead.message.length;
    if (messageLength > 50) {
      score += 10;
      reasons.push('הודעה מפורטת');
    }
    if (messageLength > 100) {
      score += 5;
      reasons.push('הודעה מאוד מפורטת');
    }

    // Check for urgency keywords
    const urgentKeywords = ['דחוף', 'בהקדם', 'מיידי', 'חירום', 'urgent'];
    const messageText = lead.message.toLowerCase();
    if (urgentKeywords.some(keyword => messageText.includes(keyword))) {
      score += 5;
      reasons.push('נושא דחוף');
      recommendations.push('צור קשר בהקדם - נושא דחוף');
    }

    // Check for buying intent
    const buyingKeywords = ['מחיר', 'הצעה', 'להתקשר', 'פגישה', 'מעוניין', 'רוצה'];
    if (buyingKeywords.some(keyword => messageText.includes(keyword))) {
      score += 10;
      reasons.push('כוונת רכישה ברורה');
      recommendations.push('הליד מוכן לפגישה - תזמן במהירות');
    }
  }

  // 3. Source Quality (max +15)
  const highQualitySources = ['website', 'referral', 'direct'];
  const mediumQualitySources = ['google', 'facebook', 'linkedin'];

  if (lead.source) {
    if (highQualitySources.includes(lead.source.toLowerCase())) {
      score += 15;
      reasons.push('מקור אמין');
    } else if (mediumQualitySources.includes(lead.source.toLowerCase())) {
      score += 10;
      reasons.push('מקור טוב');
    }
  }

  // 4. Service Type (max +10)
  const premiumServices = ['pension', 'life insurance', 'investment'];
  if (lead.service && premiumServices.some(s => lead.service.toLowerCase().includes(s))) {
    score += 10;
    reasons.push('שירות בעל ערך גבוה');
  }

  // 5. Timeliness (max +5)
  const leadAge = Date.now() - new Date(lead.createdAt).getTime();
  const hoursSinceCreated = leadAge / (1000 * 60 * 60);

  if (hoursSinceCreated < 1) {
    score += 5;
    reasons.push('ליד טרי (פחות משעה)');
    recommendations.push('ליד חדש - חשוב ליצור קשר בשעה הקרובה');
  }

  // 6. Previous interactions
  if (lead.lastContactedAt) {
    const daysSinceContact = (Date.now() - new Date(lead.lastContactedAt).getTime()) / (1000 * 60 * 60 * 24);
    if (daysSinceContact > 7) {
      score -= 10;
      reasons.push('לא היה קשר מזה מעל שבוע');
      recommendations.push('חדש את הקשר עם הליד');
    }
  } else {
    recommendations.push('זהו ליד חדש - צור קשר ראשוני');
  }

  // Normalize score to 0-100
  score = Math.max(0, Math.min(100, score));

  // Add AI enhancement if API key available
  const apiKey = process.env.ANTHROPIC_API_KEY;

  if (apiKey) {
    try {
      const aiResult = await callClaudeForLeadScoring(lead, score, reasons);
      // Use AI to refine score (+/- 10 points)
      score = Math.max(0, Math.min(100, aiResult.adjustedScore));
      reasons.push(...aiResult.additionalReasons);
      recommendations.push(...aiResult.aiRecommendations);
    } catch (error) {
      console.error('Error calling AI for lead scoring:', error);
      // Continue with heuristic score
    }
  }

  const latencyMs = Date.now() - startTime;

  return {
    score,
    reasoning: reasons.join(' • '),
    confidence: 0.75,
    model: apiKey ? 'claude-3-5-sonnet-hybrid' : 'heuristic',
    latencyMs,
    recommendations,
  };
}

/**
 * Call Claude API for enhanced lead scoring
 */
async function callClaudeForLeadScoring(
  lead: any,
  baseScore: number,
  baseReasons: string[]
): Promise<{
  adjustedScore: number;
  additionalReasons: string[];
  aiRecommendations: string[];
}> {
  const apiKey = process.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    throw new Error('API key not available');
  }

  const prompt = `
אתה מומחה לדירוג לידים בתחום הביטוח והפיננסים.

פרטי הליד:
- שם: ${lead.name}
- שירות מבוקש: ${lead.service}
- הודעה: ${lead.message || 'אין'}
- מקור: ${lead.source || 'לא ידוע'}

הציון הבסיסי שחושב: ${baseScore}/100
הסיבות: ${baseReasons.join(', ')}

משימה:
1. האם הציון הזה סביר? האם צריך להתאים אותו (±10 נקודות)?
2. תן 2-3 סיבות נוספות לציון
3. תן 2-3 המלצות פעולה לסוכן

פורמט התשובה (JSON בלבד):
{
  "scoreAdjustment": 0,
  "additionalReasons": ["סיבה 1", "סיבה 2"],
  "recommendations": ["המלצה 1", "המלצה 2"]
}
`;

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 512,
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
    }),
  });

  if (!response.ok) {
    throw new Error(`Claude API error: ${response.statusText}`);
  }

  const data = await response.json();
  const text = data.content[0].text;

  // Parse JSON response
  try {
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      const result = JSON.parse(jsonMatch[0]);
      return {
        adjustedScore: baseScore + (result.scoreAdjustment || 0),
        additionalReasons: result.additionalReasons || [],
        aiRecommendations: result.recommendations || [],
      };
    }
  } catch (error) {
    console.error('Error parsing AI response:', error);
  }

  // Fallback
  return {
    adjustedScore: baseScore,
    additionalReasons: [],
    aiRecommendations: [],
  };
}
