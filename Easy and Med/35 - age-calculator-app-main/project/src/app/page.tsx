"use client";
import iconArrow from "../../public/icon-arrow.svg";
import { FormEvent, useRef, useState } from "react";
import { DateText } from "./components/DateText";
import Image from "next/image";

export default function Home() {
  const dayRef = useRef<HTMLInputElement | null>(null);
  const monthRef = useRef<HTMLInputElement | null>(null);
  const yearRef = useRef<HTMLInputElement | null>(null);

  const [years, setYears] = useState<number>(0);
  const [months, setMonths] = useState<number>(0);
  const [days, setDays] = useState<number>(0);

  function calculateAge(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const day = Number(dayRef.current?.value);
    const month = Number(monthRef.current?.value);
    const year = Number(yearRef.current?.value);

    if (day && month && year) {
      const usersDate = new Date(year, month - 1, day);
      const currentDate = new Date();

      let diffBetweenYears =
        currentDate.getFullYear() - usersDate.getFullYear();

      let diffBetweenMonths = currentDate.getMonth() - usersDate.getMonth();
      if (diffBetweenMonths < 0) {
        diffBetweenMonths += 12;
        diffBetweenYears--;
      }

      const numberOfDaysInThisMonth = (year: number, month: number) => {
        return new Date(year, month, 0).getDate();
      };

      if (day <= numberOfDaysInThisMonth(year, month) && day > 0) {
        let diffBetweenDays = currentDate.getDate() - usersDate.getDate();
        console.log(numberOfDaysInThisMonth(year, month))
        console.log(diffBetweenDays)
        if (diffBetweenDays < 0) {

        }
      }
    } else {
      console.error("Um ou mais campos estão nulos");
    }
  }

  return (
    <main className="w-full h-[30rem] rounded-3xl rounded-br-[8rem] bg-white p-6 py-10 transition-all">
      <form id="form" onSubmit={calculateAge}>
        <div className="flex justify-between">
          <label className="flex flex-col w-[5.5rem] font-black tracking-[0.2rem] text-[0.8rem] mb-1 text-zinc-500 ">
            DAY
            <input
              className="mb-[1px] hover:border-violet-600 border focus:mb-[-1px] focus:border-2 focus:ring-violet-600 focus:border-violet-600 focus:outline-none  p-4 rounded-lg font-black tracking-widest text-lg text-black"
              type="number"
              ref={dayRef}
            />
          </label>
          <label className="flex flex-col w-[5.5rem] font-black tracking-[0.2rem] text-[0.8rem] mb-1 text-zinc-500">
            MONTH
            <input
              className="mb-[1px] hover:border-violet-600 border focus:mb-[-1px] focus:border-2 focus:ring-violet-600 focus:border-violet-600 focus:outline-none  p-4 rounded-lg font-black tracking-widest text-lg text-black"
              type="number"
              ref={monthRef}
            />
          </label>
          <label className="flex flex-col w-[5.5rem] font-black tracking-[0.2rem] text-[0.8rem] mb-1 text-zinc-500">
            YEAR
            <input
              className="mb-[1px] hover:border-violet-600 border focus:mb-[-1px] focus:border-2 focus:ring-violet-600 focus:border-violet-600 focus:outline-none  p-4 rounded-lg font-black tracking-widest text-lg text-black"
              type="number"
              ref={yearRef}
            />
          </label>
        </div>
        <div className="relative my-16">
          <hr />
          <button
            type="submit"
            className="bg-black hover:bg-violet-600 active:p-[0.8rem] focus:bg-violet-600 h-[4rem] w-[4rem] p-[1.1rem] rounded-full absolute translate-x-[-50%] translate-y-[-50%] left-[50%]"
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
