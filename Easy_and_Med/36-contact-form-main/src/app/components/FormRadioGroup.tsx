import { ErrorMessage } from "@hookform/error-message";
import { useFormContext } from "react-hook-form";

interface FormRadioGroupProps {
  name: string;
  options: { value: string; label: string }[];
  label: string;
}

export function FormRadioGroup({ name, options, label }: FormRadioGroupProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <label className="mb-2">{label}</label>
      <div className="flex flex-col gap-4 mb-6 sm:flex-row">
        {options.map((option) => (
          <div
            key={option.value}
            className="relative flex items-center h-[3.2rem] sm:w-full"
          >
            <input
              {...register(name)}
              type="radio"
              className="z-50 ml-4 checked:after:content-radioChecked relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-zinc-500 hover:border-teal-800 focus:outline-teal-800 checked:border-none"
              id={option.value}
              value={option.value}
            />
            <label
              className="z-0 absolute w-full h-full rounded-lg border-zinc-500 hover:border-teal-800 focus:outline-teal-800 border flex items-center"
              htmlFor={option.value}
            >
              <span className="ml-12">{option.label}</span>
            </label>
          </div>
        ))}
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

export default FormRadioGroup;
