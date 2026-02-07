import React, { useState } from "react";
import { Github, Menu, Twitter, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="py-5 bg-black relative w-full transition-all duration-300">
      <div className="flex items-center justify-between px-5 md:max-w-7xl mx-auto">
        {/* Logo */}
        <a href="/">
          <img src="/logo.svg" alt="logo" width={32} />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10 ml-auto">
          <a href="#">About</a>
          <a href="#">Collections</a>
          <a href="#">FAQs</a>

          <button className="bg-slate-500 py-2 px-5 rounded-3xl text-slate-300 hover:bg-gray-700 transition-colors">
            Connect Wallet
          </button>

          <Twitter size={25} className="fill-white cursor-pointer" />
          <Github size={25} className="fill-white cursor-pointer" />
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-3">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <div
        className={`md:hidden absolute left-0 w-full bg-black overflow-hidden transition-all duration-300 mt-5 px-5 ${
          menuOpen ? "max-h-80 py-4" : "max-h-0 py-0"
        }`}
      >
        <ul className="flex flex-col gap-3">
          {["About", "Collections", "FAQs"].map((item) => (
            <a
              key={item}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setMenuOpen(false);
              }}
            >
              {item}
            </a>
          ))}

          <button
            onClick={() => setMenuOpen(false)}
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
