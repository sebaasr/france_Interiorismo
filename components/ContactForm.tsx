'use client'

import { useForm } from '@formspree/react'

export default function ContactForm() {
  const [state, handleSubmit] = useForm('xkokyjkl')

  if (state.succeeded) {
    return (
      <div className="flex flex-col justify-center h-full space-y-4 py-12">
        <p className="font-serif text-2xl text-[#1a1a1a]">Mensaje enviado.</p>
        <p className="text-sm text-[#8a8078]">Gracias por escribir, France te contactará pronto.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input type="hidden" name="_cc" value="francecaballeroid@gmail.com" />
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
        disabled={state.submitting}
        className="mt-4 px-10 py-4 bg-[#1a1a1a] text-[#f5f2ee] text-xs tracking-[0.2em] uppercase hover:opacity-80 transition-opacity disabled:opacity-40"
      >
        {state.submitting ? 'Enviando...' : 'Enviar mensaje'}
      </button>
    </form>
  )
}
