'use client'

import { useState } from 'react'
import Image from 'next/image'
import type { Project } from '@/data/projects'
import ProjectCard from '@/components/ProjectCard'

interface Props {
  category: string
  projects: Project[]
  defaultOpen?: boolean
}

export default function ProyectosCategoria({ category, projects, defaultOpen = false }: Props) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div>
      {/* Folder card */}
      <button
        onClick={() => setOpen(!open)}
        className="relative w-full aspect-[4/3] md:aspect-[16/7] overflow-hidden group mb-1"
      >
        {/* Background: mosaic of first 4 project covers */}
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
          {projects.slice(0, 4).map((p, i) => (
            <div key={i} className="relative overflow-hidden">
              <Image
                src={p.coverImage}
                alt={p.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="50vw"
              />
            </div>
          ))}
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500" />

        {/* Label */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
          <h2 className="font-serif text-4xl md:text-6xl text-white tracking-wide">
            {category}
          </h2>
          <p className="text-[10px] tracking-[0.3em] uppercase text-white/70">
            {projects.length} {projects.length === 1 ? 'proyecto' : 'proyectos'}
          </p>
          <span className={`mt-2 text-white/60 text-xs tracking-[0.2em] uppercase transition-all duration-300 ${open ? 'opacity-0' : 'opacity-100'}`}>
            Ver proyectos ↓
          </span>
        </div>
      </button>

      {/* Expanded grid */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          open ? 'max-h-[9999px] opacity-100 py-12' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </div>
  )
}
