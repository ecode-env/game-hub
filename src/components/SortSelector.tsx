import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  selectedOrderSort: string
}

const SortSelector = ({ onSelectSortOrder, selectedOrderSort }: Props) => {
  const sortOptions = [
    { label: "Relevance", value: "" },
    { label: "Name", value: "name" },
    { label: "Release date", value: "-released" },
    { label: "Date added", value: "-added" },
    { label: "Rating", value: "-rating" },
    { label: "Popularity", value: "-metacritic" },
  ];
  const currentSortOrder = sortOptions.find(order => order.value === selectedOrderSort);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: { currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOptions.map((sort, index) => (
          <MenuItem
            onClick={() => onSelectSortOrder(sort.value)}
            key={index}
            value={sort.value}
          >
            {sort.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
