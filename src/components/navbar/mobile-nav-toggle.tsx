import React, { FC } from "react";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;
`;
interface IMobileNavToggleProps {
  color?: string;
  size?: number;
  onClick?: () => void;
}

const MobileNavToggle: FC<IMobileNavToggleProps> = ({
  color = "#ababab",
  size = 20,
  onClick,
}) => {
  return (
    <Div onClick={onClick}>
      <svg
        style={{ fill: color }}
        viewBox="0 0 100 80"
        width={`${size}`}
        height={`${size}`}
      >
        <rect width="100" height="20" rx="8"></rect>
        <rect y="30" width="100" height="20" rx="8"></rect>
        <rect y="60" width="100" height="20" rx="8"></rect>
      </svg>
    </Div>
  );
};

export default MobileNavToggle;
