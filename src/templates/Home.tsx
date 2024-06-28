import { ReactElement } from "react";
import Header from "../components/Header";
import ContainerWrapper from "../components/ContainerWrapper";
import Button from "../components/Button";
import ModalContainer from "../components/ModalContainer";
import { useDisclosure } from "@nextui-org/react";
import NewCarForm from "./NewCarForm";

const HomeTemplate = (): ReactElement => {
  const { isOpen, onOpenChange, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div className="bg-zinc-950 min-h-screen">
        <Header />
        <ContainerWrapper className="mt-10">
          <Button title="Adicionar" onClick={() => onOpen()} />
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
