import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';

/**
 * GET /api/crm/tasks
 * Get all tasks for the authenticated user
 * Query params:
 * - status: filter by status (PENDING, IN_PROGRESS, COMPLETED, etc)
 * - priority: filter by priority (LOW, MEDIUM, HIGH, URGENT)
 * - assignedTo: filter by assigned user (for managers)
 * - dueDate: filter by due date
 */
export async function GET(request: NextRequest) {
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
    });

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    // Parse query parameters
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const priority = searchParams.get('priority');
    const assignedTo = searchParams.get('assignedTo');
    const type = searchParams.get('type');

    // Build filter
    const where: any = {
      assignedTo: user.id,
    };

    if (status) where.status = status;
    if (priority) where.priority = priority;
    if (type) where.type = type;

    // Managers can view other users' tasks
    if (assignedTo && (user.role === 'ADMIN' || user.role === 'MANAGER')) {
      where.assignedTo = assignedTo;
    }

    // Get tasks
    const tasks = await prisma.task.findMany({
      where,
      include: {
        lead: {
          select: {
            id: true,
            name: true,
            email: true,
            phone: true,
            status: true,
          },
        },
        client: {
          select: {
            id: true,
            user: {
              select: {
                name: true,
                email: true,
                phone: true,
              },
            },
          },
        },
      },
      orderBy: [
        { status: 'asc' },
        { priority: 'desc' },
        { dueDate: 'asc' },
      ],
    });

    return NextResponse.json({
      success: true,
      tasks,
      count: tasks.length,
    });

  } catch (error) {
    console.error('Error fetching tasks:', error);
    return NextResponse.json(
      { error: 'Failed to fetch tasks' },
      { status: 500 }
    );
  }
}

/**
 * POST /api/crm/tasks
 * Create a new task
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
    });

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    const body = await request.json();
    const {
      title,
      description,
      type,
      priority,
      assignedTo,
      leadId,
      clientId,
      dueDate,
      isAIGenerated,
      aiReasoning,
    } = body;

    // Validation
    if (!title || !type) {
      return NextResponse.json(
        { error: 'Title and type are required' },
        { status: 400 }
      );
    }

    // Create task
    const task = await prisma.task.create({
      data: {
        title,
        description,
        type,
        priority: priority || 'MEDIUM',
        status: 'PENDING',
        assignedTo: assignedTo || user.id,
        assignedBy: user.id,
        leadId,
        clientId,
        dueDate: dueDate ? new Date(dueDate) : null,
        isAIGenerated: isAIGenerated || false,
        aiReasoning,
      },
      include: {
        lead: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        client: {
          select: {
            id: true,
            user: {
              select: {
                name: true,
                email: true,
              },
            },
          },
        },
      },
    });

    // Create notification for assigned user (if different from creator)
    if (assignedTo && assignedTo !== user.id) {
      await prisma.notification.create({
        data: {
          userId: assignedTo,
          title: 'משימה חדשה',
          message: `הוקצתה לך משימה חדשה: ${title}`,
          type: 'TASK_DUE',
          priority: priority || 'MEDIUM',
          actionUrl: `/tasks/${task.id}`,
          actionLabel: 'צפה במשימה',
        },
      });
    }

    // Log activity
    await prisma.activity.create({
      data: {
        type: 'TASK_COMPLETED',
        description: `נוצרה משימה חדשה: ${title}`,
        userId: user.id,
        leadId,
        clientId,
      },
    });

    return NextResponse.json({
      success: true,
      task,
    }, { status: 201 });

  } catch (error) {
    console.error('Error creating task:', error);
    return NextResponse.json(
      { error: 'Failed to create task' },
      { status: 500 }
    );
  }
}
