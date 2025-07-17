import React, { useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";
import gapsera from "../../assets/gapsera.png";
import Hero from "../hero/Hero"

const navMenus = [
  { name: "Home", link: "/#home" },
  { name: "About", link: "/#about" },
  { name: "Services", link: "/#services" },
  { name: "Specialized skills", link: "/#skills" },
  { name: "Contact", link: "/contact" },
];

const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") || "light"
  );

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
      {/* Top Navbar Hidden When Menu Is Open */}
      <nav
        className={`bg-secondary dark:bg-gray-900 dark:text-white z-50 relative ${
          isMenuOpen ? "hidden" : "block"
        }`}
      >
        <div className="container flex justify-between items-center py-3 sm:py-0">
          <h1 className="text-3xl text-primary font-bold">
            <img
              src={gapsera}
              alt="Logo"
              className="h-[70px] w-[100px] object-contain"
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
          <div className="block sm:hidden">
            <div className="flex items-center gap-4">
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
              <FiMenu
                className="text-2xl cursor-pointer"
                onClick={() => setIsMenuOpen(true)}
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      {isMenuOpen && (
  <div className="fixed inset-0 flex z-50 transition-all duration-700">
    {/* Left 30% with Hero */}
    <div className="w-[30%] bg-secondary dark:bg-gray-800 overflow-auto">
      <Hero />
    </div>

    {/* Right 70% with menu */}
    <div className="w-[70%] relative bg-white dark:bg-gray-900 dark:text-white shadow-md rounded-l-xl transform transition-transform duration-700 ease-in-out">
      {/* Close Icon */}
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
)}

    </>
  );
};

export default Navbar;
