import { StoryFn } from "@storybook/react";
import Select, { ISelectOption, ISelectProps } from "../Select";
import { useForm } from "react-hook-form";

export default {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
};

type ExampleFormValues = {
  item: string;
};

const mockOptions: ISelectOption[] = [
  {
    value: "item01",
    label: "Item 01",
  },
  {
    value: "item02",
    label: "Item 02",
  },
];

const Template: StoryFn<ISelectProps<ExampleFormValues>> = (args) => {
  const { register } = useForm<ExampleFormValues>();
  return <Select {...args} register={register} />;
};

export const DefaultSelect = Template.bind({});
DefaultSelect.args = {
  options: mockOptions,
  label: "Item",
  name: "item",
  placeholder: "Selecione um item",
  error: "",
};

export const DefaultSelectError = Template.bind({});
DefaultSelectError.args = {
  options: mockOptions,
  label: "Item",
  name: "item",
  placeholder: "Selecione um item",
  error: "Selecione um item, por favor!",
};
