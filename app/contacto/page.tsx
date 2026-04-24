export const metadata = {
  title: 'Contacto — France Interiorismo',
  description: 'Hablemos de tu proyecto de diseño de interiores.',
}

export default function ContactoPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-16">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#8a8078] mb-3">Conversemos</p>
        <h1 className="font-serif text-5xl md:text-7xl text-[#1a1a1a]">¡Contáctame!</h1>
      </div>

      <div className="max-w-lg">
        <p className="font-serif text-xl md:text-2xl leading-relaxed text-[#1a1a1a] mb-12">
          Cuéntame sobre tu espacio y lo que imaginas para él.
        </p>

        <div className="space-y-6">
          <a
            href="https://wa.me/50683362084"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between w-full px-8 py-5 bg-[#1a1a1a] text-[#f5f2ee] text-xs tracking-[0.2em] uppercase hover:opacity-80 transition-opacity"
          >
            Escribir por WhatsApp
            <span className="text-[#c9bfb0]">+506 8336 2084</span>
          </a>

          <a
            href="https://www.instagram.com/france_interiordesign"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between w-full px-8 py-5 border border-[#c9bfb0] text-[#1a1a1a] text-xs tracking-[0.2em] uppercase hover:bg-[#e8e2d9] transition-colors"
          >
            Escribir por Instagram
            <span className="text-[#8a8078]">@france_interiordesign</span>
          </a>
        </div>
      </div>
    </div>
  )
}
