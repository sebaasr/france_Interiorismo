import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-[#1a1a1a] text-[#c9bfb0] py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <p className="font-serif text-2xl text-white tracking-widest uppercase mb-3">
            France Interiorismo
          </p>
          <p className="text-sm leading-relaxed text-[#8a8078]">
            Diseño de interiores que conecta con quien eres.
          </p>
        </div>

        <div>
          <p className="text-xs tracking-[0.2em] uppercase mb-4 text-white">Navegación</p>
          <ul className="space-y-2">
            {[
              { href: '/proyectos', label: 'Proyectos' },
              { href: '/estudio', label: 'Estudio' },
              { href: '/contacto', label: 'Contacto' },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs tracking-[0.2em] uppercase mb-4 text-white">Contacto</p>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="mailto:hola@franceinteriorismo.com"
                className="hover:text-white transition-colors duration-200"
              >
                hola@franceinteriorismo.com
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-200"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-[#2e2e2e] flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-[#8a8078]">
        <p>© {year} France Interiorismo. Todos los derechos reservados.</p>
        <p>Diseño & Desarrollo por tu nombre</p>
      </div>
    </footer>
  )
}
