import { createBucketClient } from '@cosmicjs/sdk'
import { Video, Shot, Character } from '@/types'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
})

// Simple error helper for Cosmic SDK
export function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error
}

// Safely render metafield values
export function getMetafieldValue(field: unknown): string {
  if (field === null || field === undefined) return ''
  if (typeof field === 'string') return field
  if (typeof field === 'number' || typeof field === 'boolean') return String(field)
  if (typeof field === 'object' && field !== null && 'value' in field) {
    return String((field as { value: unknown }).value)
  }
  if (typeof field === 'object' && field !== null && 'key' in field) {
    return String((field as { key: unknown }).key)
  }
  return ''
}

// Get all videos sorted by episode_order
export async function getVideos(): Promise<Video[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'videos' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)

    const videos = response.objects as Video[]
    return videos.sort((a, b) => {
      const orderA = a.metadata?.episode_order ?? 0
      const orderB = b.metadata?.episode_order ?? 0
      return orderA - orderB
    })
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch videos')
  }
}

// Get a single video by slug
export async function getVideo(slug: string): Promise<Video | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'videos', slug })
      .depth(1)

    const video = response.object as Video
    if (!video) return null
    return video
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch video')
  }
}

// Get shots for a video by video id, sorted by order
export async function getShotsForVideo(videoId: string): Promise<Shot[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'shots', 'metadata.video': videoId })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)

    const shots = response.objects as Shot[]
    return shots.sort((a, b) => {
      const orderA = a.metadata?.order ?? 0
      const orderB = b.metadata?.order ?? 0
      return orderA - orderB
    })
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch shots')
  }
}

// Get all shots
export async function getShots(): Promise<Shot[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'shots' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)

    return response.objects as Shot[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch shots')
  }
}

// Get a single shot by slug
export async function getShot(slug: string): Promise<Shot | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'shots', slug })
      .depth(1)

    const shot = response.object as Shot
    if (!shot) return null
    return shot
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch shot')
  }
}

// Get all characters
export async function getCharacters(): Promise<Character[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'characters' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)

    return response.objects as Character[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch characters')
  }
}

// Get a single character by slug
export async function getCharacter(slug: string): Promise<Character | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'characters', slug })
      .depth(1)

    const character = response.object as Character
    if (!character) return null
    return character
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch character')
  }
}