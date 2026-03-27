import { motion } from "motion/react";
import type { Mood } from "../data/movies";

interface MoodSelectorProps {
  moods: Mood[];
  selectedMoodId: string | null;
  onSelectMood: (id: string | null) => void;
  isLoading?: boolean;
}

const SKELETON_COUNT = 8;
const SKELETON_KEYS = Array.from(
  { length: SKELETON_COUNT },
  (_, i) => `skel-${i}`,
);

export default function MoodSelector({
  moods,
  selectedMoodId,
  onSelectMood,
  isLoading,
}: MoodSelectorProps) {
  return (
    <section
      className="py-4 px-6 sm:px-10"
      data-ocid="moods.section"
      style={{ borderBottom: "1px solid oklch(0.18 0.04 265)" }}
    >
      <div
        className="flex items-center gap-2 overflow-x-auto"
        style={{ scrollbarWidth: "none" }}
      >
        {/* All moods pill */}
        {!isLoading && (
          <motion.button
            type="button"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            onClick={() => onSelectMood(null)}
            data-ocid="moods.clear.button"
            className="flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-semibold border transition-all"
            style={{
              background:
                selectedMoodId === null
                  ? "oklch(0.51 0.27 285)"
                  : "transparent",
              borderColor:
                selectedMoodId === null
                  ? "oklch(0.51 0.27 285)"
                  : "oklch(0.30 0.05 265)",
              color: selectedMoodId === null ? "white" : "oklch(0.72 0.03 255)",
            }}
          >
            All Movies
          </motion.button>
        )}

        {isLoading
          ? SKELETON_KEYS.map((k) => (
              <div
                key={k}
                className="flex-shrink-0 h-8 w-24 rounded-full bg-secondary animate-pulse"
              />
            ))
          : moods.map((mood, index) => {
              const isSelected = selectedMoodId === mood.id;
              return (
                <motion.button
                  type="button"
                  key={mood.id}
                  onClick={() => onSelectMood(isSelected ? null : mood.id)}
                  data-ocid={`moods.item.${index + 1}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, delay: index * 0.03 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-shrink-0 flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold border transition-all"
                  style={{
                    background: isSelected
                      ? `${mood.borderColor}33`
                      : "transparent",
                    borderColor: isSelected
                      ? mood.borderColor
                      : "oklch(0.30 0.05 265)",
                    color: isSelected ? "white" : "oklch(0.72 0.03 255)",
                    boxShadow: isSelected
                      ? `0 0 12px ${mood.borderColor}55`
                      : "none",
                  }}
                >
                  <span className="text-sm">{mood.emoji}</span>
                  {mood.name}
                </motion.button>
              );
            })}
      </div>
    </section>
  );
}
