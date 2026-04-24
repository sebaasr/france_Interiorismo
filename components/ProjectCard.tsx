import Image from 'next/image'
import Link from 'next/link'
import type { Project } from '@/data/projects'

interface ProjectCardProps {
  project: Project
  index?: number
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <Link href={`/proyectos/${project.slug}`} className="group block">
      <div className="img-zoom relative aspect-[3/4] overflow-hidden bg-[#e8e2d9] mb-4">
        {project.coverImage && (
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={index < 3}
          />
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
      </div>

      <div className="space-y-1">
        <p className="text-[10px] tracking-[0.2em] uppercase text-[#8a8078]">
          {project.category}
          {project.year && ` — ${project.year}`}
        </p>
        <h3 className="font-serif text-xl md:text-2xl leading-tight group-hover:opacity-70 transition-opacity duration-300">
          {project.title}
        </h3>
        {project.location && (
          <p className="text-xs text-[#5a5248]">{project.location}</p>
        )}
      </div>
    </Link>
  )
}
