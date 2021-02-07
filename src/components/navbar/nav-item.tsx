import React, { FC } from "react";
import styled from "styled-components";

interface IStyledLink {
  brand: boolean;
}

const StyledLink = styled.a<IStyledLink>`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  margin: 0 10px;
  font-size: ${(props) => (props.brand ? "20px" : "16px")};
  font-weight: ${(props) => (props.brand ? 700 : 400)};
`;

interface INavItemProps {
  children: React.ReactNode;
  as?: React.ElementType;
  href?: string;
  brand?: boolean;
  className?: string;
}

const NavItem: FC<INavItemProps> = ({
  children,
  href,
  as,
  brand = false,
  className,
}) => {
  return (
    <StyledLink className={className} as={as} href={href} brand={brand}>
      {children}
    </StyledLink>
  );
};

export default NavItem;
