import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';

/**
 * GET /api/crm/tasks/[id]
 * Get a specific task by ID
 */
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
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

    const task = await prisma.task.findUnique({
      where: { id: params.id },
      include: {
        lead: true,
        client: {
          include: {
            user: true,
          },
        },
      },
    });

    if (!task) {
      return NextResponse.json(
        { error: 'Task not found' },
        { status: 404 }
      );
    }

    // Check permissions - can only view own tasks unless admin/manager
    if (
      task.assignedTo !== user.id &&
      user.role !== 'ADMIN' &&
      user.role !== 'MANAGER'
    ) {
      return NextResponse.json(
        { error: 'Forbidden' },
        { status: 403 }
      );
    }

    return NextResponse.json({
      success: true,
      task,
    });

  } catch (error) {
    console.error('Error fetching task:', error);
    return NextResponse.json(
      { error: 'Failed to fetch task' },
      { status: 500 }
    );
  }
}

/**
 * PUT /api/crm/tasks/[id]
 * Update a task
 */
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
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

    // Check if task exists
    const existingTask = await prisma.task.findUnique({
      where: { id: params.id },
    });

    if (!existingTask) {
      return NextResponse.json(
        { error: 'Task not found' },
        { status: 404 }
      );
    }

    // Check permissions
    if (
      existingTask.assignedTo !== user.id &&
      user.role !== 'ADMIN' &&
      user.role !== 'MANAGER'
    ) {
      return NextResponse.json(
        { error: 'Forbidden' },
        { status: 403 }
      );
    }

    const body = await request.json();
    const {
      title,
      description,
      type,
      status,
      priority,
      dueDate,
      notes,
      completedAt,
    } = body;

    // Prepare update data
    const updateData: any = {};
    if (title !== undefined) updateData.title = title;
    if (description !== undefined) updateData.description = description;
    if (type !== undefined) updateData.type = type;
    if (status !== undefined) {
      updateData.status = status;
      // If marking as completed, set completedAt
      if (status === 'COMPLETED' && !completedAt) {
        updateData.completedAt = new Date();
      }
    }
    if (priority !== undefined) updateData.priority = priority;
    if (dueDate !== undefined) updateData.dueDate = dueDate ? new Date(dueDate) : null;
    if (notes !== undefined) updateData.notes = notes;
    if (completedAt !== undefined) updateData.completedAt = completedAt ? new Date(completedAt) : null;

    // Update task
    const task = await prisma.task.update({
      where: { id: params.id },
      data: updateData,
      include: {
        lead: true,
        client: {
          include: {
            user: true,
          },
        },
      },
    });

    // Log activity if task completed
    if (status === 'COMPLETED' && existingTask.status !== 'COMPLETED') {
      await prisma.activity.create({
        data: {
          type: 'TASK_COMPLETED',
          description: `הושלמה משימה: ${task.title}`,
          userId: user.id,
          leadId: task.leadId,
          clientId: task.clientId,
        },
      });
    }

    return NextResponse.json({
      success: true,
      task,
    });

  } catch (error) {
    console.error('Error updating task:', error);
    return NextResponse.json(
      { error: 'Failed to update task' },
      { status: 500 }
    );
  }
}

/**
 * DELETE /api/crm/tasks/[id]
 * Delete a task
 */
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
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

    // Check if task exists
    const task = await prisma.task.findUnique({
      where: { id: params.id },
    });

    if (!task) {
      return NextResponse.json(
        { error: 'Task not found' },
        { status: 404 }
      );
    }

    // Check permissions
    if (
      task.assignedTo !== user.id &&
      user.role !== 'ADMIN' &&
      user.role !== 'MANAGER'
    ) {
      return NextResponse.json(
        { error: 'Forbidden' },
        { status: 403 }
      );
    }

    // Delete task
    await prisma.task.delete({
      where: { id: params.id },
    });

    return NextResponse.json({
      success: true,
      message: 'Task deleted successfully',
    });

  } catch (error) {
    console.error('Error deleting task:', error);
    return NextResponse.json(
      { error: 'Failed to delete task' },
      { status: 500 }
    );
  }
}
