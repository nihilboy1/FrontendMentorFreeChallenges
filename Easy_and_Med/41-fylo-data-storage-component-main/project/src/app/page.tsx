import bgMobile from "../../public/bg-mobile.png";
import logoFylo from "../../public/logo.svg";
import iconDocument from "../../public/icon-document.svg";
import iconFolder from "../../public/icon-folder.svg";
import iconUpload from "../../public/icon-upload.svg";
import circle from "../../public/circle-fill.svg";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <Image
        src={bgMobile}
        alt="background image"
        className="w-full h-full absolute"
      />
      <main className="text-white flex flex-col justify-center relative h-[100vh] p-8 gap-5 max-w-[26rem] mx-auto">
        <div className="rounded-md rounded-tr-[8rem] p-8 py-10 flex flex-col bg-[#1e2c69]">
          <Image src={logoFylo} alt="logo" />
          <div className="flex gap-3 mt-8">
            <div className="w-12 h-12 flex items-center justify-center bg-[#0c122c] rounded-md">
              <Image src={iconDocument} alt="logo" />
            </div>
            <div className="w-12 h-12 flex items-center justify-center bg-[#0c122c] rounded-md">
              <Image src={iconFolder} alt="logo" />
            </div>
            <div className="w-12 h-12 flex items-center justify-center bg-[#0c122c] rounded-md">
              <Image src={iconUpload} alt="logo" />
            </div>
          </div>
        </div>
        <div className="rounded-md p-8 pb-14 bg-[#1e2c69] flex flex-col items-center">
          <h2 className="text-sm opacity-80">
            You've used <strong>815 GB</strong> of your storage
          </h2>
          <div className="w-full h-[1.4rem] rounded-xl my-4 bg-[#0c122c] p-1 flex items-center justify-start">
            <div className="bg-gradient-to-r from-[#ffa399] to-[#ff4d97] w-[74%] h-full rounded-xl p-[0.1rem] flex justify-end items-center">
              <Image src={circle} alt="circle" className="w-[0.9rem]" />
            </div>
          </div>
          <div className="flex justify-between flex-row w-full text-sm font-bold">
            <span>0 GB</span>
            <span>100 GB</span>
          </div>
          <div className="flex items-center justify-center gap-2 p-6 text-xs text-[#0c122c] absolute mt-[6.7rem] bg-white w-[11rem] h-[5rem] rounded-xl">
            <strong className="text-[2.5rem]">185</strong> GB LEFT
          </div>
        </div>
      </main>
    </>
  );
}
