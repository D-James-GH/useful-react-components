import React, { FC } from "react";
import styled from "styled-components";

const StyledNav = styled.nav`
  height: 60px;
  box-shadow: 0 2px 6px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 15px;
`;

interface INavbarProps {
  children?: React.ReactNode;
  className?: string;
}

const Navbar: FC<INavbarProps> = ({ children, className }) => {
  return <StyledNav className={className}>{children}</StyledNav>;
};

export default Navbar;
