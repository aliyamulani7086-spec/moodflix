import {
  Bookmark,
  BookmarkCheck,
  Clock,
  Film,
  Globe,
  Star,
} from "lucide-react";
import { motion } from "motion/react";
import type { Movie } from "../data/movies";

interface MovieCardProps {
  movie: Movie;
  inWatchlist: boolean;
  onToggleWatchlist: (movie: Movie) => void;
  onOpenModal: (movie: Movie) => void;
  index: number;
}

export default function MovieCard({
  movie,
  inWatchlist,
  onToggleWatchlist,
  onOpenModal,
  index,
}: MovieCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.05, 0.4) }}
      className="group relative flex flex-col rounded-2xl overflow-hidden border cursor-pointer transition-all hover:-translate-y-1"
      style={{
        background: "oklch(0.13 0.04 265)",
        borderColor: "oklch(0.22 0.04 265)",
      }}
      onClick={() => onOpenModal(movie)}
      data-ocid={`movies.item.${index + 1}`}
    >
      {/* Poster */}
      <div
        className="relative h-48 w-full flex items-end p-4"
        style={{ background: movie.posterColor }}
      >
        {/* Movie thumbnail image */}
        {movie.thumbnail && (
          <img
            src={movie.thumbnail}
            alt={movie.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Bookmark */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onToggleWatchlist(movie);
          }}
          data-ocid={`movies.bookmark.${index + 1}`}
          className="absolute top-3 right-3 p-2 rounded-lg transition-all backdrop-blur-sm border z-10"
          style={{
            background: inWatchlist
              ? "oklch(0.51 0.27 285 / 80%)"
              : "oklch(0.09 0.03 265 / 60%)",
            borderColor: inWatchlist
              ? "oklch(0.51 0.27 285)"
              : "oklch(0.22 0.04 265)",
          }}
          aria-label={
            inWatchlist ? "Remove from watchlist" : "Add to watchlist"
          }
        >
          {inWatchlist ? (
            <BookmarkCheck className="h-4 w-4 text-white" />
          ) : (
            <Bookmark className="h-4 w-4 text-white" />
          )}
        </button>

        {/* Rating badge */}
        <div
          className="relative z-10 flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-bold backdrop-blur-sm"
          style={{ background: "oklch(0.09 0.03 265 / 70%)" }}
        >
          <Star
            className="h-3 w-3 fill-current"
            style={{ color: "oklch(0.82 0.18 80)" }}
          />
          <span style={{ color: "oklch(0.82 0.18 80)" }}>
            {movie.rating.toFixed(1)}
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-4 gap-2">
        <div>
          <h3 className="font-bold text-foreground line-clamp-1 text-sm leading-snug">
            {movie.title}
          </h3>
          <span className="text-xs text-muted-foreground">{movie.year}</span>
        </div>

        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Film className="h-3 w-3" />
            <span className="line-clamp-1">{movie.genre}</span>
          </span>
          <span className="flex items-center gap-1 flex-shrink-0">
            <Clock className="h-3 w-3" />
            {movie.duration}
          </span>
        </div>

        {/* Language badge */}
        <div className="flex items-center gap-1">
          <span
            className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium border"
            style={{
              background: "oklch(0.87 0.15 200 / 10%)",
              borderColor: "oklch(0.87 0.15 200 / 40%)",
              color: "oklch(0.87 0.15 200)",
            }}
          >
            <Globe className="h-2.5 w-2.5" />
            {movie.language}
          </span>
        </div>

        <p className="text-xs text-muted-foreground line-clamp-2 flex-1">
          {movie.description}
        </p>

        {/* Watch Now button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onOpenModal(movie);
          }}
          data-ocid={`movies.watch.${index + 1}`}
          className="mt-2 w-full py-2 rounded-lg text-xs font-semibold border transition-all hover:bg-neon-cyan/10 active:scale-95"
          style={{
            borderColor: "oklch(0.87 0.15 200 / 60%)",
            color: "oklch(0.87 0.15 200)",
          }}
        >
          {movie.trailerUrl ? "▶ Play Trailer" : "Watch Now"}
        </button>
      </div>
    </motion.article>
  );
}
