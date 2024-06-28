import { Navbar, NavbarBrand } from "@nextui-org/react";
import { ReactElement } from "react";
import Logo from "../Logo";

const Header = (): ReactElement => {
  return (
    <Navbar className="bg-zinc-900">
      <NavbarBrand className="flex items-center justify-center">
        <Logo />
      </NavbarBrand>
    </Navbar>
  );
};

export default Header;
