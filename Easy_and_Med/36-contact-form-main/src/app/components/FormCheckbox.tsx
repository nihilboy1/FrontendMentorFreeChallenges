import { ErrorMessage } from "@hookform/error-message";
import { useFormContext } from "react-hook-form";

interface FormCheckboxProps {
  name: string;
  label: string;
}

export function FormCheckbox({ name, label }: FormCheckboxProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <div className="relative flex items-center h-[3.2rem] mb-4">
        <input
          {...register(name)}
          type="checkbox"
          className="z-50 checked:after:content-checkboxChecked relative h-5 w-5 cursor-pointer appearance-none border border-zinc-500 hover:border-teal-800 focus:outline-teal-800 checked:border-none"
          id={name}
        />
        <label
          className="z-0 absolute w-full h-full rounded-lg flex items-center"
          htmlFor={name}
        >
          <span className="ml-10">{label}</span>
        </label>
      </div>
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => (
          <p className="mt-[-1.1rem] mb-5 text-red-400">{message}</p>
        )}
      />
    </>
  );
}

export default FormCheckbox;
