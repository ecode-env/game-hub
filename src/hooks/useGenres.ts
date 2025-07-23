import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClint, { FetchResponse } from "../service/api-clint";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClint = new APIClint<Genre>("/genres");

const useGenres = () =>
  useQuery<FetchResponse<Genre>>({
    queryKey: ["genres"],
    queryFn: apiClint.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: { count: genres.length, next: null, results: genres },
  });

export default useGenres;
