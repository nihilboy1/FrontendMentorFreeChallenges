"use client";

import { ErrorMessage } from "@hookform/error-message";
import { useFormContext } from "react-hook-form";
import { ContactFormSchema } from "../page";

interface FormInputProps {
  name:
    | "contactPermissionCheck"
    | "message"
    | "emailAddress"
    | "firstName"
    | "lastName"
    | "queryTypeRadio";
  label: string;
  type?: string;
  placeholder?: string;
}

export function FormInput({
  name,
  label,
  type = "text",
  placeholder,
}: FormInputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext<ContactFormSchema>();


  return (
    <>
      <label htmlFor={name} className="flex flex-col ">
        {label}
      </label>
      <input
        type={type}
        id={name}
        className={`${
          errors[name]?.message ? "border-red-400" : "border-zinc-500"
        } mt-2 mb-6 rounded-lg px-[1.2rem] py-[0.8rem] hover:border-teal-800 focus:outline-teal-800 border`}
        placeholder={placeholder}
        {...register(name)}
      />

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
