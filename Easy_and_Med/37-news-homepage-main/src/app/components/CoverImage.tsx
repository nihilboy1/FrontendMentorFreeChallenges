import web3Mobile from "../../../public/image-web-3-mobile.jpg";
import web3Desktop from "../../../public/image-web-3-desktop.jpg";

import Image from "next/image";

export function CoverImage() {
  return (
    <div className=" my-6 lg:my-0 lg:mb-8">
      <div className="md:hidden">
        <Image className="w-full" src={web3Mobile} alt="cover image" />
      </div>
      <div className="max-md:hidden">
        <Image src={web3Desktop} alt="cover image" />
      </div>
    </div>
  );
}
