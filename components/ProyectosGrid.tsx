'use client'

import { useState } from 'react'
import Image from 'next/image'
import type { Project, Category } from '@/data/projects'
import ProjectCard from '@/components/ProjectCard'

interface Props {
  residencial: Project[]
  comercial: Project[]
  infantil: Project[]
}

const categories: { key: Category; label: string }[] = [
  { key: 'Residencial', label: 'Residencial' },
  { key: 'Infantil', label: 'Infantil' },
  { key: 'Comercial', label: 'Comercial' },
]

export default function ProyectosGrid({ residencial, comercial, infantil }: Props) {
  const [open, setOpen] = useState<Category | null>(null)

  const projectsMap: Record<Category, Project[]> = { Residencial: residencial, Comercial: comercial, Infantil: infantil }

  function toggle(cat: Category) {
    setOpen((prev) => (prev === cat ? null : cat))
  }

  return (
    <div>
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {categories.map(({ key, label }) => {
          const projects = projectsMap[key]
          const cover = projects[0]?.coverImage
          const isOpen = open === key

          return (
            <button
              key={key}
              onClick={() => toggle(key)}
              className="relative w-full aspect-[4/3] overflow-hidden group"
            >
              {cover && (
                <Image
                  src={cover}
                  alt={label}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              )}
              <div className={`absolute inset-0 transition-colors duration-500 ${isOpen ? 'bg-black/20' : 'bg-black/45 group-hover:bg-black/30'}`} />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <h2 className="font-serif text-3xl md:text-4xl text-white">{label}</h2>
                <p className="text-[10px] tracking-[0.3em] uppercase text-white/70">
                  {projects.length} proyectos
                </p>
              </div>
            </button>
          )
        })}
      </div>

      {/* Expanded grid — full width below cards */}
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${open ? 'max-h-[9999px] opacity-100 pt-12 pb-4' : 'max-h-0 opacity-0'}`}>
        {open && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {projectsMap[open].map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
