import Image from "next/image";
import iconArrow from "../../../public/icon-arrow.svg";

export function DiviverElement() {
  return (
    <div className="relative my-16">
      <hr />
      <button type="submit" className="bg-violet-600 h-[4rem] w-[4rem] p-[1.1rem] rounded-full absolute translate-x-[-50%] translate-y-[-50%] left-[50%]">
        <Image src={iconArrow} alt="arrow icon" className="w-full h-full" />
      </button>
    </div>
  );
}
