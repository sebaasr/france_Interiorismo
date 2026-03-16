'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/proyectos', label: 'Proyectos' },
  { href: '/estudio', label: 'Estudio' },
  { href: '/contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // On non-home pages, always show dark navbar
  const isDark = !isHome || scrolled

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isDark ? 'bg-[#f5f2ee] border-b border-[#e8e2d9]' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link
          href="/"
          className={`font-serif text-xl md:text-2xl tracking-widest uppercase transition-colors duration-500 ${
            isDark ? 'text-[#1a1a1a]' : 'text-white'
          }`}
        >
          France Interiorismo
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-xs tracking-[0.2em] uppercase transition-colors duration-300 hover:opacity-60 ${
                  isDark ? 'text-[#1a1a1a]' : 'text-white'
                } ${pathname === link.href ? 'border-b border-current pb-0.5' : ''}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <span className={`block w-6 h-px transition-all duration-300 ${isDark ? 'bg-[#1a1a1a]' : 'bg-white'} ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-px transition-all duration-300 ${isDark ? 'bg-[#1a1a1a]' : 'bg-white'} ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px transition-all duration-300 ${isDark ? 'bg-[#1a1a1a]' : 'bg-white'} ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 bg-[#f5f2ee] ${
          menuOpen ? 'max-h-64' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col px-6 pb-6 gap-4">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-xs tracking-[0.2em] uppercase text-[#1a1a1a] hover:opacity-60 transition-opacity"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
