import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer
      className="
        sm:mx-[10%] 
        bg-gray-100 dark:bg-gray-900
        text-gray-700 dark:text-gray-300 dark:shadow-white
        py-8 shadow-sm 
        mt-16 
        rounded-md
        transition-all duration-300
      "
    >
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* LOGO + ABOUT */}
        <div className="space-y-4">
          <img
            src={assets.admin_logo}
            alt="logo"
            className="h-12 object-contain"
          />

          <p className="text-sm leading-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. It has been the industry’s standard dummy text since the
            1500s.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            COMPANY
          </h3>

          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-blue-500 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-blue-500 transition">
                About
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-blue-500 transition">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-blue-500 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            GET IN TOUCH
          </h3>

          <p className="text-sm"> Davanagere, Karnataka, India</p>
          <p className="text-sm"> pradeepkumarbc138@gmail.com</p>
          <p className="text-sm"> +91 6361736795</p>
        </div>
      </div>

      {/* BOTTOM COPYRIGHT BAR */}
      <div className="text-center text-gray-500 dark:text-gray-400 text-sm mt-10 border-t border-gray-300 dark:border-gray-700 pt-2">
        © {new Date().getFullYear()} MyWebsite. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
