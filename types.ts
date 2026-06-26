// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface CosmicImage {
  url: string;
  imgix_url: string;
}

// Character object
export interface Character extends CosmicObject {
  type: 'characters';
  metadata: {
    name?: string;
    description?: string;
    costume?: string;
    signature?: string;
    portrait?: CosmicImage;
  };
}

// Video object
export interface Video extends CosmicObject {
  type: 'videos';
  metadata: {
    title?: string;
    episode_order?: number;
    scene?: string;
    total_duration?: string;
    synopsis?: string;
    featured_image?: CosmicImage;
    characters?: Character[];
  };
}

// Shot object
export interface Shot extends CosmicObject {
  type: 'shots';
  metadata: {
    title?: string;
    video?: Video | string;
    order?: number;
    time_range?: string;
    shot_type?: string;
    camera_technique?: string;
    camera_angle?: string;
    visual_description?: string;
    dialogue?: string;
    sound_effects?: string;
    visual_effects?: string;
  };
}

// API response type
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}

// Type guards
export function isVideo(obj: CosmicObject): obj is Video {
  return obj.type === 'videos';
}

export function isShot(obj: CosmicObject): obj is Shot {
  return obj.type === 'shots';
}

export function isCharacter(obj: CosmicObject): obj is Character {
  return obj.type === 'characters';
}