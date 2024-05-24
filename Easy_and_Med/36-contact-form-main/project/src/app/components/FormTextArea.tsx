import { ErrorMessage } from "@hookform/error-message";
import { useFormContext } from "react-hook-form";

interface FormTextareaProps {
  name: string;
  label: string;
  placeholder?: string;
}

export function FormTextarea({ name, label, placeholder }: FormTextareaProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <label htmlFor={name} className="flex flex-col">
        {label}
      </label>
      <textarea
        id={name}
        cols={40}
        rows={7}
        className={`${
          errors[name]?.message ? "border-red-400" : "border-zinc-500"
        } mt-2 mb-6 rounded-lg px-[1.2rem] py-[0.8rem]  hover:border-teal-800 focus:outline-teal-800 border`}
        placeholder={placeholder}
        {...register(name)}
      ></textarea>
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

export default FormTextarea;
