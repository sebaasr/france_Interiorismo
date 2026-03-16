import Image from 'next/image'
import Link from 'next/link'
import { client, urlFor } from '@/sanity/client'
import { studioQuery } from '@/sanity/queries'
import { PortableText } from 'next-sanity'

export const revalidate = 60

export const metadata = {
  title: 'Estudio — France Interiorismo',
  description: 'Conoce a France y el estudio detrás de cada proyecto.',
}

interface Studio {
  name?: string
  tagline?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  bio?: any[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  profileImage?: any
  instagram?: string
  email?: string
  phone?: string
}

export default async function EstudioPage() {
  const studio: Studio | null = await client.fetch(studioQuery).catch(() => null)

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-16">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#8a8078] mb-3">El estudio</p>
        <h1 className="font-serif text-5xl md:text-7xl text-[#1a1a1a]">
          {studio?.name ?? 'France Interiorismo'}
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
        {/* Photo */}
        {studio?.profileImage && (
          <div className="img-zoom overflow-hidden bg-[#e8e2d9] aspect-[3/4] relative">
            <Image
              src={urlFor(studio.profileImage as Parameters<typeof urlFor>[0]).width(900).height(1200).url()}
              alt={studio.name ?? 'France'}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Bio */}
        <div className="space-y-8">
          {studio?.tagline && (
            <p className="font-serif text-2xl md:text-3xl text-[#1a1a1a] leading-relaxed">
              {studio.tagline}
            </p>
          )}

          {studio?.bio && (
            <div className="text-[#5a5248] leading-relaxed space-y-4 text-[15px]">
              <PortableText value={studio.bio} />
            </div>
          )}

          {!studio && (
            <p className="font-serif text-xl text-[#8a8078]">
              Diseñadora de interiores apasionada por crear espacios que reflejen la esencia de cada persona.
            </p>
          )}

          {/* Contact info */}
          <div className="pt-8 border-t border-[#e8e2d9] space-y-3">
            {studio?.email && (
              <a
                href={`mailto:${studio.email}`}
                className="block text-sm text-[#1a1a1a] hover:opacity-60 transition-opacity"
              >
                {studio.email}
              </a>
            )}
            {studio?.instagram && (
              <a
                href={studio.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-[#1a1a1a] hover:opacity-60 transition-opacity"
              >
                Instagram
              </a>
            )}
          </div>

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
