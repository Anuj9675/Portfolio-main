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
    name: "Skills",
    to: "/skills",
    active: "skills",
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
      <nav className="dark:bg-zinc-900 dark:text-white">
        <div className="container pt-3">
          <ul className="flex justify-center items-center dark:text-white lg:gap-32 md:gap-32 gap-12">
            {navMenus.map((navMenu, index) => (
              <Link key={index}>
                <Link to={navMenu.to} className="text-xl font-semibold hover:underline underline-offset-8 decoration-sky-500 decoration-4">
                  {navMenu.name}
                </Link>
              </Link>
            ))}
            {/* Light and dark mode switcher */}
            {theme === "dark" ? (
              <Link
                className="text-2xl dark:text-white hover:-translate-y-1 transition-transform duration-300"
                onClick={() => setTheme("light")}
              >
                🌕
                </Link>
              
              
            ) : (
              <Link
                className="text-2xl dark:text-white hover:-translate-y-1 transition-transform duration-300"
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
