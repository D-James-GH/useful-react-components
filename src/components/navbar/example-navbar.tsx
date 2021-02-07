import React, { FC } from "react";
import Navbar from "./navbar";
import NavItem from "./nav-item";
import Collapse from "./collapse";
import MobileNavToggle from "./mobile-nav-toggle";
interface IExampleNavbarProps {}

const ExampleNavbar: FC<IExampleNavbarProps> = () => {
  return (
    <Navbar>
      <NavItem brand>Company Logo</NavItem>
      <Collapse>
        <NavItem>Products</NavItem>
        <NavItem>Blog</NavItem>
        <NavItem>Contact</NavItem>
      </Collapse>
      <MobileNavToggle />
    </Navbar>
  );
};

export default ExampleNavbar;
