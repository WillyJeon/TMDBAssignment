import React, { type ReactNode, useState } from "react";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

interface NavbarProps {
  children?: ReactNode;
}

const Navbar = ({ children }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="navbar">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center md:hidden focus:outline-none cursor-pointer"
      >
        <svg className=" h-8 w-8 fill-current" viewBox="0 0 24 24">
          {isOpen ? <RxCross2 size={24} /> : <RxHamburgerMenu size={24} />}
        </svg>
      </button>

      <div
        className={`
          ${isOpen ? "flex" : "hidden"} 
          flex-col md:flex md:flex-row 
          absolute md:static 
          top-full left-0 w-full md:w-auto 
          bg-[#121212] md:bg-transparent 
          p-4 md:p-0 
          items-start md:items-center 
          gap-10 z-40
        `}
      >
        <div className="navbar-content">{children}</div>
      </div>
    </nav>
  );
};

export default Navbar;
