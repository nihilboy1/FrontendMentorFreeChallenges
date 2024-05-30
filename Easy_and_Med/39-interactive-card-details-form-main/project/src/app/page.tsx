"use client";
import Image from "next/image";
import completeIcon from "../../public/icon-complete.svg";
import circleNotch from "../../public/circle-notch.svg";
import { z } from "zod";
import { FormInput } from "./components/FormInput";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Header } from "./components/Header";

const cardDetailsSchema = z.object({
  cardHolderName: z.string().min(1, "You must provide a cardholder name"),
  cardNumber: z.string().min(19, "You must provide a 16 digit card number"),
  monthExp: z.string().min(2, "Invalid exp month"),
  yearExp: z.string().min(2, "Invalid exp year"),
  cvc: z.string().min(3, "You must provide a CVC code"),
});

export type typeCardDetailsSchema = z.infer<typeof cardDetailsSchema>;

export default function Home() {
  const [cardHolderName, setCardHolderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [monthExp, setMonthExp] = useState("");
  const [yearExp, setYearExp] = useState("");
  const [loading, setLoading] = useState(false);
  const [detailsSended, setDetailsSended] = useState(false);
  const [cvc, setCvc] = useState("");

  const methods = useForm<typeCardDetailsSchema>({
    resolver: zodResolver(cardDetailsSchema),
  });

  async function sendCardDetails(data: typeCardDetailsSchema) {
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 5000));
      console.log(data);
      setDetailsSended(true);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-[100vh] lg:flex transition-all ">
      <Header
        cardHolderName={cardHolderName}
        cardNumber={cardNumber}
        cvc={cvc}
        monthExp={monthExp}
        yearExp={yearExp}
      />
      <FormProvider {...methods}>
        {detailsSended ? (
          <div className=" transition-all px-5 pt-[5rem] lg:pt-0 pb-8 lg:pb-0 max-w-[40rem] lg:w-[30rem] m-auto text-[#210831] flex flex-col justify-center ">
            <Image
              src={completeIcon}
              alt="complete icon"
              className="self-center mb-[2rem] mt-[2rem]"
            />
            <h2 className="font-medium text-3xl text-center">THANK YOU!</h2>
            <span className="mb-[3rem] mt-[1rem] opacity-75  text-center">
              We've added your card details
            </span>
            <button className="text-white w-full p-4 rounded-xl font-semibold text-lg bg-[#210831] flex justify-center items-center">
              Confirm
            </button>
          </div>
        ) : (
          <form
            className="transition-all px-5 pt-[5rem] lg:pt-0 pb-8 lg:pb-0 max-w-[40rem] lg:w-[30rem] m-auto text-[#210831]"
            onSubmit={methods.handleSubmit(sendCardDetails)}
          >
            <FormInput
              setInputState={setCardHolderName}
              inputState={cardHolderName}
              label="CARDHOLDER NAME"
              name="cardHolderName"
              placeholder={`eg. Jane Appleseed`}
            />
            <FormInput
              setInputState={setCardNumber}
              inputState={cardNumber}
              label="CARD NUMBER"
              name="cardNumber"
              placeholder="e.g 9242 3655 9977 5510"
            />
            <div className="flex gap-4 items-start font-">
              <div>
                <label className="text-sm tracking-widest text-[#210831]">
                  EXP. DATE {"(MM/YY)"}
                </label>
                <div className="flex gap-4">
                  <FormInput
                    setInputState={setMonthExp}
                    inputState={monthExp}
                    name="monthExp"
                    type="number"
                    placeholder="MM"
                  />
                  <FormInput
                    setInputState={setYearExp}
                    inputState={yearExp}
                    name="yearExp"
                    type="number"
                    placeholder="YY"
                  />
                </div>
              </div>
              <FormInput
                setInputState={setCvc}
                inputState={cvc}
                label="CVC"
                type="number"
                name="cvc"
                placeholder="e.g 123"
              />
            </div>
            <button
              type="submit"
              className="text-white w-full p-4 rounded-xl font-semibold text-lg bg-[#210831] flex justify-center items-center"
            >
              {loading ? (
                <Image
                  src={circleNotch}
                  alt="loading"
                  className="animate-spin"
                />
              ) : (
                "Confirm"
              )}
            </button>
          </form>
        )}
      </FormProvider>
    </main>
  );
}
