'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Send, CheckCircle2, AlertCircle } from 'lucide-react'

const contactSchema = z.object({
  name: z.string().min(2, 'שם חייב להכיל לפחות 2 תווים'),
  email: z.string().email('כתובת מייל לא תקינה'),
  phone: z
    .string()
    .regex(/^05\d{1}-?\d{7}$/, 'מספר טלפון לא תקין (חייב להתחיל ב-05)')
    .or(z.string().regex(/^05\d{8}$/, 'מספר טלפון לא תקין')),
  service: z.string().optional(),
  message: z.string().optional(),
})

type ContactFormData = z.infer<typeof contactSchema>

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: result.message || 'ההודעה נשלחה בהצלחה!',
        })
        reset()
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.error || 'שגיאה בשליחת הטופס',
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'שגיאה בחיבור לשרת. אנא נסה שוב.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Name */}
      <div>
        <Label htmlFor="name">שם מלא *</Label>
        <Input
          id="name"
          type="text"
          placeholder="שם מלא"
          {...register('name')}
          className={errors.name ? 'border-red-500' : ''}
        />
        {errors.name && (
          <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <Label htmlFor="email">מייל *</Label>
        <Input
          id="email"
          type="email"
          placeholder="email@example.com"
          {...register('email')}
          className={errors.email ? 'border-red-500' : ''}
        />
        {errors.email && (
          <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <Label htmlFor="phone">טלפון *</Label>
        <Input
          id="phone"
          type="tel"
          placeholder="050-123-4567"
          {...register('phone')}
          className={errors.phone ? 'border-red-500' : ''}
        />
        {errors.phone && (
          <p className="text-sm text-red-500 mt-1">{errors.phone.message}</p>
        )}
      </div>

      {/* Service */}
      <div>
        <Label htmlFor="service">איזה שירות מעניין אותך?</Label>
        <select
          id="service"
          {...register('service')}
          className="flex h-11 w-full rounded-lg border-2 border-neutral-300 bg-white px-4 py-3 text-base focus-visible:outline-none focus-visible:border-primary-500 focus-visible:ring-2 focus-visible:ring-primary-200 transition-all duration-200"
        >
          <option value="">בחר שירות</option>
          <option value="pension">ייעוץ פנסיוני</option>
          <option value="financial">תכנון פיננסי</option>
          <option value="retirement">תכנון פרישה</option>
          <option value="insurance">ביטוחים</option>
          <option value="mortgage">משכנתאות</option>
          <option value="household">ניהול משק בית</option>
          <option value="agent">הצטרפות כסוכן</option>
          <option value="seeld-ai">מערכת SeelD AI</option>
          <option value="other">אחר</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <Label htmlFor="message">הודעה</Label>
        <Textarea
          id="message"
          placeholder="ספרו לנו קצת על מה שאתם מחפשים..."
          rows={4}
          {...register('message')}
        />
      </div>

      {/* Status Messages */}
      {submitStatus.type && (
        <div
          className={`p-4 rounded-lg flex items-start gap-3 ${
            submitStatus.type === 'success'
              ? 'bg-green-50 border border-green-200'
              : 'bg-red-50 border border-red-200'
          }`}
        >
          {submitStatus.type === 'success' ? (
            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
          ) : (
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          )}
          <p
            className={`text-sm ${
              submitStatus.type === 'success' ? 'text-green-700' : 'text-red-700'
            }`}
          >
            {submitStatus.message}
          </p>
        </div>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        className="w-full"
        size="lg"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'שולח...' : 'שלח הודעה'}
        <Send className="mr-2 h-4 w-4" />
      </Button>

      <p className="text-xs text-neutral-500 text-center">
        * שדות חובה. אנחנו לא שולחים ספאם ושומרים על הפרטיות שלכם.
      </p>
    </form>
  )
}
