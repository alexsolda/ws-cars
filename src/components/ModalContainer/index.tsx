import { Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/react";
import { ReactElement } from "react";

type IModalContainerProps = {
  isOpen: boolean;
  onOpenChange: () => void;
  title?: string;
  children: ReactElement;
};

const ModalContainer = ({
  isOpen,
  onOpenChange,
  title,
  children,
}: IModalContainerProps): ReactElement => {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      backdrop="blur"
      placement="center"
      size="3xl"
      isDismissable={false}
      scrollBehavior="inside"
    >
      <ModalContent className="bg-zinc-900 rounded-md w-full">
        {title && (
          <ModalHeader className="flex flex-col gap-1 lg:mx-8 mx-3 mt-6 text-white">
            {title}
          </ModalHeader>
        )}
        <ModalBody className="lg:p-8 p-3">{children}</ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalContainer;
