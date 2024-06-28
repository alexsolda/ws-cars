import { ReactElement, ReactNode } from "react";

type IContainerWrapperProps = {
  className?: string;
  children: ReactNode;
};

const ContainerWrapper = ({
  className,
  children,
}: IContainerWrapperProps): ReactElement => {
  return (
    <div
      className={`max-w-userView m-auto px-4 xl:px-0 ${
        className ? className : ""
      }`}
    >
      {children}
    </div>
  );
};

export default ContainerWrapper;
