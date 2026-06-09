import { getAllProjects } from '@/lib/projects'
import ProyectosGrid from '@/components/ProyectosGrid'

export const metadata = {
  title: 'Proyectos — France Interiorismo',
  description: 'Catálogo completo de proyectos de diseño de interiores.',
}

export default function ProyectosPage() {
  const allProjects = getAllProjects()
  const residencial = allProjects.filter((p) => p.category === 'Residencial')
  const comercial = allProjects.filter((p) => p.category === 'Comercial')
  const infantil = allProjects.filter((p) => p.category === 'Infantil')

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-16">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#8a8078] mb-3">Portafolio</p>
        <h1 className="font-serif text-5xl md:text-7xl text-[#1a1a1a]">Proyectos</h1>
      </div>

      <ProyectosGrid residencial={residencial} comercial={comercial} infantil={infantil} />
    </div>
  )
}
