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
                href="mailto:hola@franceinteriorismo.com"
                className="text-sm text-[#1a1a1a] hover:opacity-60 transition-opacity"
              >
                hola@franceinteriorismo.com
              </a>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#8a8078] mb-1">Instagram</p>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#1a1a1a] hover:opacity-60 transition-opacity"
              >
                @franceinteriorismo
              </a>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#8a8078] mb-1">WhatsApp</p>
              <a
                href="https://wa.me/573000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#1a1a1a] hover:opacity-60 transition-opacity"
              >
                +57 300 000 0000
              </a>
            </div>
          </div>
        </div>

        {/* Right: form */}
        <form
          action="https://formspree.io/f/tu-form-id"
          method="POST"
          className="space-y-6"
        >
          <div>
            <label className="block text-[10px] tracking-[0.2em] uppercase text-[#8a8078] mb-2">
              Nombre
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full bg-transparent border-b border-[#c9bfb0] py-2 text-sm text-[#1a1a1a] outline-none focus:border-[#1a1a1a] transition-colors placeholder:text-[#c9bfb0]"
              placeholder="Tu nombre"
            />
          </div>

          <div>
            <label className="block text-[10px] tracking-[0.2em] uppercase text-[#8a8078] mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full bg-transparent border-b border-[#c9bfb0] py-2 text-sm text-[#1a1a1a] outline-none focus:border-[#1a1a1a] transition-colors placeholder:text-[#c9bfb0]"
              placeholder="tu@email.com"
            />
          </div>

          <div>
            <label className="block text-[10px] tracking-[0.2em] uppercase text-[#8a8078] mb-2">
              Tipo de proyecto
            </label>
            <select
              name="tipo"
              className="w-full bg-[#f5f2ee] border-b border-[#c9bfb0] py-2 text-sm text-[#1a1a1a] outline-none focus:border-[#1a1a1a] transition-colors"
            >
              <option value="">Seleccionar...</option>
              <option value="residencial">Residencial</option>
              <option value="comercial">Comercial</option>
              <option value="oficinas">Oficinas</option>
              <option value="otro">Otro</option>
            </select>
          </div>

          <div>
            <label className="block text-[10px] tracking-[0.2em] uppercase text-[#8a8078] mb-2">
              Mensaje
            </label>
            <textarea
              name="message"
              rows={5}
              required
              className="w-full bg-transparent border-b border-[#c9bfb0] py-2 text-sm text-[#1a1a1a] outline-none focus:border-[#1a1a1a] transition-colors resize-none placeholder:text-[#c9bfb0]"
              placeholder="Cuéntame sobre tu proyecto..."
            />
          </div>

          <button
            type="submit"
            className="mt-4 px-10 py-4 bg-[#1a1a1a] text-[#f5f2ee] text-xs tracking-[0.2em] uppercase hover:opacity-80 transition-opacity"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </div>
  )
}
