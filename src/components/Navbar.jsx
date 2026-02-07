import React, { useState } from "react";
import logo from "/src/assets/logo.svg";
import { Github, Menu, Twitter, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className={` py-5 bg-black relative w-full transition-all ease-in-out duration-300`}
    >
      <div className="flex items-center justify-between px-5 md:max-w-7xl mx-auto">
        {/* logo */}
        <a href="">
          <img src={logo} alt="logo" width={32} />
        </a>

        {/* desktop nav */}

        <div className="hidden md:flex items-center gap-10 ml-auto ">
          <a href="" className="">
            About
          </a>
          <a href="" className="">
            Collections
          </a>
          <a href="" className="">
            FAQs
          </a>
          <button className="bg-slate-500 py-2 px-5 rounded-3xl text-slate-300 cursor-pointer hover:bg-gray-700 transition-colors duration-300 ease-in-out">
            Connect Wallet
          </button>

          <Twitter size={25} className="fill-white cursor-pointer" />
          <Github size={25} className="fill-white cursor-pointer" />
        </div>

        <div className="md:hidden flex items-center gap-3">
          {/* mobile menu toggle */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="">
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>
      {/* mobile nav */}

      <div
        className={`md:hidden absolute left-0 w-full bg-black overflow-hidden transition-all ease-in-out duration-300 mt-5 px-5 ${
          menuOpen ? "max-h-80 py-4" : "max-h-0 py-0"
        } `}
      >
        <ul className="flex flex-col gap-3">
          <a
            onClick={(e) => {
              e.preventDefault();
              setMenuOpen(false);
            }}
            href=""
            className=""
          >
            About
          </a>
          <a
            onClick={(e) => {
              e.preventDefault();
              setMenuOpen(false);
            }}
            href=""
            className=""
          >
            Collections
          </a>
          <a
            onClick={(e) => {
              e.preventDefault();
              setMenuOpen(false);
            }}
            href=""
            className=""
          >
            FAQs
          </a>
          <button
            onClick={(e) => {
              setMenuOpen(false);
            }}
            className="bg-slate-500 py-2 px-5 rounded-xl text-slate-300 w-full"
          >
            Connect Wallet
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
