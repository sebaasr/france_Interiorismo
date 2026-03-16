import { groq } from 'next-sanity'

export const allProjectsQuery = groq`
  *[_type == "project"] | order(order asc, year desc) {
    _id,
    title,
    slug,
    category,
    location,
    year,
    area,
    coverImage,
    featured,
    order
  }
`

export const featuredProjectsQuery = groq`
  *[_type == "project" && featured == true] | order(order asc) [0...6] {
    _id,
    title,
    slug,
    category,
    location,
    year,
    coverImage
  }
`

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug] {
    _id,
    title,
    slug,
    category,
    location,
    year,
    area,
    coverImage,
    images,
    description,
    featured
  }
`

export const studioQuery = groq`
  *[_type == "studio"] {
    name,
    tagline,
    bio,
    profileImage,
    instagram,
    email,
    phone
  }
`
