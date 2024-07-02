import { StoryFn } from "@storybook/react";
import Input, { IInputProps } from "../Input";
import { useForm } from "react-hook-form";

export default {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
};

type ExampleFormValues = {
  name: string;
};

const Template: StoryFn<IInputProps<ExampleFormValues>> = (args) => {
  const { register } = useForm<ExampleFormValues>();
  return <Input {...args} register={register} />;
};

export const DefaultInput = Template.bind({});
DefaultInput.args = {
  label: "Nome",
  name: "name",
  placeholder: "Nome...",
  error: "",
};

export const DefaultInputError = Template.bind({});
DefaultInputError.args = {
  label: "Nome",
  name: "name",
  placeholder: "Nome...",
  error: "Digite o seu nome, por favor!",
};
