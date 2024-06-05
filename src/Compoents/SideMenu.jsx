import React from "react";
import logo from "../Assests/bankless logo-01.svg";
import { GoHomeFill } from "react-icons/go";
import { MdOutlinePlayCircleOutline } from "react-icons/md";
import { RiArticleLine } from "react-icons/ri";
import { RiGraduationCapLine } from "react-icons/ri";
import { PiCoins } from "react-icons/pi";
import { CiGift } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { SlStar } from "react-icons/sl";
import { FaUserAstronaut } from "react-icons/fa";

function SideMenu() {
  return (
    <aside
      id="logo-sidebar"
      class="fixed top-0 left-0 z-40  w-56  h-screen  transition-transform -translate-x-full bg-[#1c1c1d]  sm:translate-x-0 "
      aria-label="Sidebar"
    >
      <div class="h-full flex flex-col justify-between  px-3 pb-4  overflow-y-auto ">
        <ul class="space-y-2 text-[12px]      font-[manrope] font-normal">
          <li className="mt-4 py-2 w-fit h-fit flex items-start justify-start ">
            <a href="http://" rel="noopener noreferrer">
              <img src={logo} className="h-12  w-18" alt="" />
            </a>
          </li>
          <li className="py-2 px-1">
            <a
              href="#"
              class="flex items-center p-2 text-[#bbbbbb]  rounded-lg  hover:text-white "
            >
              <GoHomeFill className="  " size={20} />

              <span class="ms-3 ">Dashboard</span>
            </a>
          </li>
          <section className="space-y-3  pb-2 px-3">
            <span className=" uppercase text-[#bbbbbb] font-bold tracking-widest ">
              media
            </span>

            <li className=" pt-1">
              <a
                href="#"
                class="flex items-center  text-[#bbbbbb] rounded-lg  hover:text-white"
              >
                <MdOutlinePlayCircleOutline className="  " size={20} />

                <span class="flex-1 ms-3  whitespace-nowrap">Epsoides</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center  text-[#bbbbbb] rounded-lg  hover:text-white"
              >
                <RiArticleLine size={20} />

                <span class="flex-1 ms-3 whitespace-nowrap">Articles</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center text-[#bbbbbb] rounded-lg  hover:text-white"
              >
                <RiGraduationCapLine size={20} />

                <span class="flex-1 ms-3 whitespace-nowrap">Guides</span>
              </a>
            </li>
          </section>
          <section className="space-y-3 pt-2 px-3">
            <div className=" flex items-center justify-between w-full">
              <span className=" uppercase text-[#bbbbbb] font-bold tracking-wider ">
                tools
              </span>
              <span className=" uppercase text-[#ed1c24] tracking-wider text-[9px] hover:underline hover:cursor-pointer">
                upgrade
              </span>
            </div>
            <li className="pt-1">
              <a
                href="#"
                class="flex items-center  text-[#bbbbbb] rounded-lg  hover:text-white"
              >
                  <SlStar  className="text-[#bbbbbb]" size={20} />
                <span class="flex-1 ms-3 whitespace-nowrap">Claimables</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center  text-[#bbbbbb] rounded-lg  hover:text-white"
              >
               <FaUserAstronaut size={20} />

                <span class="flex-1 ms-3 whitespace-nowrap">
                  Airdrop Hunter
                </span>
                <span class="inline-flex items-center justify-center px-2 ms-3 text-[12px] font-medium text-white bg-[#ed1c24] rounded-full ">
                  New
                </span>
              </a>
            </li>

            <li>
              <a
                href="#"
                class="flex items-center text-[#bbbbbb] rounded-lg  hover:text-white"
              >
                <PiCoins size={20} />

                <span class="flex-1 ms-3 whitespace-nowrap">Token Hub</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center  text-[#bbbbbb] rounded-lg  hover:text-white"
              >
                <CiGift size={20} />

                <span class="flex-1 ms-3 whitespace-nowrap">Perks</span>
              </a>
            </li>
          </section>
        </ul>
        <div className="  flex flex-col gap-3  pl-2  ">
          <div className="flex hover:text-white items-center gap-3">
            <div>
              <VscAccount size={24} className="text-lg text-[#bbbbbb]" />
            </div>
            <p className="text-[#bbbbbb]">Sign In</p>
          </div>
          <div className=" pl-3 ">
            <button className="bg-red-500 text-white rounded-full px-3 py-1">
              Join for free
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default SideMenu;
