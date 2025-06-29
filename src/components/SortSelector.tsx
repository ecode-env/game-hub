import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {}

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: Relevance
      </MenuButton>
      <MenuList>
        <MenuItem>First</MenuItem>
        <MenuItem>Second</MenuItem>
        <MenuItem>Third</MenuItem>
        <MenuItem>Forth</MenuItem>
        <MenuItem>Fifth</MenuItem>
        <MenuItem>Sixth</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
