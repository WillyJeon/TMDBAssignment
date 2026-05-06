import React, { type ReactNode, useState } from "react";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

interface NavbarProps {
  children?: ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="navbar">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center md:hidden text-white focus:outline-none cursor-pointer"
      >
        <svg className=" h-8 w-8 fill-current" viewBox="0 0 24 24">
          {isOpen ? <RxCross2 /> : <RxHamburgerMenu />}
        </svg>
      </button>

      <div
        className={`
        ${isOpen ? "block" : "hidden"} 
        md:block
         navbar-content
      `}
      >
        <div className="navbar-content">{children}</div>
      </div>
    </nav>
  );
};

export default Navbar;
