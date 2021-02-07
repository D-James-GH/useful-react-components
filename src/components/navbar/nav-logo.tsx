import React, { FC } from "react";
import styled from "styled-components";

const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`;

interface INavLogoProps {}

const NavLogo: FC<INavLogoProps> = () => {
  return <StyledLink>Company Awesome</StyledLink>;
};

export default NavLogo;
