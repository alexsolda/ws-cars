import { StoryFn } from "@storybook/react";
import GroupedTable, { IGroupedTableProps } from "../GroupedTable";

export default {
  title: "Components/GroupedTable",
  component: GroupedTable,
  tags: ["autodocs"],
};

// Defina um tipo para os dados de exemplo do Story
type ExampleDataType = {
  id: number;
  name: string;
  // Defina outros campos conforme necessário
};

// Crie um template para o Story
const Template: StoryFn<IGroupedTableProps<ExampleDataType>> = (args) => (
  <GroupedTable {...args} />
);

// Defina os argumentos para o Template
export const Default = Template.bind({});
Default.args = {
  items: [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    // Adicione mais itens conforme necessário
  ],
  groupBy: "id", // Defina a chave para agrupamento
  columns: [
    { header: "ID", accessor: "id", render: (data: string) => data },
    {
      header: "Name",
      accessor: "name",
      render: (data: string) => <strong>{data}</strong>,
    },
  ],
};
