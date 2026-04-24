import { getAllProjects } from '@/lib/projects'
import ProjectCard from '@/components/ProjectCard'

export const metadata = {
  title: 'Proyectos — France Interiorismo',
  description: 'Catálogo completo de proyectos de diseño de interiores.',
}

export default function ProyectosPage() {
  const projects = getAllProjects()

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-16">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#8a8078] mb-3">Portafolio</p>
        <h1 className="font-serif text-5xl md:text-7xl text-[#1a1a1a]">Proyectos</h1>
      </div>

      {/* Projects grid */}
      {projects.length === 0 ? (
        <div className="py-32 text-center">
          <p className="font-serif text-2xl text-[#8a8078]">Próximamente...</p>
          <p className="text-sm text-[#8a8078] mt-2">Los proyectos se están cargando.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      )}
    </div>
  )
}
