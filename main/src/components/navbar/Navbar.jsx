import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const navMenus = [
  {
    name: "Home",
    to: "/",
    active: "home",
  },
  {
    name: "About",
    to: "/about",
    active: "about",
  },
  {
    name: "Works",
    to: "/works",
    active: "works",
  },
];

const Navbar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.removeItem("theme");
    }
  }, [theme]);

  return (
    <>
      <nav className="dark:bg-zinc-900 dark:text-white ">
        <div className="sm:mx-80 p-2 ">
          <ul className="flex p-4 justify-center items-center lg:gap-28 md:gap-24 gap-12 shadow-inner dark:shadow-sky-500 rounded-md bg-sky-400 dark:bg-zinc-900">
            {navMenus.map((navMenu, index) => (
              <Link key={index}>
                <Link to={navMenu.to} className="text-xl font-mono font-medium hover:underline underline-offset-8 dark:decoration-sky-500 decoration-4 ">
                  {navMenu.name}
                </Link>
              </Link>
            ))}
            {/* Light and dark mode switcher */}
            {theme === "dark" ? (
              <Link
                className="text-2xl  hover:-translate-y-1 transition-transform duration-300"
                onClick={() => setTheme("light")}
              >
                🌕
                </Link>
              
              
            ) : (
              <Link
                className="text-2xl  hover:-translate-y-1 transition-transform duration-300"
                onClick={() => setTheme("dark")}
                
              >
                🌑
                </Link>
              
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
