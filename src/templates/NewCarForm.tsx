import { FormEvent, ReactElement } from "react";
import Input from "../components/Input";
import * as Yup from "yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../components/Button";
import { useCarsByBrand } from "../stores/Car";
import Select from "../components/Input/Select";
import { mockBrand, mockFuel } from "../utils/mock-car";
import { NumericFormat } from "react-number-format";

type INewCarFormData = {
  name: string;
  brand: string;
  year: string;
  fuel: string;
  doors: string;
  value: string;
  color: string;
};

type INewCarFormProps = {
  closeForm: () => void;
};

const NewCarForm = ({ closeForm }: INewCarFormProps): ReactElement => {
  const addCar = useCarsByBrand((state) => state.addCar);

  const schemaNewCarForm = Yup.object({
    name: Yup.string().required("Preencha o nome, por favor."),
    brand: Yup.string().required("Selecione a marca, por favor."),
    year: Yup.string().required("Preencha o ano, por favor."),
    fuel: Yup.string().required("Selecione o tipo de combustível, por favor."),
    doors: Yup.string().required("Preencha a quantidade de portas, por favor."),
    value: Yup.string().required("Preencha o valor, por favor."),
    color: Yup.string().required("Preencha a cor, por favor."),
  });

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<INewCarFormData>({
    resolver: yupResolver(schemaNewCarForm),
  });

  const handleCancel = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    reset();
    closeForm();
  };

  const handleAddNewCar: SubmitHandler<INewCarFormData> = (data, e) => {
    e?.preventDefault();

    const removedValueChar = data.value.replace(/[R$.\s]/g, "");
    const valueNumber = parseFloat(removedValueChar.replace(",", "."));

    const newCar = {
      id: Math.random(),
      timestamp_cadastro: Date.now(),
      modelo_id: Math.random(),
      ano: +data.year,
      combustivel: data.fuel,
      num_portas: +data.doors,
      cor: data.color,
      nome_modelo: data.name,
      valor: valueNumber,
      brand: Math.random(),
      brand_name: data.brand,
    };

    addCar(newCar);
    reset();
    closeForm();
  };

  return (
    <form
      className="flex flex-col gap-6"
      onSubmit={handleSubmit(handleAddNewCar)}
    >
      <div className="flex gap-6">
        <Input
          label="Modelo"
          name="name"
          register={register}
          error={errors.name?.message}
        />
        <Select
          label="Marca"
          placeholder="Marca"
          options={mockBrand}
          name="brand"
          register={register}
          error={errors.brand?.message}
        />
      </div>
      <div className="flex gap-6">
        <Select
          label="Combustível"
          placeholder="Combustível"
          options={mockFuel}
          name="fuel"
          register={register}
          error={errors.fuel?.message}
        />
        <Input
          label="Num. de portas"
          name="doors"
          register={register}
          error={errors.doors?.message}
        />
      </div>
      <div className="flex gap-6">
        <Input
          label="Cor"
          name="color"
          register={register}
          error={errors.color?.message}
        />
        <Input
          type="number"
          label="Ano"
          name="year"
          register={register}
          error={errors.year?.message}
        />
        <div className="mb-2 relative flex flex-col gap-1 text-white w-full">
          <label className="text-sm">Valor</label>
          <Controller
            control={control}
            name="value"
            render={({ field: { value, name, onChange } }) => (
              <NumericFormat
                value={value}
                name={name}
                onChange={onChange}
                className={`p-2 border-b-2 text-zinc-300 ${
                  errors.value?.message
                    ? "border-b-red-400"
                    : "border-b-amber-700"
                } outline-none bg-transparent`}
                decimalScale={2}
                thousandSeparator="."
                decimalSeparator=","
                prefix="R$ "
                fixedDecimalScale={true}
              />
            )}
          />
          <p
            className={`absolute bottom-[-20px] text-red-400 ${
              errors.value?.message ? "opacity-1" : "opacity-0"
            }`}
          >
            {errors.value?.message ? errors.value?.message : "erro"}
          </p>
        </div>
      </div>
      <div className="flex gap-3 mt-8 justify-end">
        <Button
          type="button"
          title="Cancelar"
          outlined
          onClick={(e) => handleCancel(e)}
        />
        <Button type="submit" title="Salvar" />
      </div>
    </form>
  );
};

export default NewCarForm;
