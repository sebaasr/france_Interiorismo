import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { sanityFetch, urlFor } from '@/sanity/client'
import { projectBySlugQuery, allProjectsQuery } from '@/sanity/queries'
import { PortableText } from 'next-sanity'

export const revalidate = 60

interface SanityImage {
  _key?: string
  caption?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

interface Project {
  _id: string
  title: string
  slug: { current: string }
  category: string
  location?: string
  year?: number
  area?: number
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  coverImage: any
  images?: SanityImage[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  description?: any[]
}

export async function generateStaticParams() {
  const projects: Project[] = await sanityFetch<Project>(allProjectsQuery)
  return projects.map((p) => ({ slug: p.slug.current }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const results = await sanityFetch<Project>(projectBySlugQuery, { slug })
  const project = results[0] ?? null
  if (!project) return {}
  return {
    title: `${project.title} — France Interiorismo`,
    description: `Proyecto de diseño de interiores: ${project.title}. ${project.category}, ${project.year ?? ''}.`,
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const results = await sanityFetch<Project>(projectBySlugQuery, { slug })
  const project: Project | null = results[0] ?? null

  if (!project) notFound()

  return (
    <div className="pt-24">
      {/* Hero image */}
      <div className="relative h-[70vh] md:h-screen bg-[#1a1a1a] overflow-hidden">
        {project.coverImage && (
          <Image
            src={urlFor(project.coverImage as Parameters<typeof urlFor>[0]).width(1920).height(1080).url()}
            alt={project.title}
            fill
            className="object-cover opacity-90"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#c9bfb0] mb-2">
            {project.category}
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-tight">
            {project.title}
          </h1>
        </div>
      </div>

      {/* Project info */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20">
          {/* Metadata */}
          <div className="md:col-span-1 space-y-8">
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#8a8078] mb-1">Categoría</p>
              <p className="font-serif text-lg">{project.category}</p>
            </div>
            {project.location && (
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#8a8078] mb-1">Ubicación</p>
                <p className="font-serif text-lg">{project.location}</p>
              </div>
            )}
            {project.year && (
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#8a8078] mb-1">Año</p>
                <p className="font-serif text-lg">{project.year}</p>
              </div>
            )}
            {project.area && (
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#8a8078] mb-1">Área</p>
                <p className="font-serif text-lg">{project.area} m²</p>
              </div>
            )}
          </div>

          {/* Description */}
          {project.description && (
            <div className="md:col-span-2 prose prose-lg max-w-none">
              <div className="font-serif text-lg md:text-xl leading-relaxed text-[#1a1a1a] [&_p]:mb-4">
                <PortableText value={project.description} />
              </div>
            </div>
          )}
        </div>

        {/* Gallery */}
        {project.images && project.images.length > 0 && (
          <div className="mt-16 md:mt-24">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#8a8078] mb-8">Galería</p>
            <div className="columns-1 md:columns-2 gap-4 space-y-4">
              {project.images.map((img, i) => (
                <div key={img._key ?? i} className="break-inside-avoid img-zoom overflow-hidden bg-[#e8e2d9] relative">
                  <Image
                    src={urlFor(img as Parameters<typeof urlFor>[0]).width(1200).url()}
                    alt={img.caption ?? `${project.title} — imagen ${i + 1}`}
                    width={1200}
                    height={800}
                    className="w-full h-auto"
                  />
                  {img.caption && (
                    <p className="text-xs text-[#8a8078] mt-2 px-1">{img.caption}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Back link */}
        <div className="mt-16 pt-12 border-t border-[#e8e2d9]">
          <Link
            href="/proyectos"
            className="text-xs tracking-[0.2em] uppercase text-[#1a1a1a] border-b border-[#1a1a1a] pb-1 hover:opacity-60 transition-opacity"
          >
            ← Todos los proyectos
          </Link>
        </div>
      </div>
    </div>
  )
}
