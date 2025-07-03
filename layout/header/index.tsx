import React from 'react';

const Header: React.FC = () => {
  return (
    <>
      <section className="w-full md:max-w-[1440px] mx-auto sticky top-1 z-99">
        <div className="flex justify-between items-center w-[90%] mx-auto py-2 my-4 bg-[#354C37] text-white px-4 sm:px-6 rounded-2xl shadow-sm shadow-amber-300">
          <div>
            <a href="/">
              <h1>LOGO</h1>
            </a>
          </div>

          {/* Navigation Menu */}
          <div className="hidden sm:block">
            <ul className="flex items-center gap-4 sm:gap-6">
              <li className="hover:text-[#FAAD1A]">
                <a href="#hero">Home</a>
              </li>
              <li className="hover:text-[#FAAD1A]">
                <a href="#about">About</a>
              </li>
              <li className="hover:text-[#FAAD1A]">
                <a href="#service">Services</a>
              </li>
              <li className="hover:text-[#FAAD1A]">
                <a href="#portfolio">Portfolio</a>
              </li>
              <li className="hover:text-[#FAAD1A]">
                <a href="#footer">Contact</a>
              </li>
            </ul>
          </div>

          {/* Hire Me Button */}
          <div className="bg-white text-black rounded-2xl px-4 sm:px-6 py-2 font-bold cursor-pointer hover:bg-[#FAAD1A] transition-all duration-300">
            <button>Hire Me</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;