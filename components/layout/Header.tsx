'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: 'דף הבית', href: '/' },
    {
      name: 'שירותים',
      href: '/services',
      submenu: [
        { name: 'לפרטיים', href: '/services/individuals' },
        { name: 'לסוכנים', href: '/services/agents' },
        { name: 'מערכת SeelD AI', href: '/services/seeld-ai' },
      ],
    },
    { name: 'אודות', href: '/about' },
    {
      name: 'משאבים',
      href: '/resources',
      submenu: [
        { name: 'בלוג', href: '/resources/blog' },
        { name: 'מחשבונים', href: '/resources/calculators' },
        { name: 'שאלות ותשובות', href: '/resources/faq' },
      ],
    },
    { name: 'צור קשר', href: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Global">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">SeeLD Finance & Insurance</span>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-xl">
                  S
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-neutral-900">
                    SeeLD
                  </span>
                  <span className="text-xs text-primary-600">
                    ai PowerD By UMN
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-neutral-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">פתח תפריט ראשי</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="text-base font-medium leading-6 text-neutral-700 hover:text-primary-600 transition-colors"
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="absolute hidden group-hover:block right-0 z-10 mt-2 w-56 origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          href={subitem.href}
                          className="block px-4 py-2 text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-600"
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
            <Link href="/login">
              <Button variant="ghost" size="sm">
                התחבר
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="sm">התחל עכשיו</Button>
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="space-y-1 pb-4 pt-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-neutral-700 hover:bg-primary-50 hover:text-primary-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="mr-4">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          href={subitem.href}
                          className="block rounded-md px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-600"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="flex flex-col gap-2 px-3 pt-4">
                <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full">
                    התחבר
                  </Button>
                </Link>
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full">התחל עכשיו</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
