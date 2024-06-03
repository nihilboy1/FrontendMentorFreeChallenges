import bgMobile from "../../public/bg-mobile.png";
import bgDesktop from "../../public/bg-desktop.png";
import logoFylo from "../../public/logo.svg";
import iconDocument from "../../public/icon-document.svg";
import iconFolder from "../../public/icon-folder.svg";
import iconUpload from "../../public/icon-upload.svg";
import circle from "../../public/circle-fill.svg";
import triangleFill from "../../public/triangle-fill.svg";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <Image
        src={bgMobile}
        alt="background image"
        className="md:hidden w-full h-full absolute"
      />
      <Image
        src={bgDesktop}
        alt="background image"
        className="max-md:hidden min-w-[65rem] w-[100vw] absolute bottom-[-2rem]"
      />
      <main className="text-white flex md:flex-row flex-col justify-center md:items-center relative h-[100vh] p-8 gap-5 max-w-[26rem] md:max-w-none mx-auto">
        <div className="md:mb-[1.5rem] rounded-md rounded-tr-[8rem] md:rounded-tr-[5rem] p-8 max-md:py-10 flex flex-col bg-[#1e2c69] md:w-[20rem]">
          <Image src={logoFylo} alt="logo" />
          <div className="flex gap-3 mt-8">
            <button className="w-12 h-12 flex items-center justify-center bg-[#0c122c] rounded-md">
              <Image src={iconDocument} alt="icon Document" />
            </button>
            <button className="w-12 h-12 flex items-center justify-center bg-[#0c122c] rounded-md">
              <Image src={iconFolder} alt="icon Folder" />
            </button>
            <button className="w-12 h-12 flex items-center justify-center bg-[#0c122c] rounded-md">
              <Image src={iconUpload} alt="icon Upload" />
            </button>
          </div>
        </div>
        <div className="relative rounded-md p-8 max-md:pb-14  bg-[#1e2c69] flex flex-col items-center md:max-w-[34rem] w-full">
          <h2 className="text-sm opacity-80 md:self-start">
            You've used <strong>815 GB</strong> of your storage
          </h2>
          <div className="w-full h-[1.4rem] rounded-xl my-4 bg-[#0c122c] p-1 flex items-center justify-start">
            <div className="bg-gradient-to-r from-[#ffa399] to-[#ff4d97] w-[74%] h-full rounded-xl p-[0.1rem] flex justify-end items-center">
              <Image src={circle} alt="circle" className="w-[0.9rem]" />
            </div>
          </div>
          <div className="flex justify-between flex-row w-full text-sm font-bold ">
            <span>0 GB</span>
            <span>100 GB</span>
          </div>
          <div className="md:right-[2rem] md:top-[-3rem]  flex items-center justify-center gap-2 p-6 md:px-[1rem] text-xs md:text-[0.60rem]  text-[#0c122c] absolute max-md:mt-[6.7rem] bg-white w-[11rem] h-[5rem] md:w-[8rem] md:h-[3.8rem] rounded-xl ">
            <strong className="text-[2.5rem] md:text-[1.5rem]">185</strong>
            <span>GB LEFT</span>
            <Image
              src={triangleFill}
              alt="triangle"
              className="max-md:hidden absolute -rotate-90 bottom-[-0.8rem] right-[-0.28rem]"
            />
          </div>
        </div>
      </main>
    </>
  );
}
