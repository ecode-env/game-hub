import { Grid, GridItem, Show } from "@chakra-ui/react";

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
      <GridItem as="nav" area="nav" bg="coral">
        Nav
      </GridItem>

      <Show above="lg">
        <GridItem as="aside" area="aside" bg="gold">
          Aside
        </GridItem>
      </Show>

      <GridItem as="main" area="main" bg="dodgerblue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
