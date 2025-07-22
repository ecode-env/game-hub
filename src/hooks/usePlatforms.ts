import platforms from "../data/platforms";
import { useQuery } from "@tanstack/react-query";
import apiClint,{ FetchResponse }  from "../service/api-clint";


export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClint
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: { results: platforms, count: platforms.length },
  });

export default usePlatforms;
