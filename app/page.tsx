import Link from 'next/link'
import { getFeaturedProjects } from '@/lib/projects'
import ProjectCard from '@/components/ProjectCard'

export default function HomePage() {
  const projects = getFeaturedProjects()

  return (
    <>
      {/* Hero */}
      <section className="relative h-screen flex items-end pb-16 px-6 md:px-12 bg-[#1a1a1a] overflow-hidden">
        {/* Placeholder gradient — reemplazar con imagen real */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2e2a26] via-[#1a1a1a] to-[#0d0d0d]" />

        <div className="relative z-10 max-w-7xl w-full mx-auto">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#c9bfb0] mb-4">
            Diseño de Interiores
          </p>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-white leading-[1.0] max-w-3xl italic">
            Ser para Estar
          </h1>
          <div className="mt-8 flex items-center gap-8">
            <Link
              href="/proyectos"
              className="text-xs tracking-[0.2em] uppercase text-white border-b border-white pb-1 hover:opacity-60 transition-opacity"
            >
              Ver proyectos
            </Link>
            <Link
              href="/contacto"
              className="text-xs tracking-[0.2em] uppercase text-[#c9bfb0] hover:text-white transition-colors"
            >
              Contactar
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="max-w-xl">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#8a8078] mb-6">Estudio</p>
          <p className="font-serif text-2xl md:text-3xl leading-relaxed text-[#1a1a1a]">
            El diseño va más allá de crear espacios hermosos. Se trata de conectar contigo, entender quién eres, y traducirlo en un lugar que puedas habitar.
          </p>
          <p className="font-serif text-lg md:text-xl italic text-[#8a8078] mt-4">
            — Ser para Estar
          </p>
          <Link
            href="/estudio"
            className="inline-block mt-8 text-xs tracking-[0.2em] uppercase text-[#1a1a1a] border-b border-[#1a1a1a] pb-1 hover:opacity-60 transition-opacity"
          >
            Conoce el estudio
          </Link>
        </div>
      </section>

      {/* Featured projects */}
      {projects.length > 0 && (
        <section className="py-12 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#8a8078]">Proyectos destacados</p>
            <Link
              href="/proyectos"
              className="text-xs tracking-[0.2em] uppercase text-[#1a1a1a] border-b border-[#1a1a1a] pb-1 hover:opacity-60 transition-opacity"
            >
              Ver todos
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </section>
      )}

      {/* CTA Contacto */}
      <section className="py-24 md:py-36 px-6 md:px-12 bg-[#1a1a1a] mt-20 text-center">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#8a8078] mb-6">¿Tienes un proyecto?</p>
        <h2 className="font-serif text-4xl md:text-6xl text-white mb-10">
          Hablemos
        </h2>
        <Link
          href="/contacto"
          className="inline-block px-10 py-4 border border-[#c9bfb0] text-[#c9bfb0] text-xs tracking-[0.2em] uppercase hover:bg-[#c9bfb0] hover:text-[#1a1a1a] transition-colors duration-300"
        >
          Iniciar un proyecto
        </Link>
      </section>
    </>
  )
}
