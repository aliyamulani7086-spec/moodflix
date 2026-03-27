import { Toaster } from "@/components/ui/sonner";
import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";
import { toast } from "sonner";

import Footer from "./components/Footer";
import GenreFilterBar from "./components/GenreFilterBar";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import MoodSelector from "./components/MoodSelector";
import MovieGrid from "./components/MovieGrid";
import MovieModal from "./components/MovieModal";
import MovieRow from "./components/MovieRow";

import type { Movie } from "./data/movies";
import {
  useGetAllMoods,
  useGetAllMovies,
  useGetWatchlist,
  useToggleWatchlist,
} from "./hooks/useQueries";

type Tab = "home" | "moods" | "watchlist";

function applyGenreFilter(movies: Movie[], genre: string): Movie[] {
  if (genre === "All") return movies;
  if (genre === "Movies") return movies;
  if (genre === "TV Shows") return [];
  if (genre === "New & Popular") return movies.filter((m) => m.year >= 2020);
  const g = genre.toLowerCase();
  if (genre === "Action")
    return movies.filter((m) => /(action|adventure)/i.test(m.genre));
  if (genre === "Romance")
    return movies.filter((m) => /(romance|romantic)/i.test(m.genre));
  if (genre === "Comedy") return movies.filter((m) => /comedy/i.test(m.genre));
  if (genre === "Thriller")
    return movies.filter((m) => /(thriller|mystery)/i.test(m.genre));
  if (genre === "Horror") return movies.filter((m) => /horror/i.test(m.genre));
  if (genre === "Anime")
    return movies.filter(
      (m) => m.language === "Japanese" || /anime/i.test(m.genre),
    );
  if (genre === "Bollywood")
    return movies.filter((m) =>
      [
        "Hindi",
        "Tamil",
        "Telugu",
        "Malayalam",
        "Punjabi",
        "Bengali",
        "Marathi",
      ].includes(m.language),
    );
  if (genre === "Kids")
    return movies.filter((m) => /(animation|family)/i.test(m.genre));
  // fallback
  return movies.filter((m) => m.genre.toLowerCase().includes(g));
}

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>("home");
  const [selectedMoodId, setSelectedMoodId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [activeGenre, setActiveGenre] = useState("All");

  const { data: moods = [], isLoading: moodsLoading } = useGetAllMoods();
  const { data: allMovies = [], isLoading: moviesLoading } = useGetAllMovies();
  const { data: watchlist = [] } = useGetWatchlist();
  const toggleWatchlist = useToggleWatchlist();

  const handleToggleWatchlist = (movie: Movie) => {
    const inWatchlist = watchlist.includes(movie.id);
    toggleWatchlist.mutate(
      { movieId: movie.id, inWatchlist },
      {
        onSuccess: () => {
          toast.success(
            inWatchlist
              ? `Removed "${movie.title}" from watchlist`
              : `Added "${movie.title}" to watchlist`,
          );
        },
      },
    );
  };

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
    if (tab !== "home") {
      setSelectedMoodId(null);
      setSearchQuery("");
    }
  };

  const handleExplore = () => {
    const moodSection = document.getElementById("mood-section");
    moodSection?.scrollIntoView({ behavior: "smooth" });
  };

  const showHero = activeTab === "home" && !selectedMoodId && !searchQuery;
  const showBrowse = activeTab === "home" && !selectedMoodId && !searchQuery;
  const showSearch = !!searchQuery;
  const showMoodFilter =
    activeTab === "home" && !!selectedMoodId && !searchQuery;
  const showWatchlist = activeTab === "watchlist";

  // Derived movie rows
  const trending = useMemo(
    () =>
      applyGenreFilter(
        [...allMovies].sort((a, b) => b.rating - a.rating).slice(0, 12),
        activeGenre,
      ),
    [allMovies, activeGenre],
  );

  const byMood = (id: string) =>
    applyGenreFilter(
      allMovies.filter((m) => m.moodIds.includes(id)).slice(0, 14),
      activeGenre,
    );

  const internationalMovies = useMemo(
    () =>
      applyGenreFilter(
        allMovies.filter((m) => m.language !== "English").slice(0, 14),
        activeGenre,
      ),
    [allMovies, activeGenre],
  );

  const indianMovies = useMemo(
    () =>
      applyGenreFilter(
        allMovies
          .filter((m) =>
            [
              "Hindi",
              "Tamil",
              "Telugu",
              "Malayalam",
              "Marathi",
              "Punjabi",
              "Bengali",
            ].includes(m.language),
          )
          .slice(0, 14),
        activeGenre,
      ),
    [allMovies, activeGenre],
  );

  const koreanMovies = useMemo(
    () =>
      applyGenreFilter(
        allMovies.filter((m) => m.language === "Korean").slice(0, 14),
        activeGenre,
      ),
    [allMovies, activeGenre],
  );

  const japaneseMovies = useMemo(
    () =>
      applyGenreFilter(
        allMovies.filter((m) => m.language === "Japanese").slice(0, 14),
        activeGenre,
      ),
    [allMovies, activeGenre],
  );

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    return allMovies.filter(
      (m) =>
        m.title.toLowerCase().includes(q) ||
        m.genre.toLowerCase().includes(q) ||
        m.language.toLowerCase().includes(q),
    );
  }, [allMovies, searchQuery]);

  const moodMovies = useMemo(
    () =>
      selectedMoodId
        ? allMovies.filter((m) => m.moodIds.includes(selectedMoodId))
        : [],
    [allMovies, selectedMoodId],
  );

  const watchlistMovies = useMemo(
    () => allMovies.filter((m) => watchlist.includes(m.id)),
    [allMovies, watchlist],
  );

  const moodLabel = useMemo(() => {
    if (!selectedMoodId) return "";
    const mood = moods.find((m) => m.id === selectedMoodId);
    return mood ? `${mood.emoji} ${mood.name} Movies` : "Mood Movies";
  }, [selectedMoodId, moods]);

  return (
    <div className="min-h-screen bg-background">
      <Header
        activeTab={activeTab}
        onTabChange={handleTabChange}
        searchQuery={searchQuery}
        onSearchChange={(q) => {
          setSearchQuery(q);
          if (q) setActiveTab("home");
        }}
        watchlistCount={watchlist.length}
      />

      <main>
        {/* Hero */}
        <AnimatePresence mode="wait">
          {showHero && (
            <motion.div
              key="hero"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <HeroSection onExplore={handleExplore} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mood pills + Genre filter — sticky, always visible except on watchlist tab */}
        {activeTab !== "watchlist" && (
          <div
            id="mood-section"
            className="sticky top-16 z-40"
            style={{ background: "oklch(0.09 0.03 265)" }}
          >
            <MoodSelector
              moods={moods}
              selectedMoodId={selectedMoodId}
              onSelectMood={(id) => {
                setSelectedMoodId(id);
                setActiveTab("home");
                setActiveGenre("All");
              }}
              isLoading={moodsLoading}
            />
            <GenreFilterBar
              activeGenre={activeGenre}
              onGenreChange={setActiveGenre}
            />
          </div>
        )}

        <div className="pt-6 pb-20">
          {/* TV Shows empty state */}
          {activeGenre === "TV Shows" && showBrowse && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-32 gap-4"
              data-ocid="tvshows.empty_state"
            >
              <div className="text-5xl">📺</div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-2">
                  TV Shows Coming Soon
                </h3>
                <p className="text-sm text-white/50">
                  We're adding TV shows to MoodFlix. Stay tuned!
                </p>
              </div>
            </motion.div>
          )}

          {/* Search results */}
          {showSearch && (
            <motion.div
              key="search"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <MovieGrid
                movies={searchResults}
                watchlist={watchlist}
                onToggleWatchlist={handleToggleWatchlist}
                onOpenModal={setSelectedMovie}
                title={`Results for "${searchQuery}"`}
                isLoading={moviesLoading}
              />
            </motion.div>
          )}

          {/* Mood-filtered row */}
          {showMoodFilter && (
            <motion.div
              key="mood"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="pt-4"
            >
              <MovieRow
                title={moodLabel}
                movies={moodMovies}
                watchlist={watchlist}
                onToggleWatchlist={handleToggleWatchlist}
                onOpenModal={setSelectedMovie}
              />
            </motion.div>
          )}

          {/* Watchlist */}
          {showWatchlist && (
            <motion.div
              key="watchlist"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="pt-8"
            >
              {watchlistMovies.length === 0 ? (
                <div
                  className="flex flex-col items-center justify-center py-32 gap-4"
                  data-ocid="watchlist.empty_state"
                >
                  <div className="text-5xl">🎬</div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-white mb-2">
                      Your list is empty
                    </h3>
                    <p className="text-sm text-white/50">
                      Add movies to your list by hovering over a card and
                      clicking +
                    </p>
                  </div>
                </div>
              ) : (
                <MovieRow
                  title="My List"
                  movies={watchlistMovies}
                  watchlist={watchlist}
                  onToggleWatchlist={handleToggleWatchlist}
                  onOpenModal={setSelectedMovie}
                />
              )}
            </motion.div>
          )}

          {/* Netflix-style browse rows */}
          {showBrowse && activeGenre !== "TV Shows" && !moviesLoading && (
            <motion.div
              key="browse"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-2"
            >
              <MovieRow
                title="🔥 Trending Now"
                movies={trending}
                watchlist={watchlist}
                onToggleWatchlist={handleToggleWatchlist}
                onOpenModal={setSelectedMovie}
                rowIndex={0}
              />
              <MovieRow
                title="😄 Feel-Good Picks"
                movies={byMood("happy")}
                watchlist={watchlist}
                onToggleWatchlist={handleToggleWatchlist}
                onOpenModal={setSelectedMovie}
                rowIndex={1}
              />
              <MovieRow
                title="💕 Romantic Movies"
                movies={byMood("romantic")}
                watchlist={watchlist}
                onToggleWatchlist={handleToggleWatchlist}
                onOpenModal={setSelectedMovie}
                rowIndex={2}
              />
              <MovieRow
                title="🤩 Action & Excitement"
                movies={byMood("excited")}
                watchlist={watchlist}
                onToggleWatchlist={handleToggleWatchlist}
                onOpenModal={setSelectedMovie}
                rowIndex={3}
              />
              <MovieRow
                title="😱 Horror & Suspense"
                movies={[
                  ...byMood("scared"),
                  ...byMood("anxious").filter(
                    (m) => !byMood("scared").find((s) => s.id === m.id),
                  ),
                ].slice(0, 14)}
                watchlist={watchlist}
                onToggleWatchlist={handleToggleWatchlist}
                onOpenModal={setSelectedMovie}
                rowIndex={4}
              />
              <MovieRow
                title="😢 Emotional Journeys"
                movies={byMood("sad")}
                watchlist={watchlist}
                onToggleWatchlist={handleToggleWatchlist}
                onOpenModal={setSelectedMovie}
                rowIndex={5}
              />
              <MovieRow
                title="🌍 International Cinema"
                movies={internationalMovies}
                watchlist={watchlist}
                onToggleWatchlist={handleToggleWatchlist}
                onOpenModal={setSelectedMovie}
                rowIndex={6}
              />
              <MovieRow
                title="🇮🇳 Bollywood & Indian"
                movies={indianMovies}
                watchlist={watchlist}
                onToggleWatchlist={handleToggleWatchlist}
                onOpenModal={setSelectedMovie}
                rowIndex={7}
              />
              <MovieRow
                title="🇰🇷 Korean Cinema"
                movies={koreanMovies}
                watchlist={watchlist}
                onToggleWatchlist={handleToggleWatchlist}
                onOpenModal={setSelectedMovie}
                rowIndex={8}
              />
              <MovieRow
                title="🇯🇵 Japanese Cinema"
                movies={japaneseMovies}
                watchlist={watchlist}
                onToggleWatchlist={handleToggleWatchlist}
                onOpenModal={setSelectedMovie}
                rowIndex={9}
              />
            </motion.div>
          )}

          {/* Loading state */}
          {showBrowse && moviesLoading && (
            <div
              className="px-6 sm:px-10 pt-4 space-y-8"
              data-ocid="movies.loading_state"
            >
              {[0, 1, 2].map((i) => (
                <div key={i}>
                  <div className="h-5 w-40 rounded bg-white/10 animate-pulse mb-3" />
                  <div className="flex gap-3">
                    {Array.from({ length: 6 }, (_, j) => `skel-${i}-${j}`).map(
                      (k) => (
                        <div
                          key={k}
                          className="flex-shrink-0 w-44 h-64 rounded-lg bg-white/10 animate-pulse"
                        />
                      ),
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />

      <MovieModal
        movie={selectedMovie}
        inWatchlist={
          selectedMovie ? watchlist.includes(selectedMovie.id) : false
        }
        onToggleWatchlist={handleToggleWatchlist}
        onClose={() => setSelectedMovie(null)}
      />

      <Toaster position="bottom-right" theme="dark" />
    </div>
  );
}
