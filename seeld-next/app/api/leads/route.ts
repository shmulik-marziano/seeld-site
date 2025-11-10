import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, service, message } = body

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'שדות חובה חסרים' },
        { status: 400 }
      )
    }

    // Save lead to database
    const lead = await prisma.lead.create({
      data: {
        name,
        email,
        phone,
        service: service || 'לא צוין',
        message: message || '',
        source: 'website',
        status: 'NEW',
      },
    })

    // TODO: Send email notification (will be added later)
    // await sendEmailNotification(lead)

    return NextResponse.json(
      {
        success: true,
        message: 'ההודעה נשלחה בהצלחה! נחזור אליך בקרוב.',
        leadId: lead.id
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error saving lead:', error)
    return NextResponse.json(
      { error: 'שגיאה בשליחת הטופס. אנא נסה שוב.' },
      { status: 500 }
    )
  }
}
