import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../Assests/bankless logo-01.svg";
import { RxCross2 } from "react-icons/rx";
import SideMenu from "./SideMenu";
import { GoHomeFill } from "react-icons/go";
import { MdOutlinePlayCircleOutline } from "react-icons/md";
import { RiArticleLine } from "react-icons/ri";
import { RiGraduationCapLine } from "react-icons/ri";
import { PiCoins } from "react-icons/pi";
import { CiGift } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { BiSolidMoon } from "react-icons/bi";
import { TbAirBalloon } from "react-icons/tb";
import { SlStar } from "react-icons/sl";
import { FaUserAstronaut } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#1c1c1d]">
      <div className="max-w-7xl md:hidden mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="h-8 w-8" src={logo} alt="Logo" />
            </div>
          </div>
          <div className="flex items-center gap-3 md:hidden">
            <button className="bg-red-500 hidden md:block text-white rounded-full px-3 py-1">
              Join for free
            </button>
            <div>
              <p className=" text-white ">Sign In</p>
            </div>
            <button
              onClick={toggleMenu}
              className=" focus:outline-none hover:text-white   focus:ring-0 focus:ring-offset-0 focus:ring-offset-gray-800 focus:ring-white p-2 rounded-md"
            >
              {isOpen ? (
                <RxCross2 size={24} className="text-white" />
              ) : (
                <AiOutlineMenu size={24} className="text-white" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden fixed  inset-y-0 left-0 w-64 bg-[#1c1c1d] z-50">
          <div className="w-full h-16 flex items-center pl-4">
            <button className="bg-red-500 text-white rounded-full px-6 py-1">
              Join for free
            </button>
          </div>
          <div className="px-4 py-2 space-y-1">
            <ul class="space-y- text-[12px]      font-[manrope] font-normal">
              <li className="py- px-1">
                <a
                  href="#"
                  class="flex items-center p-2 text-[#bbbbbb]  rounded-lg  hover:text-white "
                >
                  <GoHomeFill className="  " size={20} />

                  <span class="ms-3 ">Home</span>
                </a>
              </li>
              <section className="space-y-3  pb-2 px-3">
                <li className=" pt-1">
                  <a
                    href="#"
                    class="flex items-center  text-[#bbbbbb] rounded-lg  hover:text-white"
                  >
                    <MdOutlinePlayCircleOutline className="  " size={20} />

                    <span class="flex-1 ms-3  whitespace-nowrap">Listen</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="flex items-center  text-[#bbbbbb] rounded-lg  hover:text-white"
                  >
                    <RiArticleLine size={20} />

                    <span class="flex-1 ms-3 whitespace-nowrap">Read</span>
                  </a>
                </li>
              </section>
              <section className="space-y-3 border-b pt-2 pb-3 border-gray-500 px-3">
                <div className=" flex items-center  gap-2  w-full">
                  <TbAirBalloon className="text-[#bbbbbb]" size={24} />
                  <span className=" uppercase text-[#bbbbbb] font-bold tracking-wider ">
                    tools
                  </span>
                </div>
                <li className="pt-1 pl-4">
                  <a
                    href="#"
                    class="flex items-center  text-[#bbbbbb] rounded-lg  hover:text-white"
                  >
                    <SlStar className="text-[#6a6b6d]" size={15} />
                    <span class="flex-1 ms-3 text-sm font-bold text-[#6a6b6d] whitespace-nowrap">
                      Claimables
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="flex items-center pl-4 text-[#bbbbbb] rounded-lg  hover:text-white"
                  >
                    <FaUserAstronaut size={15} className="text-[#6a6b6d]" />

                    <span class="flex-1 ms-3 text-sm font-bold text-[#6a6b6d] whitespace-nowrap">
                      Airdrop Hunter
                    </span>
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    class="flex items-center pl-4 text-[#bbbbbb] rounded-lg  hover:text-white"
                  >
                    <PiCoins className="text-[#6a6b6d]" size={15} />

                    <span class="flex-1 ms-3 text-sm font-bold whitespace-nowrap text-[#6a6b6d]">Token Hub</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="flex items-center  pl-4 text-[#bbbbbb] rounded-lg  hover:text-white"
                  >
                    <CiGift className=" text-[#6a6b6d]" size={15} />

                    <span class="flex-1 text-sm font-bold text-[#6a6b6d] ms-3 whitespace-nowrap">Perks</span>
                  </a>
                </li>
              </section>
              <li className="px- pt-3">
                <a
                  href="#"
                  class="flex items-center  text-[#bbbbbb] rounded-lg  hover:text-white"
                >
                  <span class="flex-1 ms-3 font-medium text-lg whitespace-nowrap">
                    Learn about citizenship
                  </span>
                </a>
              </li>
              <li className="px- pt-3">
                <a
                  href="#"
                  class="flex items-center  text-[#bbbbbb] rounded-lg  hover:text-white"
                >
                  <span class="flex-1 ms-3 font-medium text-lg whitespace-nowrap">
                    Sign In
                  </span>
                </a>
              </li>
              <li className="px-3 pt-3">
                <a
                  href="#"
                  class="flex items-center  text-[#bbbbbb] rounded-lg  hover:text-white"
                >
                  <BiSolidMoon size={24} className=" hover:cursor-pointer" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
