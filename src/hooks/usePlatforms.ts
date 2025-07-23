import platforms from "../data/platforms";
import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../service/api-clint";
import ms from "ms";

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
    staleTime: ms('24h'),
    initialData: platforms,
  });

export default usePlatforms;
