import Image from "next/image";
import React from "react";
import { UserButton } from "@clerk/nextjs";

const NavBar = () => {
  return (
    <>
      <div className="flex justify-between border-b-[1px] shadow-sm p-3 px-10">
        <div className="flex gap-10 items-center">
          <Image src="next.svg" alt="logo" width={120} height={60} />
          <div className="hidden md:flex gap-6">
            <h2 className="hover:bg-gray-100 rounded-md cursor-pointer transition-all">Home</h2>
            <h2 className="hover:bg-gray-100 rounded-md cursor-pointer transition-all">History</h2>
            <h2 className="hover:bg-gray-100 rounded-md cursor-pointer transition-all">Help</h2>
          </div>
        </div>
        <UserButton afterSignOutUrl="/" />
      </div>
    </>
  );
};

export default NavBar;
