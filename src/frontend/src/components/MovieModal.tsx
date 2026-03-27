import {
  Bookmark,
  BookmarkCheck,
  Calendar,
  Clock,
  Film,
  Globe,
  Play,
  Star,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { MOODS } from "../data/movies";
import type { Movie } from "../data/movies";
import TrailerModal from "./TrailerModal";

interface MovieModalProps {
  movie: Movie | null;
  inWatchlist: boolean;
  onToggleWatchlist: (movie: Movie) => void;
  onClose: () => void;
}

export default function MovieModal({
  movie,
  inWatchlist,
  onToggleWatchlist,
  onClose,
}: MovieModalProps) {
  const [trailerOpen, setTrailerOpen] = useState(false);

  const movieMoods = movie
    ? MOODS.filter((m) => movie.moodIds.includes(m.id))
    : [];

  return (
    <>
      <AnimatePresence>
        {movie && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            />

            {/* Modal */}
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
              data-ocid="movies.modal"
              className="fixed inset-4 sm:inset-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 z-50 w-auto sm:w-full sm:max-w-lg rounded-2xl overflow-hidden border flex flex-col max-h-[90vh]"
              style={{
                background: "oklch(0.13 0.04 265)",
                borderColor: "oklch(0.22 0.04 265)",
              }}
            >
              {/* Poster header */}
              <div
                className="relative h-52 flex-shrink-0"
                style={{ background: movie.posterColor }}
              >
                {/* Movie thumbnail */}
                {movie.thumbnail && (
                  <img
                    src={movie.thumbnail}
                    alt={movie.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* Close */}
                <button
                  type="button"
                  onClick={onClose}
                  data-ocid="movies.close_button"
                  className="absolute top-4 right-4 p-2 rounded-xl backdrop-blur-sm border transition-colors hover:bg-white/10"
                  style={{ borderColor: "oklch(1 0 0 / 20%)" }}
                  aria-label="Close"
                >
                  <X className="h-4 w-4 text-white" />
                </button>

                {/* Rating */}
                <div className="absolute bottom-4 left-4">
                  <h2 className="text-xl font-black text-white mb-1 line-clamp-2 leading-tight">
                    {movie.title}
                  </h2>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star
                          key={s}
                          className="h-3.5 w-3.5"
                          style={{
                            color:
                              s <= Math.round(movie.rating / 2)
                                ? "oklch(0.82 0.18 80)"
                                : "oklch(0.35 0 0)",
                            fill:
                              s <= Math.round(movie.rating / 2)
                                ? "oklch(0.82 0.18 80)"
                                : "oklch(0.35 0 0)",
                          }}
                        />
                      ))}
                    </div>
                    <span
                      className="text-sm font-bold"
                      style={{ color: "oklch(0.82 0.18 80)" }}
                    >
                      {movie.rating.toFixed(1)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-5 space-y-4">
                {/* Meta row */}
                <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {movie.year}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {movie.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Film className="h-3.5 w-3.5" />
                    {movie.genre}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Globe className="h-3.5 w-3.5" />
                    {movie.language}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {movie.description}
                </p>

                {/* Mood tags */}
                {movieMoods.length > 0 && (
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                      Perfect For
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {movieMoods.map((mood) => (
                        <span
                          key={mood.id}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border"
                          style={{
                            background: mood.gradient,
                            borderColor: `${mood.borderColor}60`,
                            color: "oklch(0.92 0 0)",
                          }}
                        >
                          {mood.emoji} {mood.name}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div
                className="p-4 border-t flex gap-3"
                style={{ borderColor: "oklch(0.22 0.04 265)" }}
              >
                <button
                  type="button"
                  onClick={() => {
                    if (movie.trailerUrl) {
                      setTrailerOpen(true);
                    }
                  }}
                  className="flex-1 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90 active:scale-95 neon-glow-purple flex items-center justify-center gap-2"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.47 0.28 285), oklch(0.58 0.28 295))",
                  }}
                  data-ocid="movies.watch.button"
                >
                  <Play className="h-4 w-4 fill-current" />
                  {movie.trailerUrl ? "Play Trailer" : "Watch Now"}
                </button>
                <button
                  type="button"
                  onClick={() => onToggleWatchlist(movie)}
                  data-ocid="movies.bookmark.button"
                  className="px-4 py-2.5 rounded-xl text-sm font-semibold border transition-all hover:bg-secondary active:scale-95"
                  style={{
                    borderColor: inWatchlist
                      ? "oklch(0.51 0.27 285)"
                      : "oklch(0.22 0.04 265)",
                    color: inWatchlist
                      ? "oklch(0.80 0.18 285)"
                      : "oklch(0.72 0.03 255)",
                    background: inWatchlist
                      ? "oklch(0.51 0.27 285 / 15%)"
                      : "transparent",
                  }}
                >
                  {inWatchlist ? (
                    <span className="flex items-center gap-1.5">
                      <BookmarkCheck className="h-4 w-4" /> Saved
                    </span>
                  ) : (
                    <span className="flex items-center gap-1.5">
                      <Bookmark className="h-4 w-4" /> Save
                    </span>
                  )}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Inline Trailer Modal */}
      <TrailerModal
        trailerUrl={trailerOpen && movie?.trailerUrl ? movie.trailerUrl : null}
        onClose={() => setTrailerOpen(false)}
      />
    </>
  );
}
