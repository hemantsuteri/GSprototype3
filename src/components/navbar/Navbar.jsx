import React, { useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";
import gapsera from "../../assets/gapsera.png";
import Hero from "../hero/Hero";

const navMenus = [
  { name: "Home", link: "/#home" },
  { name: "About", link: "/#about" },
  { name: "Services", link: "/#services" },
  { name: "Specialized skills", link: "/#skills" },
  { name: "Contact", link: "/contact" },
];

const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
  const [theme, setTheme] = React.useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    // Update theme on load and when changed
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      {/* Navbar always visible */}
      <nav className={`bg-secondary dark:bg-gray-900 dark:text-white z-50 relative w-full`}>
        <div className="container flex justify-between items-center py-3 sm:py-0">
          <h1 className="text-3xl text-primary font-bold">
            <img
              src={gapsera}
              alt="Logo"
              className={`h-[70px] w-[100px] object-contain ${isMenuOpen ? 'hidden' : 'block'}`} // Hide image when menu is open
            />
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
                  className="text-2xl cursor-pointer"
                  onClick={() => setTheme("light")}
                />
              ) : (
                <BiSolidMoon
                  className="text-2xl cursor-pointer"
                  onClick={() => setTheme("dark")}
                />
              )}
            </ul>
          </div>

          {/* Mobile Icon */}
          <div>
          <div className="flex sm:hidden">
            {/* <div className="flex items-center gap-4"> */}
              {theme === "dark" ? (
                <BiSolidSun
                  className="text-2xl cursor-pointer"
                  // className="text-2xl cursor-pointer mx-[5px]"
                  onClick={() => setTheme("light")}
                />
              ) : (
                <BiSolidMoon
                  className="text-2xl cursor-pointer"
                  onClick={() => setTheme("dark")}
                />
              )}
              {/* Hamburger or Close Icon */}
              {isMenuOpen ? (
                <FiX
                  className="text-2xl cursor-pointer"
                  onClick={() => setIsMenuOpen(false)} // Close the menu
                />
              ) : (
                <FiMenu
                  className="text-2xl cursor-pointer mx-[5px]"
                  onClick={() => setIsMenuOpen(true)} // Open the menu
                />
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Sliding Menu when isMenuOpen is true */}
      {isMenuOpen && (
        <div className="fixed inset-0 flex z-50 transition-all duration-700">
          {/* Left 30% for Hero */}
          <div className="w-[30%] bg-secondary dark:bg-gray-800 overflow-auto transition-transform duration-700 ease-in-out">
            <Hero isMenuOpen={isMenuOpen} />
          </div>

          {/* Right 70% for Menu */}
          <div className="w-[70%] relative bg-white dark:bg-gray-900 dark:text-white shadow-md rounded-l-xl transform transition-transform duration-700 ease-in-out">
            {/* Close Icon */}
            <FiX
              className="absolute top-4 right-4 text-3xl cursor-pointer"
              onClick={() => setIsMenuOpen(false)} // Close the menu
            />

            <ul className="flex flex-col items-center justify-center h-full gap-6 transition-transform duration-500 ease-in-out">
              {navMenus.map((menu) => (
                <li key={menu.name}>
                  <a
                    href={menu.link}
                    className="text-xl font-semibold cursor-pointer"
                    onClick={() => setIsMenuOpen(false)} // Close the menu on click
                  >
                    {menu.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
