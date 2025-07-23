import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClint, { FetchResponse } from "../service/api-clint";
import ms from "ms";

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
    staleTime: ms('24h'),
    initialData: genres,
  });

export default useGenres;
