'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'דוד כהן',
      role: 'בן 42, הייטק',
      rating: 5,
      text: 'שמוליק לא רק מצא לי פנסיה טובה יותר - הוא עזר לי להבין לראשונה מה אני בעצם עושה עם הכסף שלי. השקיפות והמקצועיות פשוט יוצאות דופן.',
      image: '👨‍💼',
    },
    {
      id: 2,
      name: 'רונית לוי',
      role: 'בת 38, מורה',
      rating: 5,
      text: 'אחרי 10 שנים שחשבתי שהכל בסדר, גיליתי שיכולתי לחסוך 2,000 ₪ בחודש! תודה על היעוץ המקצועי והאכפתי.',
      image: '👩‍🏫',
    },
    {
      id: 3,
      name: 'משה דהן',
      role: 'בן 55, עצמאי',
      rating: 5,
      text: 'השקיפות והמקצועיות פשוט לא דומים לשום דבר שחוויתי עם סוכני ביטוח אחרים. סוף סוף מישהו שחושב על הלקוח.',
      image: '👨‍💻',
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-heading">מה הלקוחות שלנו אומרים</h2>
          <p className="section-subheading">
            סיפורי הצלחה אמיתיים מלקוחות מרוצים
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="relative">
            <CardContent className="p-8 md:p-12">
              {/* Quote Icon */}
              <div className="absolute top-8 right-8 text-primary-200">
                <Quote className="w-16 h-16" />
              </div>

              {/* Testimonial Content */}
              <div className="relative z-10">
                {/* Avatar */}
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center text-4xl">
                    {currentTestimonial.image}
                  </div>
                </div>

                {/* Rating */}
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Text */}
                <blockquote className="text-xl md:text-2xl text-neutral-700 text-center mb-6 leading-relaxed font-medium">
                  "{currentTestimonial.text}"
                </blockquote>

                {/* Author */}
                <div className="text-center">
                  <p className="font-bold text-lg text-neutral-900">
                    {currentTestimonial.name}
                  </p>
                  <p className="text-sm text-neutral-600">
                    {currentTestimonial.role}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              aria-label="המלצה קודמת"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-primary-500 w-8'
                      : 'bg-neutral-300 hover:bg-neutral-400'
                  }`}
                  aria-label={`עבור להמלצה ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              aria-label="המלצה הבאה"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
