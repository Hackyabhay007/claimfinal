import React, { useState, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import logo from "../Assests/1st Image.svg";
import sasd from "../../src/index.css";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Find() {
  const [walletAddress, setWalletAddress] = useState("");
  const navigate = useNavigate();

  function dollar() {
    const minAmount = 1000;
    const maxAmount = 10000;
    return Math.floor(Math.random() * (maxAmount - minAmount + 1)) + minAmount;
  }

  useEffect(() => {
    localStorage.setItem("walletAddress", walletAddress);
    localStorage.setItem("dollar", dollar());
  }, [walletAddress]);

  const handleInputChange = (e) => {
    setWalletAddress(e.target.value);
  };

  const handleSubmit = () => {
    if (walletAddress.trim() === "") {
      toast.error("Please enter a wallet address or ENS.", {
        position: "bottom-left",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      navigate('/claimables');
    }
  };

  return (
    <div className="w-full p-3 flex flex-wrap h-auto gap-5 pt-5 md:pb-32 flex-col  items-center justify-center  ">
      <div>
        <img src={logo} className="h-36 w-36" alt="" />
      </div>
      <div className=" text-center flex gap-4 flex-col items-center justify-center text-white">
        <div>
          <p className=" text-[40px] lg:text-[80px] leading-none lg:tracking-tighter  font-normal  font-[marlide]  ">
            Find unclaimed airdrops + more
          </p>
        </div>
        <div>
          <div className="  lg:leading-tight text-[14px] md:text-[18px] lg:text-[25px] text-[#949494]  bold  font-[Manrope]">
            <p className=" text-center ">
              Bankless finds $802 on average in airdrops & more.
              <br /> Search your wallets. Set up alerts. Tell your Friends.
            </p>
          </div>
          <div className=" mt-6 w-full gap-3 flex justify-center  text-center ">
            <div className="flex md:w-[450px] lg:w-[500px] items-center p-2 px-4  justify-between rounded-full bg-white ">
              <div className="flex  w-[90%] items-center gap-2">
                <IoSearch size={24} className=" text-black font-bold" />
                <input
                  type="text"
                  className=" placeholder:font-normal  placeholder:text-sm focus:outline-none text-black h-full w-full md:placeholder:text-lg"
                  placeholder="Wallet address or ENS..."
                  value={walletAddress}
                  onChange={handleInputChange}
                />
              </div>
              <button className=" bg-[#fa9706] px-7 py-2 rounded-full" onClick={handleSubmit}>
                Go
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Find;
