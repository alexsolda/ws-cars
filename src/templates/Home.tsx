import { ReactElement } from "react";
import Header from "../components/Header";
import ContainerWrapper from "../components/ContainerWrapper";
import Button from "../components/Button";
import ModalContainer from "../components/ModalContainer";
import { useDisclosure } from "@nextui-org/react";
import NewCarForm from "./NewCarForm";
import GroupedTable from "../components/GroupedTable";
import {
  formatPascalCase,
  formatPrice,
  formatTimestampToDateUI,
} from "../utils/formatters";
import { useCarsByBrand } from "../stores/Car";

const HomeTemplate = (): ReactElement => {
  const { isOpen, onOpenChange, onOpen, onClose } = useDisclosure();

  const mockCar = useCarsByBrand((state) => state.cars);

  const monetaryPrice = (price: number): string => formatPrice(price);
  const pascalCase = (text: string): string => formatPascalCase(text);
  const upperCase = (text: string): string => text.toUpperCase();
  const dateUI = (timestamp: number): string =>
    formatTimestampToDateUI(timestamp);

  return (
    <>
      <div className="bg-zinc-950 min-h-screen">
        <Header />
        <ContainerWrapper className="mt-10 pb-10 flex flex-col items-cnter justify-center gap-6">
          <div className="flex justify-end">
            <Button title="Adicionar" onClick={() => onOpen()} />
          </div>
          <GroupedTable
            items={mockCar.cars}
            groupBy="brand_name"
            columns={[
              { header: "Modelo", accessor: "nome_modelo", render: upperCase },
              {
                header: "Combustível",
                accessor: "combustivel",
                render: pascalCase,
              },
              { header: "Ano", accessor: "ano" },
              { header: "Portas", accessor: "num_portas" },
              { header: "Cor", accessor: "cor", render: pascalCase },
              { header: "Valor", accessor: "valor", render: monetaryPrice },
              {
                header: "Data de cadastro",
                accessor: "timestamp_cadastro",
                render: dateUI,
              },
            ]}
          />
        </ContainerWrapper>
      </div>
      <ModalContainer
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        title="Adicionar novo carro"
      >
        <NewCarForm closeForm={onClose} />
      </ModalContainer>
    </>
  );
};

export default HomeTemplate;
