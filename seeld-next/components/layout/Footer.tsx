import Link from 'next/link'
import { Facebook, Instagram, Linkedin } from 'lucide-react'

export function Footer() {
  const footerSections = [
    {
      title: 'החברה',
      links: [
        { name: 'אודות', href: '/about' },
        { name: 'הצוות שלנו', href: '/about#team' },
        { name: 'קריירה', href: '/careers' },
        { name: 'תקשורת', href: '/press' },
      ],
    },
    {
      title: 'שירותים',
      links: [
        { name: 'לפרטיים', href: '/services/individuals' },
        { name: 'לסוכנים', href: '/services/agents' },
        { name: 'מערכת SeelD AI', href: '/services/seeld-ai' },
        { name: 'מחירים', href: '/pricing' },
      ],
    },
    {
      title: 'משאבים',
      links: [
        { name: 'בלוג', href: '/resources/blog' },
        { name: 'מחשבונים', href: '/resources/calculators' },
        { name: 'שאלות ותשובות', href: '/resources/faq' },
        { name: 'צור קשר', href: '/contact' },
      ],
    },
    {
      title: 'משפטי',
      links: [
        { name: 'מדיניות פרטיות', href: '/privacy' },
        { name: 'תנאי שימוש', href: '/terms' },
        { name: 'הצהרת נגישות', href: '/accessibility' },
      ],
    },
  ]

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: Linkedin,
    },
    {
      name: 'Facebook',
      href: 'https://facebook.com',
      icon: Facebook,
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com',
      icon: Instagram,
    },
  ]

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-bold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-neutral-300 hover:text-primary-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-neutral-700 pt-8 mb-8">
          <div className="max-w-md">
            <h3 className="text-lg font-bold mb-2">הישארו מעודכנים</h3>
            <p className="text-neutral-300 mb-4">
              הצטרפו לניוזלטר שלנו וקבלו טיפים פיננסיים והמלצות
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="המייל שלך"
                className="flex-1 px-4 py-2 rounded-lg bg-neutral-800 border border-neutral-700 focus:border-primary-500 focus:outline-none text-white"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors font-medium"
              >
                הרשמה
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-700 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo and Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold">
                S
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold">SeeLD FiNANce & INs'</span>
                <span className="text-xs text-primary-400">ai PowerD By UMN</span>
              </div>
            </div>
            <p className="text-sm text-neutral-400 text-center md:text-right">
              © {new Date().getFullYear()} SeeLD Finance & Insurance. כל הזכויות
              שמורות.
            </p>
            <p className="text-xs text-neutral-500">מורשה ומוסדר | רישיון סוכנות ביטוח</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-primary-500 flex items-center justify-center transition-colors"
                  aria-label={social.name}
                >
                  <Icon className="w-5 h-5" />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
