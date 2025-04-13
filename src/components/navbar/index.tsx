"use client";

import { useState } from "react";
import { X, Menu } from "lucide-react";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const shouldHideNavbar = pathname.startsWith("/blogs");
  if (shouldHideNavbar) return null;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    setIsMenuOpen(false);

    e.preventDefault();

    const targetId = e.currentTarget.getAttribute("href")?.substring(1);
    const targetElement = document.getElementById(targetId || "");

    targetElement?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const navOptions = ["Home", "About", "Projects", "Blogs"];

  return (
    <div className="fixed w-full p-4 z-10">
      <div className="hidden md:flex justify-between items-center">
        <div className="flex flex-1 justify-center">
          <nav className="flex gap-8 px-8 py-3 border border-white/15 rounded-full bg-white/10 backdrop-blur-xl">
            {navOptions.map((item) => {
              const isBlog = item === "Blogs";
              const href = isBlog ? "/blogs" : `#${item.toLowerCase()}`;
              return (
                <a
                  key={item}
                  href={href}
                  onClick={isBlog ? undefined : handleNavClick}
                >
                  {item}
                </a>
              );
            })}
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
          {navOptions.map((item) => {
            const isBlog = item === "Blogs";
            const href = isBlog ? "/blogs" : `#${item.toLowerCase()}`;
            return (
              <a
                key={item}
                href={href}
                className="text-l font-semibold w-64 text-center py-3 px-6
                rounded-lg bg-white/10 backdrop-blur-md
                transition-all duration-300 ease-in-out
                ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                hover:bg-white/20"
                style={{
                  transitionDelay: `${navOptions.indexOf(item) * 50}ms`,
                }}
                onClick={isBlog ? undefined : handleNavClick}
              >
                {item}
              </a>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
