import React from "react";
import logo from "../assets/logo.png";
import { ChevronLeft, Search } from "lucide-react";

const Navbar = () => {
  return (
    <>
      <nav className="sticky inset-0 z-50 bg-bg px-4 py-5 flex flex-row items-center justify-between md:px-8 md:py-6 lg:px-16 lg:py-8 transition-all">
        <a href="/">
          <img
            src={logo}
            alt="Trailers Logo"
            className="w-[8.125rem] md:w-[10.25rem] lg:w-[11.5rem] cursor-pointer"
          />
        </a>
        <div className="flex gap-2 md:gap-2.5 lg:hidden">
          <Search className="icons hover-red" />
          <ChevronLeft className="icons hover-red" />
        </div>
        <div className="hidden items-center bg-bg-button w-[21.875rem] lg:flex xl:w-[31.25rem] 2xl:w-[48rem] rounded-md text-sub focus-within:text-main transition-all ease-in-out">
          <Search className="absolute ml-2.5 pointer-events-none" />
          <input
            type="text"
            name="search"
            placeholder="Search"
            autoComplete="off"
            className="w-full text-main placeholder-sub px-2.5 py-2 rounded-md bg-bg-button pl-11 border-none focus:outline-1 focus:outline-primary"
          />
        </div>
        <div className="hidden gap-3.5 py-0.5 lg:flex">
          <a href="/" className="navlink hover-red">
            Movies
          </a>
          <a href="/" className="navlink hover-red">
            TV Shows
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
