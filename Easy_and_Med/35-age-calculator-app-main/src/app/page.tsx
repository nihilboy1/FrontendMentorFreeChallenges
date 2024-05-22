"use client";

import iconArrow from "../../public/icon-arrow.svg";
import { FormEvent, useRef, useState } from "react";
import { DateText } from "./components/DateText";
import Image from "next/image";

export interface DateError {
  error: boolean;
  message: string;
}

export default function Home() {
  const dayRef = useRef<HTMLInputElement | null>(null);
  const monthRef = useRef<HTMLInputElement | null>(null);
  const yearRef = useRef<HTMLInputElement | null>(null);

  const [years, setYears] = useState<number>(0);
  const [months, setMonths] = useState<number>(0);
  const [days, setDays] = useState<number>(0);
  const [errors, setErrors] = useState<{
    year: DateError;
    month: DateError;
    day: DateError;
  }>({
    year: { error: false, message: "" },
    month: { error: false, message: "" },
    day: { error: false, message: "" },
  });
  const [genericError, setGenericError] = useState(false);

  const validateInputs = (
    day: number,
    month: number,
    year: number,
    currentDate: Date
  ) => {
    let hasError = false;
    const newErrors = {
      year: { error: false, message: "" },
      month: { error: false, message: "" },
      day: { error: false, message: "" },
    };

    if (!year || year > currentDate.getFullYear()) {
      newErrors.year = {
        error: true,
        message: !year ? "This field is required" : "Must be in the past",
      };
      hasError = true;
    }

    if (!month || month > 12 || month < 1) {
      newErrors.month = {
        error: true,
        message: !month ? "This field is required" : "Must be a valid month",
      };
      hasError = true;
    }

    if (!day) {
      newErrors.day = { error: true, message: "This field is required" };
      hasError = true;
    }

    setErrors(newErrors);
    setGenericError(hasError);
    return hasError;
  };

  const calculateAge = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const day = Number(dayRef.current?.value);
    const month = Number(monthRef.current?.value);
    const year = Number(yearRef.current?.value);
    const currentDate = new Date();

    if (validateInputs(day, month, year, currentDate)) return;

    const usersDate = new Date(year, month - 1, day);
    let diffYears = currentDate.getFullYear() - usersDate.getFullYear();
    let diffMonths = currentDate.getMonth() - usersDate.getMonth();
    if (diffMonths < 0) {
      diffMonths += 12;
      diffYears--;
    }

    const daysInMonth = (year: number, month: number) =>
      new Date(year, month, 0).getDate();
    if (day > 0 && day <= daysInMonth(year, month)) {
      let diffDays = currentDate.getDate() - usersDate.getDate();
      if (diffDays < 0) {
        diffDays += daysInMonth(year, month);
        diffMonths--;
      }
      setDays(diffDays);
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        day: { error: true, message: "Must be a valid day" },
      }));
      setGenericError(true);
      return;
    }

    setMonths(diffMonths < 0 ? 0 : diffMonths);
    setYears(diffYears < 0 ? 0 : diffYears);
  };

  function Input(
    label: string,
    ref: React.RefObject<HTMLInputElement>,
    error: DateError
  ) {
    return (
      <label
        className={`flex flex-col w-[5.5rem] sm:w-[7rem] font-black tracking-[0.2rem] text-[0.8rem] mb-1 ${
          genericError ? "text-red-400" : "text-zinc-500"
        }`}
      >
        {label}
        <input
          className={`mb-[1px] p-4 rounded-lg font-black tracking-widest text-lg text-black border focus:outline-none focus:border-2 ${
            genericError &&
            "border-red-500 focus:ring-red-500 hover:border-red-600"
          } hover:border-violet-600 focus:border-violet-600 focus:ring-violet-600`}
          type="number"
          ref={ref}
        />
        {error.error && (
          <span className="mt-1 font-normal tracking-normal text-red-500">
            {error.message}
          </span>
        )}
      </label>
    );
  }

  return (
    <main className="shadow-xl sm:w-[35rem] w-full h-[30rem] rounded-3xl rounded-br-[8rem] bg-white p-6 py-10 transition-all">
      <form id="form" onSubmit={calculateAge}>
        <div className="flex justify-between sm:justify-start sm:gap-4">
          {Input("DAY", dayRef, errors.day)}
          {Input("MONTH", monthRef, errors.month)}
          {Input("YEAR", yearRef, errors.year)}
        </div>
        <div
          className={`relative mb-16 mt-[4rem] sm:mb-6 ${
            errors.year.error && "mt-[2.2rem]"
          }`}
        >
          <hr className="sm:w-[90%]" />
          <button
            type="submit"
            className="bg-black  hover:bg-violet-600 active:p-[0.8rem] focus:bg-violet-600 focus:outline-violet-700 h-[4rem] w-[4rem] p-[1.1rem] rounded-full absolute translate-x-[-50%] translate-y-[-50%] left-[50%]  sm:left-[90%]"
          >
            <Image src={iconArrow} alt="arrow icon" className="w-full h-full" />
          </button>
        </div>
      </form>
      <div className="flex flex-col">
        <DateText number={years} time="year" />
        <DateText number={months} time="month" />
        <DateText number={days} time="day" />
      </div>
    </main>
  );
}
