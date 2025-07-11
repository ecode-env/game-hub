import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

export default function NavBar({onSearch} : Props) {
  return (
    <div>
      <HStack padding="10px">
        <Image src={logo} boxSize="50px" />
        <SearchInput onSearch={onSearch}/>
        <ColorModeSwitch />
      </HStack>
    </div>
  );
}
