import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Linkedin } from 'lucide-react'

export function TheTeam() {
  const team = [
    {
      name: 'שמוליק מרציאנו',
      role: 'מייסד ומנכ"ל',
      bio: 'יזם טכנולוגי עם רקע בציוד אודיו פרימיום. מוביל את החזון של שילוב AI בשירותים פיננסיים.',
      avatar: '👨‍💼',
      linkedin: '#',
    },
    {
      name: 'נינו',
      role: 'שותף, מומחה פיננסים',
      bio: 'מומחה לתכנון פנסיוני ופיננסי עם ניסיון של שנים בתחום. דואג שהלקוחות מקבלים את הייעוץ הטוב ביותר.',
      avatar: '👨‍💻',
      linkedin: '#',
    },
  ]

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-heading">הצוות שלנו</h2>
          <p className="section-subheading">
            האנשים מאחורי המהפכה
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member) => (
            <Card key={member.name} className="hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                {/* Avatar */}
                <div className="mb-4">
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-primary flex items-center justify-center text-5xl">
                    {member.avatar}
                  </div>
                </div>

                {/* Name & Role */}
                <CardTitle className="text-2xl mb-2">{member.name}</CardTitle>
                <p className="text-primary-600 font-medium mb-4">{member.role}</p>

                {/* Bio */}
                <CardDescription className="text-base leading-relaxed mb-4">
                  {member.bio}
                </CardDescription>

                {/* LinkedIn */}
                <div className="flex justify-center">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors"
                    aria-label={`LinkedIn של ${member.name}`}
                  >
                    <Linkedin className="w-5 h-5" />
                    <span className="text-sm">LinkedIn</span>
                  </a>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Future Team Members */}
        <div className="mt-12 text-center">
          <p className="text-neutral-600 mb-4">רוצים להצטרף לצוות?</p>
          <a
            href="/careers"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors"
          >
            ראה משרות פתוחות →
          </a>
        </div>
      </div>
    </section>
  )
}
