import React, { useState } from "react";
import SideMenu from "../Compoents/SideMenu";
import Footer from "../Compoents/Footer";
import Bottom from "../Compoents/Bottom";
import { Link } from "react-router-dom";
import { IoArrowRedoCircleOutline, IoSearch } from "react-icons/io5";
import { HiSparkles } from "react-icons/hi2";
import { IoArrowRedoCircle } from "react-icons/io5";
import logo from "../Assests/bankless logo-01.svg";
import { GiAirBalloon } from "react-icons/gi";
import { RiSparkling2Fill } from "react-icons/ri";
import { TiFlash } from "react-icons/ti";
import { FaParachuteBox } from "react-icons/fa6";
import { FaBox } from "react-icons/fa6";
import { TiStarburst } from "react-icons/ti";
import ENS from "../Assests/page2im2.jpg";
import Tab from "../Compoents/Tab";
import db from '../firebase';
function Claimables() {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  const [dollar,setDollar] = useState()

  const data = [
    { title: "Airdrops", icon: FaParachuteBox, id: 1 },
    { title: "Rewards", icon: FaBox, id: 2 },
    { title: "POAPs", icon: TiStarburst, id: 3 },
    { title: "Votes", icon: RiSparkling2Fill, id: 4 },
    { title: "Mints", icon: TiFlash, id: 5 },
   
  ];

  const user =localStorage.getItem('walletAddress')
  const collection = 'banklessUsers'

  db.collection(collection).doc(user).get()
  .then((doc) => {
    if (doc.exists) {
      const dollar =doc.data();
     setDollar(dollar.dollar);
    } else {
        setDollar(localStorage.getItem('dollar'))
    }
  })
  .catch((error) => {
    console.error('Error retrieving data from Firestore:', error);
  });
  return (
    <>
      <SideMenu />
      <main className=" bg-black sm:ml-56">
        <div className="w-full text-white flex flex-col lg:flex-row flex-wrap justify-between">
          <div className="lg:w-[70%] h-full py-4 p-5">
            <div className="  lg:h-[50%]">
              <div className="flex flex-wrap  mb-6 gap-4 lg:gap-8 items-center  h-[20%]">
                <div className="flex items-center gap-2">
                  <HiSparkles size={30} className=" text-red-500 " />
                  <p className="text-[26px] font-medium text-[#969696] ">
                    {" "}
                    Claimables{" "}
                  </p>
                </div>
                <div className="flex md:w-[440px] lg:w-[490px] items-center p-2 px-4  justify-between rounded-full bg-[#1c1c1d] text-white ">
                  <div className="flex  w-[90%] items-center gap-2">
                    <IoSearch size={24} className=" text-[#969696] font-bold" />
                    <input
                      type="text"
                      className=" bg-[#1c1c1d] placeholder:font-normal  placeholder:text-sm focus:outline-none text-[#969696] h-full w-full md:placeholder:text-lg"
                      placeholder=""
                    />
                  </div>

                  <button className=" bg-[#323233] text-xs text-[#969696] font-semibold px-2 py- text-center   rounded-full">
                    Clear
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-10 lg:gap-0 items-center my-4  h-[75%]">
                <div className="p-3 my-6 text-center xl:p-0 border border-gray-500 rounded-md lg:h-12 bg-[#0d0d0d] flex items-center justify-center  w-full">
                  <p className=" xl:text-lg text-sm font-semibold ">
                    Upgrade to get email alerts for unlimited wallets, and full
                    access to all{" "}
                    <span className="underline text-red-500">
                      Citizen Benefits
                    </span>{" "}
                  </p>
                </div>
                <div className="flex flex-col py-4 text-center xl:text-left lg:flex-row justify-between items-center  w-full h-full ">
                  <div className="flex flex-col lg:flex-row items-center gap-5 ">
                    <div>
                      <img
                        src="https://www.gravatar.com/avatar/sitarganj?d=identicon&s=150"
                        className="h-32 w-32 border rounded-full"
                        alt=""
                      />
                    </div>
                    <div>
                      <div>
                        <p className=" text-xl ">{localStorage.getItem('walletAddress')}</p>
                      </div>
                      <div>
                        <p className=" text-xl xl:text-3xl font-semibold ">
                          <span className="text-[#1f66f1]">2 Claimable </span>
                          worth <span className="text-[#00d16d]">$ {dollar}</span>{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center mr-16 lg:mr-0 justify-center  lg:gap-4">
                    <div className="  w-fit flex flex-col items-center mb-5 lg:items-end">
                      <p
                        className={`${
                          show
                            ? " visible transition-all ease-in-out opacity-100 duration-700 text-gray-400  "
                            : "text-gray-400 opacity-0 invisible transition-all ease-in-out duration-700 "
                        }`}
                      >
                        Copy to clipboard
                      </p>
                      <IoArrowRedoCircleOutline
                        size={40}
                        onMouseEnter={handleShow}
                        onMouseLeave={handleShow}
                        className=" hover:cursor-pointer ml-20 lg:ml-0 text-right text-gray-400"
                      />
                    </div>
                    <div>
                      <button className="border px-8 hover:bg-gray-400 hover:text-white rounded-md border-gray-500 py-2">
                        Get alerts
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" py-4 flex items-start justify-center xl:justify-start xl:h-[50%]">
              <Tab />
            </div>
          </div>

          <div className="lg:w-[30%] h-fit  lg:border border-gray-600">
            <div className=" w-full flex lg:border-b border-gray-600 flex-col gap-5 p-5">
              <div className="flex justify-between">
                <div>
                  <p className=" text-2xl font-semibold">Wallets</p>
                </div>
                <div>
                  <button className=" uppercase  font-light text-red-500">
                    Add Wallet
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <img
                    src="https://www.gravatar.com/avatar/sitarganj?d=identicon&s=150"
                    className="h-10 w-10 border rounded-full"
                    alt=""
                  />
                </div>
                <div>
                  <p>{localStorage.getItem('walletAddress')}</p>
                </div>
              </div>
            </div>

            <div className="p-5 lg:border-b border-gray-600">
              <div className="mb-2">
                <p className="text-xl tracking-wider font-bold">Alerts</p>
                <p className="text-[#969696] font-thin text-sm">
                  Get email alerts for new & expiring Claimables
                </p>
              </div>
              <div>
                {data.map((item) => (
                  <div
                    key={item.id}
                    className="w-full  flex p-2 items-end justify-between"
                  >
                    <div className="flex gap-2 items-center">
                      <div>
                        <item.icon size={24} className="text-red-500" />
                      </div>
                      <div>
                        <p className="text-lg font-semibold">{item.title}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <label
                        htmlFor={`AcceptConditions-${item.id}`}
                        className="relative inline-block h-6 w-12 cursor-pointer rounded-full bg-[#1c1c1d] transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-green-500"
                      >
                        <input
                          type="checkbox"
                          id={`AcceptConditions-${item.id}`}
                          className="peer sr-only"
                        />
                        <span className="absolute inset-y-0 start-0 m-1 size-4 rounded-full bg-white transition-all peer-checked:start-6"></span>
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-5 ">
              <div className="flex items-center gap-2">
                <div>
                  <img src={ENS} className="w-8 rounded-full h-8" alt="" />
                </div>
                <div>
                  <p className="text-2xl font-bold">ENS reminders</p>
                </div>
              </div>
              <div>
                <p className="text-[#969696] font-thin text-sm">
                  Get email reminders to renew expiring domains
                </p>
              </div>
              <div className="mt-6  flex items-center justify-center  w-full">
                <div></div>
                <button className=" text-xl font-thin w-fit text-center  mx-auto text-red-500">
                  Get alerts
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className=" bg-[#1f1f1f] sm:ml-56">
        <Bottom />
        <Footer />
      </footer>
    </>
  );
}

export default Claimables;
