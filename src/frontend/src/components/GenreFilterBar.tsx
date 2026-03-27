import { motion } from "motion/react";

const GENRES = [
  "All",
  "Movies",
  "TV Shows",
  "New & Popular",
  "Action",
  "Romance",
  "Comedy",
  "Thriller",
  "Horror",
  "Anime",
  "Bollywood",
  "Kids",
];

interface GenreFilterBarProps {
  activeGenre: string;
  onGenreChange: (genre: string) => void;
}

export default function GenreFilterBar({
  activeGenre,
  onGenreChange,
}: GenreFilterBarProps) {
  return (
    <div
      className="w-full overflow-x-auto"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      data-ocid="genre.panel"
    >
      <div className="flex gap-2 px-6 sm:px-10 py-2.5 min-w-max">
        {GENRES.map((genre) => {
          const isActive = activeGenre === genre;
          return (
            <motion.button
              key={genre}
              type="button"
              data-ocid="genre.tab"
              onClick={() => onGenreChange(genre)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="relative px-4 py-1.5 rounded-full text-xs font-semibold transition-colors whitespace-nowrap border"
              style={
                isActive
                  ? {
                      background:
                        "linear-gradient(135deg, oklch(0.47 0.28 285), oklch(0.60 0.25 200))",
                      borderColor: "oklch(0.60 0.25 200 / 60%)",
                      color: "white",
                      boxShadow: "0 0 12px oklch(0.51 0.27 285 / 35%)",
                    }
                  : {
                      background: "transparent",
                      borderColor: "rgba(255,255,255,0.18)",
                      color: "rgba(255,255,255,0.55)",
                    }
              }
            >
              {genre}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
