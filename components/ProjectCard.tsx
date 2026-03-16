import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/sanity/client'

interface ProjectCardProps {
  project: {
    _id: string
    title: string
    slug: { current: string }
    category: string
    location?: string
    year?: number
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  coverImage: any
  }
  index?: number
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <Link
      href={`/proyectos/${project.slug.current}`}
      className="group block"
    >
      {/* Image */}
      <div className="img-zoom relative aspect-[3/4] overflow-hidden bg-[#e8e2d9] mb-4">
        {project.coverImage && (
          <Image
            src={urlFor(project.coverImage as Parameters<typeof urlFor>[0]).width(800).height(1066).url()}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={index < 3}
          />
        )}
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
      </div>

      {/* Info */}
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
