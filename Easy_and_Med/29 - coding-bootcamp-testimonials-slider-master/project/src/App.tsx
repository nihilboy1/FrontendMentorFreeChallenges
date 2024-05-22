import curvePattern from "./assets/pattern-curve.svg";
import bgPattern from "./assets/pattern-bg.svg";

import quotesPattern from "./assets/pattern-quotes.svg";
import next from "./assets/icon-next.svg";
import prev from "./assets/icon-prev.svg";
import { data } from "./data";
import { useState } from "react";

export function App() {
  const [index, setIndex] = useState(0);
  return (
    <>
      <img
        src={bgPattern}
        alt="background geometric forms"
        className="w-[36rem] absolute translate-y-[-50%] translate-x-[-50%] top-[50%] right-[-14%] lg:right-[50%] lg:translate-x-[50%] px-2"
      />
      <img
        src={curvePattern}
        alt="background geometric forms"
        className="w-[34rem] absolute left-0 bottom-0 -z-10 "
      />

      <main>
        <section className="absolute left-[32%]  top-[50%] mt-0 translate-x-[-50%] translate-y-[-50%] z-10  lg:left-[50%] lg:mt-[30rem]">
          <p className=" text-left lg:text-center  max-w-[32rem] min-w-[25rem] text-[1.6rem] font-light font-inter text-darkBlue mb-6 leading-snug ">
            "{data[index].quote}"
          </p>
          <div className="lg:flex lg:flex-col lg:items-center ">
            <strong className="mr-2 text-darkBlue">{data[index].name}</strong>
            <span className="text-grayishBlue">{data[index].job}</span>
          </div>
          <img
            src={quotesPattern}
            alt="background geometric forms"
            className="w-[6rem] absolute left-[8rem] top-[-5%] -z-10 translate-x-[-50%] translate-y-[-50%]
            lg:left-[50%]
            "
          />
        </section>
        <div className="w-[28.5rem] h-[28rem] flex  absolute top-[50%] right-[-5%] translate-x-[-50%] translate-y-[-50%] transform hover:scale-105 transition duration-200 shadow-2xl  lg:translate-x-[50%] lg:right-[50%] md:w-[22rem] md:h-[22rem]">
          <img
            src={data[index].image}
            alt="profile photo"
            className="rounded-md"
          />
          <div className="bottom-[-1.4rem] left-10 border absolute bg-white  rounded-full flex justify-between overflow-hidden lg:left-[50%] lg:translate-x-[-50%]">
            <button
              className="py-3 px-5 hover:bg-grayishBlue transition-colors "
              onClick={() =>
                index <= 0 ? setIndex(data.length - 1) : setIndex(index - 1)
              }
            >
              <img src={prev} alt="prev card icon" className="w-[0.7rem] " />
            </button>
            <button
              className="py-3 px-5 hover:bg-grayishBlue transition-colors"
              onClick={() =>
                index == data.length - 1 ? setIndex(0) : setIndex(index + 1)
              }
            >
              <img src={next} alt="next card icon" className="w-[0.7rem]" />
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
