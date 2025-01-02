import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import DarkMode from "./DarkMode";

const Navbar = () => {
  return (
    <div>
      <div className="shadow-lg bg-white dark:bg-gray-900 dark:text-white duration-200">
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
            <div>
              <Link
                to="/"
                className="flex items-center gap-2 text-2xl sm:text-3xl font-bold"
              >
                <img src={logo} alt="Aurora's World" className="w-10" />
                Aurora
              </Link>
            </div>
            <div className="flex justify-between items-center gap-4">
              <div>
                <DarkMode />
              </div>
              <ul className="hidden sm:flex gap-4">
                <li>
                  <Link
                    to="#hero"
                    className="inline-block py-4 px-4 hover:text-primary"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="#aboutUs"
                    className="inline-block py-4 px-4 hover:text-primary"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="#gallery"
                    className="inline-block py-4 px-4 hover:text-primary"
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    to="#contact"
                    className="inline-block py-4 px-4 hover:text-primary"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
