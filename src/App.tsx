import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      // templateColumns={{ base: "1fr", lg: "200px 1fr" }}
      // templateRows={{ base: "50px 1fr", lg: "50px 1fr" }}
      // minHeight="100vh"
      // gap={4}
    >
      <GridItem as="nav" area="nav" >
        <NavBar />
      </GridItem>

      <Show above="lg">
        <GridItem as="aside" area="aside">
          Aside
        </GridItem>
      </Show>

      <GridItem as="main" area="main" >
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
