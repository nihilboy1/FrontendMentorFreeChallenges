"use client";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import Image from "next/image";
import wLogo from "../../../public/logo.svg";
import menuIcon from "../../../public/icon-menu.svg";
import { useState } from "react";
import { DrawerMenu } from "./DrawerMenu";

export const navNames = ["Home", "New", "Popular", "Trending", "Categories"];

export function Header() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <header className="flex justify-between items-center lg:my-14 transition-all ">
      <Image src={wLogo} alt="w logo" />

      <nav className="flex gap-6 lg:gap-10 max-lg:hidden">
        {navNames.map((item) => (
          <button key={item} className="opacity-75 hover:text-red-500">
            {item}
          </button>
        ))}
      </nav>

      <div className="lg:hidden">
        <Button onClick={toggleDrawer(true)}>
          <Image src={menuIcon} alt="w logo" />
        </Button>
        <Drawer open={open} anchor="right" onClose={toggleDrawer(false)}>
          <DrawerMenu toggleDrawer={toggleDrawer} />
        </Drawer>
      </div>
    </header>
  );
}
