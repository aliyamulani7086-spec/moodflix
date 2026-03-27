import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { MOODS, MOVIES, type Mood, type Movie } from "../data/movies";

// Simulate async backend calls using local data
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export function useGetAllMoods() {
  return useQuery<Mood[]>({
    queryKey: ["moods"],
    queryFn: async () => {
      await delay(200);
      return MOODS;
    },
  });
}

export function useGetAllMovies() {
  return useQuery<Movie[]>({
    queryKey: ["movies"],
    queryFn: async () => {
      await delay(300);
      return MOVIES;
    },
  });
}

export function useGetMoviesByMood(moodId: string | null) {
  return useQuery<Movie[]>({
    queryKey: ["movies", "mood", moodId],
    queryFn: async () => {
      await delay(150);
      if (!moodId) return MOVIES;
      return MOVIES.filter((m) => m.moodIds.includes(moodId));
    },
    enabled: true,
  });
}

export function useGetWatchlist() {
  return useQuery<string[]>({
    queryKey: ["watchlist"],
    queryFn: async () => {
      const stored = localStorage.getItem("moodflix_watchlist");
      return stored ? (JSON.parse(stored) as string[]) : [];
    },
    staleTime: Number.POSITIVE_INFINITY,
  });
}

export function useToggleWatchlist() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      movieId,
      inWatchlist,
    }: { movieId: string; inWatchlist: boolean }) => {
      const stored = localStorage.getItem("moodflix_watchlist");
      let list: string[] = stored ? JSON.parse(stored) : [];
      if (inWatchlist) {
        list = list.filter((id) => id !== movieId);
      } else {
        list = [...list, movieId];
      }
      localStorage.setItem("moodflix_watchlist", JSON.stringify(list));
      return list;
    },
    onSuccess: (newList) => {
      queryClient.setQueryData(["watchlist"], newList);
    },
  });
}
