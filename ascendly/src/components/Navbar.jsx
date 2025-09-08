import { User } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <nav className="sticky inset-0 z-50 flex items-center justify-between mx-auto bg-background/50 backdrop-blur-md px-4 py-5 md:px-[30px] md:py-6 lg:px-8 lg:py-[30px] transition-all">
      <a href="/" className="cursor-pointer">
        <p className="text-base md:text-2xl lg:text-[32px]">Ascendy</p>
      </a>
      <div className="flex items-center justify-center bg-[#3D173A] rounded-full outline-2 outline-accent outline-offset-0 px-1 py-1 cursor-pointer">
        <User className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
      </div>
    </nav>
  );
};

export default Navbar;
