"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import CircleNotch from "../../public/circle-notch.svg";
import Image from "next/image";

import { z } from "zod";
import { FormInput } from "./components/FormInput";
import FormRadioGroup from "./components/FormRadioGroup";
import FormTextarea from "./components/FormTextArea";
import FormCheckbox from "./components/FormCheckbox";
import { toast } from "sonner";
import { ToastElement } from "./components/ToastElement";
import { useState } from "react";

const queryTypeRadioSchema = z.enum(["generalEnquiry", "supportRequest"], {
  errorMap: () => {
    return { message: "Select at least one query type" };
  },
});

const contactFormSchema = z.object({
  contactPermissionCheck: z.literal(true, {
    errorMap: () => {
      return { message: "You must provide contact permission" };
    },
  }),
  emailAddress: z
    .string()
    .min(1, "You must provide a email address")
    .email("Invalid email format"),
  firstName: z.string().min(1, "You must provide a first name"),
  lastName: z.string().min(1, "You must provide a last name"),
  message: z.string().min(1, "You must provide a message"),
  queryTypeRadio: queryTypeRadioSchema,
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;

export default function Home() {
  const [isSendingForm, setIsSendingForm] = useState(false);

  const methods = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
  });

  function handleContactForm(data: ContactFormSchema) {
    console.log(data);
    setIsSendingForm(true);
    setTimeout(() => {
      toast.custom(() => <ToastElement />);
      setIsSendingForm(false);
    }, 2000);
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(handleContactForm)}
        className="transition-all min-h-[60rem] w-full bg-white p-6 rounded-2xl flex flex-col text-zinc-800"
      >
        <h1 className="font-bold text-4xl  mb-4">Contact Us</h1>
        <FormInput name="firstName" label="First Name" placeholder="John" />
        <FormInput name="lastName" label="Last Name" placeholder="Appleseed" />
        <FormInput
          name="emailAddress"
          label="Email Address"
          type="email"
          placeholder="email@example.com"
        />

        <FormRadioGroup
          name="queryTypeRadio"
          label="Query Type"
          options={[
            { value: "generalEnquiry", label: "General Enquiry" },
            { value: "supportRequest", label: "Support Request" },
          ]}
        />
        <FormTextarea
          name="message"
          label="Message"
          placeholder="Your message"
        />
        <FormCheckbox
          name="contactPermissionCheck"
          label="I consent to being contacted by the team"
        />
        <button
          type="submit"
          className=" flex items-center justify-center active:shadow-lg hover:bg-teal-900 mt-2 border py-[1rem] text-white font-bold bg-teal-800 rounded-lg"
        >
          {isSendingForm ? (
            <Image
              className="animate-spin"
              src={CircleNotch}
              width={24}
              color="red"
              alt="Circle Notch"
            />
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </FormProvider>
  );
}
