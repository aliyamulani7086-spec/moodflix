import {
  BookmarkCheck,
  ChevronLeft,
  ChevronRight,
  Plus,
  Star,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useRef, useState } from "react";
import type { Movie } from "../data/movies";

interface MovieRowProps {
  title: string;
  movies: Movie[];
  watchlist: string[];
  onToggleWatchlist: (movie: Movie) => void;
  onOpenModal: (movie: Movie) => void;
  rowIndex?: number;
}

export default function MovieRow({
  title,
  movies,
  watchlist,
  onToggleWatchlist,
  onOpenModal,
  rowIndex = 0,
}: MovieRowProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [previewId, setPreviewId] = useState<string | null>(null);
  const hoverTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  if (movies.length === 0) return null;

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = dir === "left" ? -520 : 520;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setShowLeft(scrollLeft > 10);
    setShowRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const handleHoverStart = (movieId: string) => {
    setHoveredId(movieId);
    hoverTimerRef.current = setTimeout(() => {
      setPreviewId(movieId);
    }, 1000);
  };

  const handleHoverEnd = () => {
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
      hoverTimerRef.current = null;
    }
    setHoveredId(null);
    setPreviewId(null);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: rowIndex * 0.07 }}
      className="relative group/row mb-8"
      data-ocid={`row.section.${rowIndex + 1}`}
    >
      {/* Row title */}
      <h2
        className="text-base sm:text-lg font-bold text-white mb-3 px-6 sm:px-10"
        style={{ letterSpacing: "-0.01em" }}
      >
        {title}
      </h2>

      {/* Scroll wrapper */}
      <div className="relative">
        {/* Left arrow */}
        {showLeft && (
          <button
            type="button"
            aria-label="Scroll left"
            onClick={() => scroll("left")}
            className="absolute left-0 top-0 bottom-0 z-20 w-12 flex items-center justify-center transition-all opacity-0 group-hover/row:opacity-100"
            style={{
              background:
                "linear-gradient(to right, rgba(0,0,0,0.8), transparent)",
            }}
          >
            <ChevronLeft className="h-7 w-7 text-white" />
          </button>
        )}

        {/* Right arrow */}
        {showRight && (
          <button
            type="button"
            aria-label="Scroll right"
            onClick={() => scroll("right")}
            className="absolute right-0 top-0 bottom-0 z-20 w-12 flex items-center justify-center transition-all opacity-0 group-hover/row:opacity-100"
            style={{
              background:
                "linear-gradient(to left, rgba(0,0,0,0.8), transparent)",
            }}
          >
            <ChevronRight className="h-7 w-7 text-white" />
          </button>
        )}

        {/* Scroll track */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-3 overflow-x-auto scroll-smooth px-6 sm:px-10"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {movies.map((movie, idx) => {
            const inWatchlist = watchlist.includes(movie.id);
            const isHovered = hoveredId === movie.id;
            const isPreviewing = previewId === movie.id;

            return (
              <div
                key={movie.id}
                data-ocid={`row.item.${idx + 1}`}
                className="relative flex-shrink-0"
                style={{ width: 180, height: 270 }}
                onMouseEnter={() => handleHoverStart(movie.id)}
                onMouseLeave={handleHoverEnd}
              >
                <motion.div
                  className="absolute inset-0 cursor-pointer rounded-lg overflow-hidden"
                  animate={{
                    scale: isPreviewing ? 1.3 : isHovered ? 1.12 : 1,
                    zIndex: isPreviewing ? 30 : isHovered ? 10 : 1,
                  }}
                  transition={{ duration: 0.25 }}
                  onClick={() => onOpenModal(movie)}
                >
                  {/* Poster background */}
                  <div
                    className="absolute inset-0"
                    style={{ background: movie.posterColor }}
                  />

                  {/* Scanline CSS animation */}
                  {isPreviewing && (
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.08) 3px, rgba(0,0,0,0.08) 4px)",
                        animation: "scanlines 2s linear infinite",
                        zIndex: 5,
                      }}
                    />
                  )}

                  {/* Static info at bottom (hidden when previewing) */}
                  {!isHovered && (
                    <div
                      className="absolute bottom-0 left-0 right-0 p-2"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)",
                      }}
                    >
                      <p className="text-xs font-bold text-white truncate">
                        {movie.title}
                      </p>
                      <p className="text-[10px] text-white/60">{movie.year}</p>
                    </div>
                  )}

                  {/* Normal hover overlay (shown when hovering but not yet previewing) */}
                  <AnimatePresence>
                    {isHovered && !isPreviewing && (
                      <motion.div
                        key="hover"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        className="absolute inset-0 flex flex-col justify-between p-3"
                        style={{ background: "rgba(0,0,0,0.65)" }}
                      >
                        {/* Top: watchlist button */}
                        <div className="flex justify-end">
                          <button
                            type="button"
                            aria-label={
                              inWatchlist
                                ? "Remove from watchlist"
                                : "Add to watchlist"
                            }
                            data-ocid={`row.toggle.${idx + 1}`}
                            onClick={(e) => {
                              e.stopPropagation();
                              onToggleWatchlist(movie);
                            }}
                            className="w-7 h-7 rounded-full flex items-center justify-center border transition-colors"
                            style={{
                              background: inWatchlist
                                ? "oklch(0.51 0.27 285 / 90%)"
                                : "rgba(0,0,0,0.6)",
                              borderColor: inWatchlist
                                ? "oklch(0.51 0.27 285)"
                                : "rgba(255,255,255,0.4)",
                            }}
                          >
                            {inWatchlist ? (
                              <BookmarkCheck className="h-3.5 w-3.5 text-white" />
                            ) : (
                              <Plus className="h-3.5 w-3.5 text-white" />
                            )}
                          </button>
                        </div>

                        {/* Bottom: info */}
                        <div className="space-y-1">
                          <p className="text-xs font-bold text-white leading-tight line-clamp-2">
                            {movie.title}
                          </p>
                          <div className="flex items-center gap-1">
                            <Star
                              className="h-3 w-3 fill-current"
                              style={{ color: "oklch(0.82 0.18 80)" }}
                            />
                            <span
                              className="text-[10px] font-bold"
                              style={{ color: "oklch(0.82 0.18 80)" }}
                            >
                              {movie.rating.toFixed(1)}
                            </span>
                          </div>
                          <span
                            className="inline-block text-[10px] px-1.5 py-0.5 rounded-full border truncate max-w-full"
                            style={{
                              borderColor: "oklch(0.87 0.15 200 / 50%)",
                              color: "oklch(0.87 0.15 200)",
                            }}
                          >
                            {movie.language}
                          </span>
                          <p className="text-[10px] text-white/60 truncate">
                            {movie.genre}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Trailer preview overlay */}
                  <AnimatePresence>
                    {isPreviewing && (
                      <motion.div
                        key="preview"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute inset-0 flex flex-col justify-between p-3"
                        style={{
                          background: `linear-gradient(160deg, ${movie.posterColor}99 0%, rgba(0,0,0,0.88) 60%)`,
                          zIndex: 10,
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenModal(movie);
                        }}
                      >
                        {/* Top: watchlist button */}
                        <div className="flex justify-end">
                          <button
                            type="button"
                            aria-label={
                              inWatchlist
                                ? "Remove from watchlist"
                                : "Add to watchlist"
                            }
                            data-ocid={`row.toggle.${idx + 1}`}
                            onClick={(e) => {
                              e.stopPropagation();
                              onToggleWatchlist(movie);
                            }}
                            className="w-7 h-7 rounded-full flex items-center justify-center border transition-colors"
                            style={{
                              background: inWatchlist
                                ? "oklch(0.51 0.27 285 / 90%)"
                                : "rgba(0,0,0,0.6)",
                              borderColor: inWatchlist
                                ? "oklch(0.51 0.27 285)"
                                : "rgba(255,255,255,0.4)",
                            }}
                          >
                            {inWatchlist ? (
                              <BookmarkCheck className="h-3.5 w-3.5 text-white" />
                            ) : (
                              <Plus className="h-3.5 w-3.5 text-white" />
                            )}
                          </button>
                        </div>

                        {/* Center: trailer indicator */}
                        <div className="flex flex-col items-center gap-1">
                          <motion.div
                            animate={{ opacity: [1, 0.4, 1] }}
                            transition={{
                              duration: 1.2,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "easeInOut",
                            }}
                            className="text-[11px] font-black tracking-widest px-2 py-1 rounded cursor-pointer hover:scale-110 transition-transform"
                            style={{
                              background:
                                "linear-gradient(135deg, oklch(0.47 0.28 285), oklch(0.60 0.25 200))",
                              color: "white",
                            }}
                            onClick={(e) => {
                              e.stopPropagation();
                              const url = movie.trailerUrl
                                ? movie.trailerUrl
                                : `https://www.youtube.com/results?search_query=${encodeURIComponent(`${movie.title} official trailer`)}`;
                              window.open(url, "_blank", "noopener,noreferrer");
                            }}
                            data-ocid="movie.trailer.button"
                          >
                            ▶ TRAILER
                          </motion.div>
                        </div>

                        {/* Bottom: full info */}
                        <div className="space-y-1">
                          <p className="text-[11px] font-black text-white leading-tight">
                            {movie.title}
                          </p>
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <div className="flex items-center gap-0.5">
                              <Star
                                className="h-2.5 w-2.5 fill-current"
                                style={{ color: "oklch(0.82 0.18 80)" }}
                              />
                              <span
                                className="text-[9px] font-bold"
                                style={{ color: "oklch(0.82 0.18 80)" }}
                              >
                                {movie.rating.toFixed(1)}
                              </span>
                            </div>
                            <span className="text-[9px] text-white/60">
                              {movie.year}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            <span
                              className="text-[9px] px-1.5 py-0.5 rounded-full border"
                              style={{
                                borderColor: "oklch(0.87 0.15 200 / 50%)",
                                color: "oklch(0.87 0.15 200)",
                              }}
                            >
                              {movie.language}
                            </span>
                            <span
                              className="text-[9px] px-1.5 py-0.5 rounded-full border"
                              style={{
                                borderColor: "oklch(0.62 0.27 330 / 50%)",
                                color: "oklch(0.62 0.27 330)",
                              }}
                            >
                              {movie.genre.split("/")[0].trim()}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
