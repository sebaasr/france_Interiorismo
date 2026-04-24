import Link from 'next/link'

export const metadata = {
  title: 'Estudio — France Interiorismo',
  description: 'Conoce a France y el estudio detrás de cada proyecto.',
}

export default function EstudioPage() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-16">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#8a8078] mb-3">El estudio</p>
        <h1 className="font-serif text-5xl md:text-7xl text-[#1a1a1a]">France Interiorismo</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
        {/* Placeholder foto — reemplazar con imagen real */}
        <div className="bg-[#e8e2d9] aspect-[3/4]" />

        {/* Bio */}
        <div className="space-y-8">
          <p className="font-serif text-2xl md:text-3xl text-[#1a1a1a] leading-relaxed">
            Diseñadora de interiores apasionada por crear espacios que reflejen la esencia de cada persona.
          </p>

          <Link
            href="/contacto"
            className="inline-block mt-4 px-8 py-3 bg-[#1a1a1a] text-[#f5f2ee] text-xs tracking-[0.2em] uppercase hover:opacity-80 transition-opacity"
          >
            Iniciar un proyecto
          </Link>
        </div>
      </div>
    </div>
  )
}
