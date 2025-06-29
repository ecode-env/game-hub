import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

export default function NavBar() {
  return (
    <div>
      <HStack padding="10px">
        <Image src={logo} boxSize="50px" />
        <SearchInput />
        <ColorModeSwitch />
      </HStack>
    </div>
  );
}
