import { ErrorMessage } from "@hookform/error-message";
import { useFormContext } from "react-hook-form";
import { typeCardDetailsSchema } from "../page";

interface FormInputProps {
  name: "cardHolderName" | "cardNumber" | "monthExp" | "yearExp" | "cvc";
  label?: string;
  type?: string;
  placeholder?: string;
  inputState: string;
  setInputState: (state: string) => void;
}

export function FormInput({
  name,
  label,
  type = "text",
  placeholder,
  inputState,
  setInputState,
}: FormInputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext<typeCardDetailsSchema>();

  function handleChange(value: string) {
    const maxLength =
      name === "cardNumber"
        ? 19 // 16 digits + 3 spaces
        : name === "cvc"
        ? 3
        : name === "cardHolderName"
        ? 16
        : 2;
    if (value.length <= maxLength) {
      setInputState(formatCardNumber(value.toUpperCase()));
    }
  }

  function formatCardNumber(value: string): string {
    if (name === "cardNumber") {
      // Remove all non-digit characters from input
      const cleanedValue = value.replace(/\D/g, "");
      // Add a space after every 4 digits
      return cleanedValue.replace(/(\d{4})(?=\d)/g, "$1 ");
    }
    return value;
  }

  return (
    <div className="flex flex-col w-full ">
      {label && <label htmlFor={name}>{label}</label>}
      <input
        onKeyDown={(e) =>
          type === "number" &&
          ["e", "E", "+", "-"].includes(e.key) &&
          e.preventDefault()
        }
        type={type}
        id={name}
        className={`uppercase w-full mt-2 mb-6 rounded-lg px-[1.2rem] py-[0.8rem] hover:border-[#210831] focus:outline-[#210831] border`}
        placeholder={placeholder}
        {...register(name)}
        value={formatCardNumber(inputState)}
        onChange={(e) => {
          handleChange(e.target.value);
        }}
      />

      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => (
          <p className="mt-[-1.1rem] mb-5 text-red-400">{message}</p>
        )}
      />
    </div>
  );
}
