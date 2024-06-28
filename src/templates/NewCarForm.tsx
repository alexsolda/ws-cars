import { ReactElement } from "react";
import Input from "../components/Input";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../components/Button";
import { useDisclosure } from "@nextui-org/react";

type INewCarFormData = {
  name: string;
  model: string;
};

type INewCarFormProps = {
  closeForm: () => void;
};

const NewCarForm = ({ closeForm }: INewCarFormProps): ReactElement => {
  const schemaNewCarForm = Yup.object({
    model: Yup.string().required("Preencha o nome, por favor."),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<INewCarFormData>({
    resolver: yupResolver(schemaNewCarForm),
  });

  const handleCancel = (e: any) => {
    e.preventDefault();

    closeForm();
  };

  return (
    <form className="flex flex-col gap-6">
      <div className="flex gap-6">
        <Input label="Modelo" name="model" register={register} />
        <Input label="Marca" name="model" register={register} />
      </div>
      <div className="flex gap-6">
        <Input label="Combustível" name="model" register={register} />
        <Input label="Num. de portas" name="model" register={register} />
      </div>
      <div className="flex gap-6">
        <Input label="Ano" name="name" register={register} />
        <Input label="Valor" name="model" register={register} />
      </div>
      <div className="flex gap-3 mt-8 justify-end">
        <Button title="Cancelar" outlined onClick={(e) => handleCancel(e)} />
        <Button title="Salvar" />
      </div>
    </form>
  );
};

export default NewCarForm;
