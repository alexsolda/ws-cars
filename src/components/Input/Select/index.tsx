import { ReactElement } from "react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

export type ISelectOption = {
  value: string;
  label: string;
};

export type ISelectProps<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  placeholder?: string;
  register: UseFormRegister<T>;
  error?: string;
  options: ISelectOption[];
};

const Input = <T extends FieldValues>({
  label,
  name,
  placeholder = "",
  register,
  options,
  error,
}: ISelectProps<T>): ReactElement => {
  return (
    <div className="mb-2 relative flex flex-col gap-1 text-white w-full">
      <label className="text-sm">{label}</label>
      <select
        className={`p-2 border-b-2 text-zinc-300 ${
          error ? "border-b-red-400" : "border-b-amber-700"
        } outline-none bg-transparent`}
        {...register(name)}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
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
