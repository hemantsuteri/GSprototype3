import React, { useEffect } from "react";
import { FiMenu } from "react-icons/fi";
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
    <nav className="bg-secondary dark:bg-gray-900 dark:text-white z-50 relative">
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

            {/* Theme Toggle */}
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

        {/* Mobile Menu Icon */}
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
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>

          {/* Mobile Menu (controlled by isMenuOpen) */}
          {/* {isMenuOpen && (
            <div
          className={`fixed top-16 left-0 h-full w-[70vw] bg-white dark:bg-gray-900 dark:text-white shadow-md rounded-b-xl z-50 py-10 transform transition-transform duration-1000 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}>
              <ul className="flex flex-col items-center gap-4">
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
              </ul>
            </div>
          )} */}
          {isMenuOpen && (
            <div
              className={`fixed top-[10%] right-0 h-[90%] w-[70vw] bg-white dark:bg-gray-900 dark:text-white shadow-md rounded-l-xl z-50 my-10 transform transition-transform duration-1000 ease-in-out ${
                isMenuOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <ul className="flex flex-col items-center gap-4">
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
              </ul>
            </div>
          )}

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
