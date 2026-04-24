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
    id: 'pk3',
    title: 'PK3',
    slug: 'pk3',
    category: 'Playroom',
    coverImage: '/projects/pk3/cover.jpg',
    images: [
      { src: '/projects/pk3/01.jpg' },
      { src: '/projects/pk3/02.jpg' },
      { src: '/projects/pk3/03.jpg' },
      { src: '/projects/pk3/04.jpg' },
      { src: '/projects/pk3/05.jpg' },
      { src: '/projects/pk3/06.jpg' },
      { src: '/projects/pk3/07.jpg' },
      { src: '/projects/pk3/08.jpg' },
      { src: '/projects/pk3/09.jpg' },
      { src: '/projects/pk3/10.jpg' },
      { src: '/projects/pk3/11.jpg' },
      { src: '/projects/pk3/12.jpg' },
      { src: '/projects/pk3/13.jpg' },
      { src: '/projects/pk3/14.jpg' },
      { src: '/projects/pk3/15.jpg' },
      { src: '/projects/pk3/16.jpg' },
      { src: '/projects/pk3/17.jpg' },
      { src: '/projects/pk3/18.jpg' },
      { src: '/projects/pk3/19.jpg' },
      { src: '/projects/pk3/20.jpg' },
      { src: '/projects/pk3/21.jpg' },
      { src: '/projects/pk3/22.jpg' },
      { src: '/projects/pk3/23.jpg' },
      { src: '/projects/pk3/24.jpg' },
      { src: '/projects/pk3/25.jpg' },
      { src: '/projects/pk3/26.jpg' },
      { src: '/projects/pk3/27.jpg' },
      { src: '/projects/pk3/28.jpg' },
      { src: '/projects/pk3/29.jpg' },
      { src: '/projects/pk3/30.jpg' },
      { src: '/projects/pk3/31.jpg' },
      { src: '/projects/pk3/32.jpg' },
      { src: '/projects/pk3/33.jpg' },
      { src: '/projects/pk3/34.jpg' },
      { src: '/projects/pk3/35.jpg' },
      { src: '/projects/pk3/36.jpg' },
      { src: '/projects/pk3/37.jpg' },
      { src: '/projects/pk3/38.jpg' },
      { src: '/projects/pk3/39.jpg' },
      { src: '/projects/pk3/40.jpg' },
    ],
    featured: true,
    order: 2,
  },
  {
    id: 'rios-room',
    title: "Rio's Room",
    slug: 'rios-room',
    category: 'Residencial',
    coverImage: '/projects/rios-room/cover.jpg',
    images: [
      { src: '/projects/rios-room/01.jpg' },
      { src: '/projects/rios-room/02.jpg' },
      { src: '/projects/rios-room/03.jpg' },
      { src: '/projects/rios-room/04.jpg' },
      { src: '/projects/rios-room/05.jpg' },
      { src: '/projects/rios-room/06.jpg' },
      { src: '/projects/rios-room/07.jpg' },
      { src: '/projects/rios-room/08.jpg' },
      { src: '/projects/rios-room/09.jpg' },
      { src: '/projects/rios-room/10.jpg' },
      { src: '/projects/rios-room/11.jpg' },
      { src: '/projects/rios-room/12.jpg' },
      { src: '/projects/rios-room/13.jpg' },
      { src: '/projects/rios-room/14.jpg' },
      { src: '/projects/rios-room/15.jpg' },
      { src: '/projects/rios-room/16.jpg' },
      { src: '/projects/rios-room/17.jpg' },
      { src: '/projects/rios-room/18.jpg' },
      { src: '/projects/rios-room/19.jpg' },
      { src: '/projects/rios-room/20.jpg' },
      { src: '/projects/rios-room/21.jpg' },
    ],
    featured: true,
    order: 3,
  },
]
