import type { Meta, StoryFn } from "@storybook/react";
import Button, { ICustomButtonProps } from "../Button";

const meta: Meta<ICustomButtonProps> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    title: "Botão",
    outlined: false,
  },
  tags: ["autodocs"],
};

export default meta;

export const DefaultButton: StoryFn<ICustomButtonProps> = (args) => (
  <Button {...args} />
);

DefaultButton.args = {
  title: "Botão",
  outlined: true,
};
