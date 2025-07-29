import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";
import gapsera from "../../assets/gapsera.png";

const navMenus = [
  { name: "Home", link: "/#home" },
  { name: "About", link: "/#about" },
  { name: "Services", link: "/#services" },
  { name: "Specialized skills", link: "/#skills" },
  { name: "Contact", link: "/contact" },
];

const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      {/* Fixed Top Navbar */}
      <nav className={`fixed top-0 left-0 w-full h-[15vh] bg-transparent shadow z-50 ${isMenuOpen? "hidden" : ""}`}>
        <div className="bg-transparent container flex justify-between items-center py-3 sm:py-0">
          {/* Logo */}
          <h1 className="text-3xl text-primary font-bold">
            <img src={gapsera} alt="Logo" className="h-[70px] w-[100px] object-contain" />
          </h1>

          {/* Desktop Menu */}
          <div className="hidden sm:block">
            <ul className="flex items-center gap-4">
              {navMenus.map((menu) => (
                <li key={menu.name}>
                  <a
                    href={menu.link}
                    className="text-xl font-semibold px-2 py-4 md:py-6 inline-block cursor-pointer"
                  >
                    {menu.name}
                  </a>
                </li>
              ))}
              {theme === "dark" ? (
                <BiSolidSun
                  className="text-2xl cursor-pointer mx-[5px]"
                  onClick={() => setTheme("light")}
                />
              ) : (
                <BiSolidMoon
                  className="text-2xl cursor-pointer mx-[5px]"
                  onClick={() => setTheme("dark")}
                />
              )}
            </ul>
          </div>

          {/* Mobile Menu Icon */}
          <div className="flex sm:hidden items-center">
            {theme === "dark" ? (
              <BiSolidSun className="text-2xl cursor-pointer mx-[5px]" onClick={() => setTheme("light")} />
            ) : (
              <BiSolidMoon className="text-2xl cursor-pointer mx-[5px]" onClick={() => setTheme("dark")} />
            )}
            <FiMenu className="text-2xl cursor-pointer mx-[5px]" onClick={() => setIsMenuOpen(true)} />
          </div>
        </div>
      </nav>

      {/* Side Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 mt-[15vh] transition-all duration-700 ease-in-out ${
          isMenuOpen ? "bg-black bg-opacity-40 pointer-events-auto" : "pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div
          className={`w-[100%] h-[100vh] bg-transparent dark:bg-gray-900 dark:text-transparent shadow-md rounded-l-xl absolute right-0 top-0 transition-transform duration-700 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <FiX
            className="absolute top-4 right-4 text-3xl cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          />
          <ul className="flex flex-col items-center justify-center h-full gap-6">
            {navMenus.map((menu) => (
              <li key={menu.name}>
                <a
                  href={menu.link}
                  className="text-xl font-semibold cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {menu.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;