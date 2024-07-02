import { ReactElement, ButtonHTMLAttributes } from "react";

export type ICustomButtonProps = {
  title: string;
  outlined?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  title,
  outlined,
  ...props
}: ICustomButtonProps): ReactElement => {
  return (
    <button
      {...props}
      className={`${
        outlined
          ? "bg-transparent border-2 border-amber-700"
          : "bg-amber-700 border-2 border-transparent"
      } hover:bg-amber-600 rounded-md min-w-[150px] py-2 text-white transition-colors ease-in-out duration-300`}
    >
      {title}
    </button>
  );
};

export default Button;
