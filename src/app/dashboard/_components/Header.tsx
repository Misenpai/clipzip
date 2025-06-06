import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="p-3 px-5 flex items-center justify-between shadow-md">
      <div className="flex gap-3 items-center">
        <Image
          src={"/android-chrome-512x512.png"}
          alt="logo"
          height={30}
          width={30}
        />
        <h2 className="font-bold text-xl">ClipZap</h2>
      </div>
      <div className="flex gap-3 items-center">
        <Button>Dashboard</Button>
        <UserButton />
      </div>
    </div>
  );
};

export default Header;
