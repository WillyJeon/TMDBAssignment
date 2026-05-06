import { type ReactNode } from "react";

interface LinkProps {
  children: ReactNode;
  link?: string;
  onclick?: () => void;
}

const NavLink = ({ children, link, onclick }: LinkProps) => {
  return (
    <a
      className="nav-link"
      href={link}
      onClick={() => {
        onclick?.();
      }}
    >
      <div className=" relative ">
        <div className="relative z-1 flex gap-1 items-center ">{children}</div>
        <div className="filled"></div>
      </div>
    </a>
  );
};

export default NavLink;
