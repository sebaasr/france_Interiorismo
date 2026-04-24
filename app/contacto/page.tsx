import ContactForm from '@/components/ContactForm'

export const metadata = {
  title: 'Contacto — France Interiorismo',
  description: 'Hablemos de tu proyecto de diseño de interiores.',
}

export default function ContactoPage() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-16">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#8a8078] mb-3">Conversemos</p>
        <h1 className="font-serif text-5xl md:text-7xl text-[#1a1a1a]">Contacto</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        {/* Left: info */}
        <div className="space-y-10">
          <p className="font-serif text-xl md:text-2xl leading-relaxed text-[#1a1a1a] max-w-sm">
            Cuéntame sobre tu espacio y lo que imaginas para él.
          </p>

          <div className="space-y-6">
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#8a8078] mb-1">Email</p>
              <a
                href="mailto:francecaballeroid@gmail.com"
                className="text-sm text-[#1a1a1a] hover:opacity-60 transition-opacity"
              >
                francecaballeroid@gmail.com
              </a>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#8a8078] mb-1">Instagram</p>
              <a
                href="https://www.instagram.com/france_interiordesign"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#1a1a1a] hover:opacity-60 transition-opacity"
              >
                @france_interiordesign
              </a>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#8a8078] mb-1">WhatsApp</p>
              <a
                href="https://wa.me/50683362084"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#1a1a1a] hover:opacity-60 transition-opacity"
              >
                +506 8336 2084
              </a>
            </div>
          </div>
        </div>

        {/* Right: form */}
        <ContactForm />
      </div>
    </div>
  )
}
