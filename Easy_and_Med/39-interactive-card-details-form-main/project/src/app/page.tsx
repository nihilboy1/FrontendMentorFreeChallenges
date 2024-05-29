"use client";
import Image from "next/image";
import mainBgMobile from "../../public/bg-main-mobile.png";
import cardLogo from "../../public/card-logo.svg";
import cardFront from "../../public/bg-card-front.png";
import cardBack from "../../public/bg-card-back.png";

import { z } from "zod";
import { FormInput } from "./components/FormInput";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

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
  const [cvc, setCvc] = useState("");

  const methods = useForm<typeCardDetailsSchema>({
    resolver: zodResolver(cardDetailsSchema),
  });

  function sendCardDetails(data: typeCardDetailsSchema) {
    console.log(data);
  }

  return (
    <main className="min-h-[100vh]">
      <header className="relative flex items-center justify-center">
        <Image src={mainBgMobile} alt="bg main mobile" className="w-full xs:max-h-[21rem]" />
        <div className=" absolute top-[0rem]  w-[24.5rem]  h-full ">
          <div className="right-5 top-5 xs:right-1 xs:top-[4.2rem] absolute w-[19rem] xs:w-[21rem] h-[10.5rem] xs:h-[11.5rem]  text-white shadow-lg">
            <Image src={cardBack} alt="card front" className="absolute" />
            <div className="absolute w-full h-full flex flex-col justify-between p-5 ">
              <span className="mt-[3.2rem] ml-[14rem] xs:ml-[15.5rem] xs:mt-[3.7rem] text-sm">
                {cvc ? cvc : "123"}
              </span>
            </div>
          </div>
          <div className="left-5 top-[7.5rem] xs:left-0 xs:top-[11rem] absolute  w-[19rem] xs:w-[21rem] h-[10.5rem] xs:h-[11.5rem]  text-white shadow-lg">
            <Image src={cardFront} alt="card front" className="absolute" />
            <div className="absolute w-full h-full flex flex-col justify-between p-5 ">
              <Image src={cardLogo} alt="card logo" className="w-[4rem]" />
              <span className="font-bold text-[1.35rem] tracking-wide mt-4">
                {cardNumber ? cardNumber : "0000 0000 0000 0000"}
              </span>
              <div className="flex justify-between text-xs">
                <span>
                  {cardHolderName ? cardHolderName : "JANE APPLESEED"}
                </span>
                <span>{`${monthExp ? monthExp : "00"}/${
                  yearExp ? yearExp : "00"
                }`}</span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <FormProvider {...methods}>
        <form
          className="px-5 pt-[5rem] pb-8  max-w-[32rem] mx-auto"
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
          <div className="flex gap-4 items-start">
            <div>
              <label className="text-sm tracking-widest font-semibold text-[#210831]">
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
            className="text-white w-full p-4 rounded-xl font-semibold text-lg bg-[#210831]"
          >
            Confirm
          </button>
        </form>
      </FormProvider>
    </main>
  );
}
