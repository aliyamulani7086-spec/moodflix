import { Info, Play } from "lucide-react";
import { motion } from "motion/react";

interface HeroSectionProps {
  onExplore: () => void;
  onOpenInfo?: () => void;
}

export default function HeroSection({
  onExplore,
  onOpenInfo,
}: HeroSectionProps) {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "70vh", minHeight: "500px" }}
      data-ocid="hero.section"
    >
      {/* Hero background image */}
      <img
        src="/assets/uploads/photo_from_ayesha_2-019d304e-d725-75ae-86c8-64760cc87228-1.jpg"
        alt="MoodFlix Hero"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ zIndex: 0 }}
      />

      {/* Left heavy gradient for text legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.70) 40%, rgba(0,0,0,0.25) 70%, transparent 100%)",
          zIndex: 1,
        }}
      />
      {/* Bottom fade into page background */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40"
        style={{
          background:
            "linear-gradient(to top, oklch(0.09 0.03 265), transparent)",
          zIndex: 2,
        }}
      />

      {/* Content */}
      <div className="relative h-full flex items-center" style={{ zIndex: 10 }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <div className="max-w-2xl">
            {/* Logo badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-5"
            >
              <img
                src="/assets/uploads/photo_from_ayesha_1-019d2f9b-2e39-746f-ad24-9d35caac7c21-1.jpg"
                alt="MoodFlix"
                className="h-8 w-8 rounded-md object-cover"
              />
              <span
                className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border"
                style={{
                  background: "oklch(0.51 0.27 285 / 20%)",
                  borderColor: "oklch(0.51 0.27 285 / 50%)",
                  color: "oklch(0.80 0.18 285)",
                }}
              >
                Featured Film
              </span>
            </motion.div>

            {/* Movie Title */}
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-black leading-none tracking-tight text-white mb-3"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              RRR
            </motion.h1>

            {/* Meta badges */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap items-center gap-2 mb-4"
            >
              <span
                className="text-xs font-bold px-2 py-0.5 rounded"
                style={{ background: "oklch(0.62 0.27 330)", color: "white" }}
              >
                8.0 ★
              </span>
              <span className="text-xs text-white/70 font-medium">2022</span>
              <span className="text-xs text-white/70">•</span>
              <span className="text-xs text-white/70">3h 7m</span>
              <span className="text-xs text-white/70">•</span>
              <span
                className="text-xs font-medium px-2 py-0.5 rounded-full border"
                style={{
                  borderColor: "oklch(0.87 0.15 200 / 50%)",
                  color: "oklch(0.87 0.15 200)",
                }}
              >
                Telugu
              </span>
              <span
                className="text-xs font-medium px-2 py-0.5 rounded-full border"
                style={{
                  borderColor: "oklch(0.82 0.18 80 / 50%)",
                  color: "oklch(0.82 0.18 80)",
                }}
              >
                Action / Epic
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-sm sm:text-base text-white/75 leading-relaxed mb-6 max-w-lg"
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              A fictitious story about two legendary revolutionaries and their
              journey away from home before they started fighting for their
              country in the 1920s. An epic saga of friendship, sacrifice, and
              rebellion.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-3"
            >
              <button
                type="button"
                onClick={onExplore}
                data-ocid="hero.primary_button"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold text-white transition-all hover:opacity-90 active:scale-95"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.47 0.28 285), oklch(0.58 0.28 295))",
                  boxShadow: "0 0 20px oklch(0.51 0.27 285 / 40%)",
                }}
              >
                <Play className="h-4 w-4 fill-current" />
                Play
              </button>
              <button
                type="button"
                onClick={onOpenInfo ?? onExplore}
                data-ocid="hero.secondary_button"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold text-white border transition-all hover:bg-white/10 active:scale-95"
                style={{ borderColor: "rgba(255,255,255,0.35)" }}
              >
                <Info className="h-4 w-4" />
                More Info
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
