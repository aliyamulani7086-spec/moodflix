import {
  Bookmark,
  ChevronDown,
  LogOut,
  Menu,
  Search,
  User,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { useInternetIdentity } from "../hooks/useInternetIdentity";

type Tab = "home" | "moods" | "watchlist";

interface HeaderProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  watchlistCount: number;
}

export default function Header({
  activeTab,
  onTabChange,
  searchQuery,
  onSearchChange,
  watchlistCount,
}: HeaderProps) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [browseOpen, setBrowseOpen] = useState(false);
  const { identity, login, clear, isLoggingIn, isInitializing } =
    useInternetIdentity();

  const isLoggedIn = !!identity && !identity.getPrincipal().isAnonymous();
  const principalText = isLoggedIn
    ? `${identity.getPrincipal().toText().slice(0, 8)}...`
    : null;

  const browseCategories = [
    "Trending Now",
    "New Releases",
    "Top Rated",
    "Action & Adventure",
    "Romance",
    "Horror",
    "International Cinema",
    "Anime",
    "Documentaries",
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{
        background:
          "linear-gradient(to bottom, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.7) 60%, transparent 100%)",
        borderColor: "rgba(255,255,255,0.07)",
      }}
    >
      <div className="max-w-full px-6 sm:px-10 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <button
          type="button"
          className="flex items-center gap-2.5 cursor-pointer flex-shrink-0 bg-transparent border-0 p-0"
          onClick={() => onTabChange("home")}
          data-ocid="header.link"
        >
          <img
            src="/assets/uploads/photo_from_ayesha_1-019d2f9b-2e39-746f-ad24-9d35caac7c21-1.jpg"
            alt="MoodFlix Logo"
            className="h-8 w-8 rounded-md object-cover"
          />
          <span
            className="text-xl font-black tracking-tight text-white"
            style={{ letterSpacing: "-0.02em" }}
          >
            Mood<span style={{ color: "oklch(0.64 0.25 285)" }}>Flix</span>
          </span>
        </button>

        {/* Center Nav */}
        <nav className="hidden md:flex items-center gap-0">
          {(["home", "watchlist"] as Tab[]).map((tab) => (
            <button
              type="button"
              key={tab}
              onClick={() => onTabChange(tab)}
              data-ocid={`nav.${tab}.link`}
              className="relative px-4 py-2 text-sm font-medium transition-colors capitalize"
              style={{
                color: activeTab === tab ? "white" : "rgba(255,255,255,0.65)",
              }}
            >
              {tab === "watchlist" ? (
                <span className="flex items-center gap-1.5">
                  <Bookmark className="h-3.5 w-3.5" />
                  My List
                  {watchlistCount > 0 && (
                    <span
                      className="ml-0.5 px-1.5 py-0.5 text-xs rounded-full text-white font-bold"
                      style={{ background: "oklch(0.51 0.27 285)" }}
                    >
                      {watchlistCount}
                    </span>
                  )}
                </span>
              ) : (
                tab.charAt(0).toUpperCase() + tab.slice(1)
              )}
              {activeTab === tab && (
                <span
                  className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full"
                  style={{ background: "oklch(0.64 0.25 285)" }}
                />
              )}
            </button>
          ))}

          {/* Browse dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setBrowseOpen((v) => !v)}
              data-ocid="nav.browse.button"
              className="flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              Browse
              <ChevronDown className="h-3.5 w-3.5" />
            </button>
            <AnimatePresence>
              {browseOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -6, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.97 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-0 top-full mt-1 w-52 rounded-xl border p-1.5 shadow-2xl"
                  style={{
                    background: "oklch(0.11 0.04 265 / 98%)",
                    borderColor: "oklch(0.22 0.04 265)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  {browseCategories.map((cat) => (
                    <button
                      type="button"
                      key={cat}
                      onClick={() => {
                        onTabChange("home");
                        setBrowseOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 text-sm rounded-lg transition-colors hover:bg-white/10"
                      style={{ color: "rgba(255,255,255,0.75)" }}
                    >
                      {cat}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">
          {/* Search */}
          <AnimatePresence>
            {searchOpen && (
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 220, opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  placeholder="Search titles, genres, languages..."
                  data-ocid="header.search_input"
                  className="w-full px-3 py-1.5 text-sm rounded-lg border text-white placeholder:text-white/40 outline-none transition-colors"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    borderColor: "oklch(0.51 0.27 285 / 60%)",
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>

          <button
            type="button"
            onClick={() => {
              setSearchOpen((v) => !v);
              if (searchOpen) onSearchChange("");
            }}
            data-ocid="header.search_input"
            className="p-2 rounded-lg transition-colors"
            style={{ color: "rgba(255,255,255,0.7)" }}
            aria-label="Toggle search"
          >
            {searchOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Search className="h-4 w-4" />
            )}
          </button>

          {/* Auth button */}
          {isLoggedIn ? (
            <div className="relative hidden md:block">
              <button
                type="button"
                onClick={() => setUserMenuOpen((v) => !v)}
                className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-lg text-white hover:bg-white/10 transition-colors border"
                style={{ borderColor: "rgba(255,255,255,0.15)" }}
                data-ocid="header.user.button"
              >
                <User
                  className="h-4 w-4"
                  style={{ color: "oklch(0.64 0.25 285)" }}
                />
                <span className="text-xs text-white/60">{principalText}</span>
              </button>
              <AnimatePresence>
                {userMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-2 w-44 rounded-xl border p-1 shadow-xl"
                    style={{
                      background: "oklch(0.11 0.04 265 / 98%)",
                      borderColor: "oklch(0.22 0.04 265)",
                    }}
                  >
                    <div className="px-3 py-2 border-b border-white/10 mb-1">
                      <p className="text-xs text-white/50">Signed in as</p>
                      <p className="text-xs font-mono text-white/80 truncate">
                        {principalText}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        clear();
                        setUserMenuOpen(false);
                      }}
                      className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-400 hover:bg-white/10 rounded-lg transition-colors"
                    >
                      <LogOut className="h-4 w-4" />
                      Sign Out
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <button
              type="button"
              onClick={login}
              disabled={isLoggingIn || isInitializing}
              className="hidden md:flex px-4 py-1.5 text-sm font-semibold rounded-lg text-white transition-all hover:opacity-90 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.47 0.28 285), oklch(0.58 0.28 295))",
              }}
              data-ocid="header.signin.button"
            >
              {isLoggingIn ? "Signing in..." : "Sign In"}
            </button>
          )}

          {/* Mobile menu */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden p-2 rounded-lg transition-colors"
            style={{ color: "rgba(255,255,255,0.7)" }}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t"
            style={{
              borderColor: "rgba(255,255,255,0.07)",
              background: "rgba(0,0,0,0.95)",
            }}
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {(["home", "watchlist"] as Tab[]).map((tab) => (
                <button
                  type="button"
                  key={tab}
                  onClick={() => {
                    onTabChange(tab);
                    setMenuOpen(false);
                  }}
                  className="px-3 py-2 text-sm font-medium rounded-lg capitalize text-left transition-colors"
                  style={{
                    color:
                      activeTab === tab ? "white" : "rgba(255,255,255,0.6)",
                    background:
                      activeTab === tab
                        ? "rgba(255,255,255,0.08)"
                        : "transparent",
                  }}
                >
                  {tab === "watchlist"
                    ? `My List (${watchlistCount})`
                    : tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
              <div
                className="mt-2 pt-2 border-t"
                style={{ borderColor: "rgba(255,255,255,0.08)" }}
              >
                {isLoggedIn ? (
                  <button
                    type="button"
                    onClick={() => {
                      clear();
                      setMenuOpen(false);
                    }}
                    className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-400 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <LogOut className="h-4 w-4" />
                    Sign Out
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      login();
                      setMenuOpen(false);
                    }}
                    disabled={isLoggingIn || isInitializing}
                    className="w-full px-3 py-2 text-sm font-semibold rounded-lg text-white transition-all disabled:opacity-50"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.47 0.28 285), oklch(0.58 0.28 295))",
                    }}
                  >
                    {isLoggingIn ? "Signing in..." : "Sign In"}
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
