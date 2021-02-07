import React, { FC } from "react";
import styled from "styled-components";

interface IDivProps {
  breakpoint: number;
}
const Div = styled.div<IDivProps>`
  align-items: center;
  display: none;
  @media (min-width: ${(props) => props.breakpoint}px) {
    display: flex;
  }
`;

interface ICollapseProps {
  breakpoint?: number;
}

const Collapse: FC<ICollapseProps> = ({ children, breakpoint = 768 }) => {
  return <Div breakpoint={breakpoint}>{children}</Div>;
};

export default Collapse;
