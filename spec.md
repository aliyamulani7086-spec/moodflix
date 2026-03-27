# MoodFlix

## Current State
- Movie type has `posterColor` (CSS gradient) and `trailerUrl` (YouTube URL)
- MovieCard shows a color gradient as the poster, no real thumbnail image
- MovieModal shows a color gradient as the header, has a "Watch Now" button but no trailer embed
- Clicking trailer in hover preview opens YouTube in a new tab
- 100+ movies in data file with trailerUrl for most

## Requested Changes (Diff)

### Add
- `thumbnail` field to the Movie type: string (URL to a real movie poster image from TMDB/public CDN)
- Real poster thumbnail URLs for all movies using `https://image.tmdb.org/t/p/w500/...` or similar public image URLs
- `TrailerModal` component: a fullscreen-ish modal with an embedded YouTube iframe player (using embed URL format `https://www.youtube.com/embed/VIDEO_ID?autoplay=1`)
- "▶ Play Trailer" button in MovieModal that opens TrailerModal inline (no new tab)

### Modify
- Movie type: add `thumbnail?: string` field
- MovieCard: if `movie.thumbnail` exists, show it as an `<img>` instead of the posterColor gradient; keep posterColor as fallback
- MovieModal: show `movie.thumbnail` as the header image if available; fallback to posterColor gradient. Add "▶ Play Trailer" button next to "Watch Now" that opens TrailerModal
- movies.ts MOVIES array: add real poster thumbnail URLs for all movies. Use TMDB image URLs: `https://image.tmdb.org/t/p/w500/<poster_path>`. Add known poster paths for all 100+ movies.

### Remove
- Nothing removed

## Implementation Plan
1. Update Movie type in movies.ts to add `thumbnail?: string`
2. Add thumbnail URLs for all movies (use TMDB CDN URLs or well-known public poster URLs)
3. Create `src/frontend/src/components/TrailerModal.tsx` - embeds YouTube via iframe with autoplay, has close button, dark overlay
4. Update MovieModal.tsx: show thumbnail img in header, add "▶ Play Trailer" button that sets trailer open state, render TrailerModal
5. Update MovieCard.tsx: render <img> for thumbnail if available, else show posterColor gradient
