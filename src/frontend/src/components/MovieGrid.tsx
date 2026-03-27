import { Film } from "lucide-react";
import { motion } from "motion/react";
import type { Movie } from "../data/movies";
import MovieCard from "./MovieCard";

interface MovieGridProps {
  movies: Movie[];
  watchlist: string[];
  onToggleWatchlist: (movie: Movie) => void;
  onOpenModal: (movie: Movie) => void;
  title: string;
  isLoading?: boolean;
}

const SKELETON_COUNT = 6;
const SKELETON_KEYS = Array.from(
  { length: SKELETON_COUNT },
  (_, i) => `skel-movie-${i}`,
);

export default function MovieGrid({
  movies,
  watchlist,
  onToggleWatchlist,
  onOpenModal,
  title,
  isLoading,
}: MovieGridProps) {
  return (
    <section className="py-12 px-4 sm:px-6" data-ocid="movies.section">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-black text-foreground">{title}</h2>
          {!isLoading && (
            <p className="text-muted-foreground mt-1 text-sm">
              {movies.length} {movies.length === 1 ? "movie" : "movies"} found
            </p>
          )}
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {SKELETON_KEYS.map((k) => (
              <div
                key={k}
                className="rounded-2xl overflow-hidden"
                data-ocid="movies.loading_state"
              >
                <div className="h-48 bg-card animate-pulse" />
                <div className="p-4 space-y-2 bg-card">
                  <div className="h-4 bg-secondary rounded animate-pulse w-3/4" />
                  <div className="h-3 bg-secondary rounded animate-pulse w-1/2" />
                  <div className="h-8 bg-secondary rounded animate-pulse mt-4" />
                </div>
              </div>
            ))}
          </div>
        ) : movies.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-24 gap-4"
            data-ocid="movies.empty_state"
          >
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center"
              style={{ background: "oklch(0.13 0.04 265)" }}
            >
              <Film className="h-8 w-8 text-muted-foreground" />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold text-foreground mb-1">
                No movies found
              </h3>
              <p className="text-sm text-muted-foreground">
                Try a different mood or search query
              </p>
            </div>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {movies.map((movie, index) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                inWatchlist={watchlist.includes(movie.id)}
                onToggleWatchlist={onToggleWatchlist}
                onOpenModal={onOpenModal}
                index={index}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
