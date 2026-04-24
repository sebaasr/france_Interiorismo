export type Category = 'Residencial' | 'Comercial' | 'Oficinas' | 'Playroom'

export interface ProjectImage {
  src: string
  caption?: string
}

export interface Project {
  id: string
  title: string
  slug: string
  category: Category
  location?: string
  year?: number
  area?: number
  // Path relativo a /public, ej: "/projects/casa-rodriguez/cover.jpg"
  coverImage: string
  images?: ProjectImage[]
  // Texto plano; usa \n\n para separar párrafos
  description?: string
  featured?: boolean
  // Número más bajo = aparece primero
  order?: number
}

export const projects: Project[] = [
  {
    id: 'playroom-sol-y-nico',
    title: 'Playroom Sol y Nico',
    slug: 'playroom-sol-y-nico',
    category: 'Playroom',
    coverImage: '/projects/playroom-sol-y-nico/cover.jpg',
    images: [
      { src: '/projects/playroom-sol-y-nico/01.jpg' },
      { src: '/projects/playroom-sol-y-nico/02.jpg' },
      { src: '/projects/playroom-sol-y-nico/03.jpg' },
      { src: '/projects/playroom-sol-y-nico/04.jpg' },
      { src: '/projects/playroom-sol-y-nico/05.jpg' },
      { src: '/projects/playroom-sol-y-nico/06.jpg' },
      { src: '/projects/playroom-sol-y-nico/07.jpg' },
      { src: '/projects/playroom-sol-y-nico/08.jpg' },
      { src: '/projects/playroom-sol-y-nico/09.jpg' },
      { src: '/projects/playroom-sol-y-nico/10.jpg' },
      { src: '/projects/playroom-sol-y-nico/11.jpg' },
      { src: '/projects/playroom-sol-y-nico/12.jpg' },
      { src: '/projects/playroom-sol-y-nico/13.jpg' },
      { src: '/projects/playroom-sol-y-nico/14.jpg' },
      { src: '/projects/playroom-sol-y-nico/15.jpg' },
      { src: '/projects/playroom-sol-y-nico/16.jpg' },
      { src: '/projects/playroom-sol-y-nico/17.jpg' },
      { src: '/projects/playroom-sol-y-nico/18.jpg' },
      { src: '/projects/playroom-sol-y-nico/19.jpg' },
      { src: '/projects/playroom-sol-y-nico/20.jpg' },
      { src: '/projects/playroom-sol-y-nico/21.jpg' },
    ],
    featured: true,
    order: 1,
  },
]
