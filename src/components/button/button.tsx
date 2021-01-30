import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import { darken } from "polished";
import Ripple from "./ripple";

interface IStyledButton {
  color: string;
  variant?: "outlined" | "filled";
  flat?: boolean;
  width?: string;
  height?: string;
  borderRadius?: string;
  fontSize?: string;
}

const StyledButton: any = styled.button<IStyledButton>`
  ${(props) => css`
    width: ${props.width};
    height: ${props.height};
    font-size: ${props.fontSize};
    border-radius: ${props.borderRadius};
  `};
  overflow: hidden;
  position: relative;
  cursor: pointer;

  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: ${(props) =>
    props.flat ? "none" : "0 0 5px rgba(0, 0, 0, 0.2)"};
  outline: none;
  border: none;
  transition: color 80ms ease-in-out, background-color 80ms ease-in-out;
  &:focus {
    outline: none;
  }
  ${(props) =>
    props.variant === "outlined" &&
    css`
      background-color: rgba(255, 255, 255, 0);
      border: 1px solid ${props.color};
      color: ${props.color};
      &:hover {
        background-color: ${props.color};
        color: white;
      }
    `};
  ${(props) =>
    props.variant === "filled" &&
    css`
      border: 1px solid ${props.color};
      background-color: ${props.color};
      color: white;
      &:hover {
        background-color: ${darken(0.035, props.color)};
        border-color: ${darken(0.035, props.color)};
      }
    `}
`;

export interface IButtonProps {
  onClick?: () => void;
  variant: "outlined" | "filled";
  fontSize?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  flat?: boolean;
  color?: string;
  rippleColor?: string;
  rippleDuration?: number;
  label?: string;
}

const Button: FunctionComponent<IButtonProps> = ({
  children,
  label,
  onClick,
  variant,
  flat = false,
  color = "teal",
  fontSize = "20px",
  width = "100px",
  height = "40px",
  borderRadius = "5px",
  rippleColor,
  rippleDuration,
}) => {
  return (
    <StyledButton
      fontSize={fontSize}
      width={width}
      height={height}
      borderRadius={borderRadius}
      flat={flat}
      color={color}
      variant={variant}
      onClick={onClick}
    >
      {label}
      {children}
      <Ripple color={rippleColor} duration={rippleDuration} />
    </StyledButton>
  );
};

export default Button;
