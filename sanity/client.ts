import { createClient } from 'next-sanity'
import { createImageUrlBuilder } from '@sanity/image-url'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01'

const isConfigured = typeof projectId === 'string' && /^[a-z0-9-]+$/.test(projectId)

export const client = createClient({
  projectId: isConfigured ? projectId : 'aaaaaaaa',
  dataset,
  apiVersion,
  useCdn: isConfigured,
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function sanityFetch<T>(query: string, params?: Record<string, any>): Promise<T[]> {
  if (!isConfigured) return []
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const result = await client.fetch<T[] | T | null>(query, params as any).catch(() => null)
  if (result === null || result === undefined) return []
  if (Array.isArray(result)) return result
  return [result as T]
}

const builder = createImageUrlBuilder(client)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  return builder.image(source)
}
