import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

interface TrailerModalProps {
  trailerUrl: string | null;
  onClose: () => void;
}

function getEmbedUrl(url: string): string {
  // Handle youtu.be short links
  const shortMatch = url.match(/youtu\.be\/([^?&]+)/);
  if (shortMatch) {
    return `https://www.youtube.com/embed/${shortMatch[1]}?autoplay=1`;
  }
  // Handle youtube.com/watch?v=...
  const watchMatch = url.match(/[?&]v=([^&]+)/);
  if (watchMatch) {
    return `https://www.youtube.com/embed/${watchMatch[1]}?autoplay=1`;
  }
  return url;
}

export default function TrailerModal({
  trailerUrl,
  onClose,
}: TrailerModalProps) {
  return (
    <AnimatePresence>
      {trailerUrl && (
        <>
          {/* Backdrop */}
          <motion.div
            key="trailer-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm"
            data-ocid="trailer.modal"
          />

          {/* Modal content */}
          <motion.div
            key="trailer-modal"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
            className="fixed inset-4 sm:inset-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 z-[61] w-auto sm:w-full sm:max-w-4xl rounded-2xl overflow-hidden border"
            style={{ borderColor: "oklch(0.51 0.27 285 / 60%)" }}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={onClose}
              data-ocid="trailer.close_button"
              className="absolute top-3 right-3 z-10 p-2 rounded-xl backdrop-blur-sm border transition-colors hover:bg-white/20"
              style={{
                borderColor: "oklch(1 0 0 / 20%)",
                background: "oklch(0 0 0 / 50%)",
              }}
              aria-label="Close trailer"
            >
              <X className="h-5 w-5 text-white" />
            </button>

            {/* 16:9 iframe */}
            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
              <iframe
                src={getEmbedUrl(trailerUrl)}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Movie Trailer"
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
