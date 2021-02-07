// Button.stories.tsx

import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Button, { IButtonProps } from "../components/button/button";

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

// Button.stories.tsx

// We create a “template” of how args map to rendering
const Template: Story<IButtonProps> = (args) => (
  <Button {...args}>Button</Button>
);

// Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
  variant: "outlined" || "filled",
  flat: false,
  color: "teal",
  width: "100px",
  height: "40px",
  borderRadius: "5px",
  fontSize: "20px",
  rippleColor: "white",
  rippleDuration: 500,
};
