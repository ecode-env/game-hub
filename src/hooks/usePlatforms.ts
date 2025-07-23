import platforms from "../data/platforms";
import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../service/api-clint";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiClint = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery<FetchResponse<Platform>>({
    queryKey: ["platforms"],
    queryFn: apiClint.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: { results: platforms, count: platforms.length, next: null },
  });

export default usePlatforms;
