"use client";

import { useState } from "react";
import { X, Menu } from "lucide-react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  interface NavClickEvent
    extends React.MouseEvent<HTMLAnchorElement, MouseEvent> {}

  const handleNavClick = (e: NavClickEvent) => {
    setIsMenuOpen(false);
  };

  const navOptions = ["Home", "About", "Projects", "Contact"]

  return (
    <div className="fixed w-full p-4 z-10">
      <div className="hidden md:flex justify-between items-center">
        <div className="flex flex-1 justify-center">
          <nav className="flex gap-8 px-8 py-3 border border-white/15 rounded-full bg-white/10 backdrop-blur-xl">
            {navOptions.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={handleNavClick}>
                    {item}
                </a>
            ))}
          </nav>
        </div>
      </div>

      {/* mobile-view */}
      <div className="md:hidden flex justify-between items-center">
        <button
          onClick={toggleMenu}
          className="p-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/15 transition-colors duration-300 ease-in-out hover:bg-white/20"
        >
          <Menu size={24} />
        </button>
      </div>

      <div
        className={`md:hidden fixed inset-0 bg-blue/95 backdrop-blur-lg transition-all duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="absolute top-4 z-20 pl-4">
          <button
            onClick={toggleMenu}
            className="p-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/15 hover:bg-white/20 transition"
          >
            <X size={24} />
          </button>
        </div>
        <nav
          className={`
          flex flex-col items-center gap-6 pt-20
          transition-all duration-300 ease-in-out
          ${isMenuOpen ? "translate-y-0" : "-translate-y-10"}
        `}
        >
          {navOptions.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-l font-semibold w-64 text-center py-3 px-6
                rounded-lg bg-white/10 backdrop-blur-md
                transition-all duration-300 ease-in-out
                ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                hover:bg-white/20"
              style={{
                transitionDelay: `${
                  ["Home", "Projects", "About", "Contact"].indexOf(item) * 50
                }ms`,
              }}
              onClick={handleNavClick}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
