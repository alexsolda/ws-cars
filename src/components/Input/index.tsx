import { ReactElement } from "react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

export type IInputProps<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  placeholder?: string;
  register: UseFormRegister<T>;
  error?: string;
  type?: string;
};

const Input = <T extends FieldValues>({
  label,
  name,
  placeholder = "",
  register,
  type = "text",
  error,
}: IInputProps<T>): ReactElement => {
  return (
    <div className="mb-2 relative flex flex-col gap-1 text-white w-full">
      <label className="text-sm">{label}</label>
      <input
        type={type}
        className={`p-2 border-b-2 text-zinc-300 ${
          error ? "border-b-red-400" : "border-b-amber-700"
        } outline-none bg-transparent`}
        placeholder={placeholder}
        {...register(name)}
      />
      <p
        className={`absolute bottom-[-20px] text-red-400 ${
          error ? "opacity-1" : "opacity-0"
        }`}
      >
        {error ? error : "erro"}
      </p>
    </div>
  );
};

export default Input;
