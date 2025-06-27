import { useEffect, useState } from "react";
import apiClint from "../service/api-clint";
import { Text } from "@chakra-ui/react";
import useGame from "../hooks/useGames";

const GameGrid = () => {
  const { games, error } = useGame();

  return (
    <>
      {error && <Text color="red">{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
