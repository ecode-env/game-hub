import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import APIClient, { FetchResponse } from "../service/api-clint";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const apiClint = new APIClient<Game>("/games");

const useGame = (gameQuery: GameQuery) =>
  useQuery<FetchResponse<Game>>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClint.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery?.sortOrder,
          search: gameQuery?.searchText,
        },
      }),
    staleTime: 24 * 60 * 60 * 1000,
    // initialData: {}
  });

export default useGame;
