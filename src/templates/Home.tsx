import { ReactElement } from "react";
import Header from "../components/Header";
import ContainerWrapper from "../components/ContainerWrapper";
import Button from "../components/Button";
import ModalContainer from "../components/ModalContainer";
import { useDisclosure } from "@nextui-org/react";
import NewCarForm from "./NewCarForm";
import { mockCar } from "../utils/mock-car";
import GroupedTable from "../components/GroupedTable";
import { formatPrice } from "../utils/formatters";

const HomeTemplate = (): ReactElement => {
  const { isOpen, onOpenChange, onOpen, onClose } = useDisclosure();

  const monetaryPrice = (price: number): string => formatPrice(price);

  return (
    <>
      <div className="bg-zinc-950 min-h-screen">
        <Header />
        <ContainerWrapper className="mt-10 flex flex-col items-cnter justify-center gap-6">
          <div>
            <Button title="Adicionar" onClick={() => onOpen()} />
          </div>
          <GroupedTable
            items={mockCar.cars}
            groupBy="brand_name"
            columns={[
              { header: "Modelo", accessor: "nome_modelo" },
              { header: "Ano", accessor: "ano" },
              { header: "Portas", accessor: "num_portas" },
              { header: "Cor", accessor: "cor" },
              { header: "Valor", accessor: "valor", render: monetaryPrice },
            ]}
            renderGroupHeader={(brand) => (
              <p className="text-white bg-amber-700 text-center py-1">
                {brand}
              </p>
            )}
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
