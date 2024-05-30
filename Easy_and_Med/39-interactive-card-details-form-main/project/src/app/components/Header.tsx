import Image from "next/image";
import mainBgMobile from "../../../public/bg-main-mobile.png";
import mainBgDesktop from "../../../public/bg-main-desktop.png";

import cardLogo from "../../../public/card-logo.svg";
import cardFront from "../../../public/bg-card-front.png";
import cardBack from "../../../public/bg-card-back.png";

interface HeaderProps {
  cvc: string;
  cardHolderName: string;
  cardNumber: string;
  monthExp: string;
  yearExp: string;
}

export function Header({
  cvc,
  cardHolderName,
  cardNumber,
  monthExp,
  yearExp,
}: HeaderProps) {
  return (
    <header className=" flex items-center justify-center transition-all lg:w-[35%]">
      <Image
        src={mainBgMobile}
        alt="bg main mobile"
        className="w-full xs:max-h-[21rem] lg:hidden"
      />
      <Image
        src={mainBgDesktop}
        alt="bg main desktop"
        className="max-lg:hidden h-[100vh] w-[110%]"
      />
      <div className=" absolute top-[0rem]  w-[24.5rem] lg:top-[-2.5rem]  lg:left-[2rem] transition-all ">
        <div className=" right-5 top-5 xs:right-1 xs:top-[4.2rem] lg:top-[23rem] absolute w-[19rem] xs:w-[21rem] h-[10.5rem] xs:h-[11.5rem] lg2:left-[30%] xl:left-[55%] text-white shadow-xl">
          <Image src={cardBack} alt="card front" className="absolute" />
          <div className="absolute w-full h-full flex flex-col justify-between p-5 ">
            <span className=" mt-[3.2rem] ml-[14rem] xs:ml-[15.5rem] xs:mt-[3.7rem] text-sm">
              {cvc ? cvc : "123"}
            </span>
          </div>
        </div>
        <div className="left-5 top-[7.5rem] xs:left-0 xs:top-[11rem] lg:left-[1rem] lg:top-[10rem] absolute  w-[19rem] xs:w-[21rem] h-[10.5rem] xs:h-[11.5rem]  lg2:left-[22%] xl:left-[48%] text-white shadow-xl">
          <Image src={cardFront} alt="card front" className="absolute " />
          <div className="absolute w-full h-full flex flex-col justify-between p-5 ">
            <Image src={cardLogo} alt="card logo" className="w-[4rem]" />
            <span className="font-bold text-[1.35rem] tracking-wide mt-4">
              {cardNumber ? cardNumber : "0000 0000 0000 0000"}
            </span>
            <div className="flex justify-between text-xs">
              <span>{cardHolderName ? cardHolderName : "JANE APPLESEED"}</span>
              <span>{`${monthExp ? monthExp : "00"}/${
                yearExp ? yearExp : "00"
              }`}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
