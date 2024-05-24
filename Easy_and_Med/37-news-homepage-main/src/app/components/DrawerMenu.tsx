import Image from "next/image";
import closeDrawerIcon from "../../../public/icon-menu-close.svg";
import { navNames } from "./Header";

type DrawerMenuProps = {
  toggleDrawer: (value: boolean) => () => void;
};

export function DrawerMenu({ toggleDrawer }: DrawerMenuProps) {
  return (
    <div className="bg-white w-[18rem] flex flex-col p-6 items-end ">
      <Image
        src={closeDrawerIcon}
        alt="close"
        className="cursor-pointer mb-12"
        onClick={toggleDrawer(false)}
      />
      <div className="w-full">
        <nav className="flex flex-col gap-6 items-start font-semibold">
          {navNames.map((item) => {
            return <button className=" hover:text-red-500 ">{item}</button>;
          })}
        </nav>
      </div>
    </div>
  );
}
