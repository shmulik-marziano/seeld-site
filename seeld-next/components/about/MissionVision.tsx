import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Target, Eye } from 'lucide-react'

export function MissionVision() {
  return (
    <section className="section-padding bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Mission */}
          <Card className="border-2 border-primary-200 hover:border-primary-300 transition-colors">
            <CardHeader>
              <div className="w-14 h-14 rounded-xl bg-primary-100 flex items-center justify-center mb-4">
                <Target className="w-7 h-7 text-primary-600" />
              </div>
              <CardTitle className="text-2xl mb-4">המשימה שלנו</CardTitle>
              <CardDescription className="text-lg leading-relaxed text-neutral-700">
                להפוך ייעוץ פיננסי לנגיש, שקוף ויעיל עבור כולם - באמצעות שילוב ייחודי של
                מומחיות אנושית וכוח הבינה המלאכותית. אנחנו כאן כדי לוודא שכל אדם יכול
                לקבל ייעוץ ברמה מקצועית ללא פשרות.
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Vision */}
          <Card className="border-2 border-secondary-200 hover:border-secondary-300 transition-colors">
            <CardHeader>
              <div className="w-14 h-14 rounded-xl bg-secondary-100 flex items-center justify-center mb-4">
                <Eye className="w-7 h-7 text-secondary-600" />
              </div>
              <CardTitle className="text-2xl mb-4">החזון שלנו</CardTitle>
              <CardDescription className="text-lg leading-relaxed text-neutral-700">
                עולם שבו כל אדם יכול לקבל ייעוץ פיננסי ברמה של מנכ"ל - וכל סוכן יכול
                להתמקד באנשים, לא בניירת. אנחנו רוצים ליצור תקן חדש בתעשייה שבו
                טכנולוגיה משרתת את האנשים, לא להפך.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  )
}
