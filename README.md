# 华山论剑 · 武侠分镜

![App Preview](https://imgix.cosmicjs.com/eb885040-7169-11f1-a87f-d72293b1048a-autopilot-photo-1483728642387-6c3bdd6c93e5-1782483516222.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A cinematic storyboard showcase for a wuxia (martial arts) short-film series set atop snow-covered Mount Hua. Browse videos, dive into shot-by-shot breakdowns with camera techniques, dialogue, sound effects, and visual effects, and explore the characters of this dramatic ten-year reunion duel between 谢惊鸿 and 空相.

## Features

- 🎬 **Video Library** — Browse all episodes ordered by sequence, each with synopsis, scene, and total duration
- 🎞️ **Shot Breakdowns** — Detailed shot-by-shot views with shot type, camera technique, camera angle, visual description, dialogue, sound effects, and visual effects
- 👤 **Character Profiles** — Explore each character's costume, signature weapon/move, and portrait
- ❄️ **Cinematic Snow-Dark Theme** — Atmospheric design evoking a moonlit snowy night on Mount Hua
- 📱 **Fully Responsive** — Beautiful on desktop, tablet, and mobile
- ⚡ **Server-Rendered with Next.js 16** — Fast, SEO-friendly, and secure

## Clone this Project

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6a3e89cb00113b4e40c8d4f8&clone_repository=6a3e8aec00113b4e40c8d531)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for: 【视频1】场景：华山之巅，千仞绝壁之上。三更时分，月色如淬冰的银箔铺满雪地..." (the full wuxia storyboard script describing 15 video scenes atop Mount Hua, with detailed shot lists including camera techniques, dialogue, sound effects, and visual effects for the duel between 谢惊鸿 and 空相)

### Code Generation Prompt

> Build a Next.js application for a website called "【视频1】". The content is managed in Cosmic CMS with the following object types: characters, videos, shots. Create a beautiful, modern, responsive design with a homepage and pages for each content type.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Cosmic](https://www.cosmicjs.com) headless CMS
- [Cosmic SDK](https://www.cosmicjs.com/docs)

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) or Node.js 18+
- A Cosmic account and bucket with `characters`, `videos`, and `shots` object types

### Installation

```bash
bun install
```

Add your environment variables (handled automatically in the Cosmic dashboard):

```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

Run the development server:

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Cosmic SDK Examples

```typescript
import { cosmic } from '@/lib/cosmic'

// Get all videos sorted by episode order
const response = await cosmic.objects
  .find({ type: 'videos' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

const videos = response.objects

// Get a single video with its shots
const shotsResponse = await cosmic.objects
  .find({ type: 'shots', 'metadata.video': videoId })
  .depth(1)
```

## Cosmic CMS Integration

This app reads three object types from your Cosmic bucket:

- **videos** — title, episode_order, scene, total_duration, synopsis, featured_image, characters (relationship)
- **shots** — title, video (relationship), order, time_range, shot_type, camera_technique, camera_angle, visual_description, dialogue, sound_effects, visual_effects
- **characters** — name, description, costume, signature, portrait

Connected objects are fetched using the `depth` parameter so related characters and videos are available directly in metadata. Learn more in the [Cosmic docs](https://www.cosmicjs.com/docs).

## Deployment Options

### Vercel

1. Push to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Add `COSMIC_BUCKET_SLUG`, `COSMIC_READ_KEY`, `COSMIC_WRITE_KEY` environment variables
4. Deploy

### Netlify

1. Connect your repository in [Netlify](https://netlify.com)
2. Set build command `bun run build` and add environment variables
3. Deploy

<!-- README_END -->