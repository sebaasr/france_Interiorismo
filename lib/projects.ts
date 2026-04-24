import { projects, type Project } from '@/data/projects'

export type { Project }

export function getAllProjects(): Project[] {
  return [...projects].sort((a, b) => {
    if (a.order !== undefined && b.order !== undefined) return a.order - b.order
    return (b.year ?? 0) - (a.year ?? 0)
  })
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((p) => p.featured)
}

export function getProjectBySlug(slug: string): Project | null {
  return projects.find((p) => p.slug === slug) ?? null
}

export function getAllSlugs(): string[] {
  return projects.map((p) => p.slug)
}
