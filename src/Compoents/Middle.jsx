import middleBg from "../Assests/3rd Image.png";
import middleSec from "../Assests/2nd Image.png";
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { useInView } from "react-intersection-observer";
import '../App.css'; 

function Middle() {
  const bgImage = {
    background: `url('${middleBg}')`,
    backgroundSize: "cover",
    backgroundPosition:"center ",
  
    
  };
  const boxRefs = useRef([]);
  const [animationTriggered, setAnimationTriggered] = React.useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView && !animationTriggered) {
      const validRefs = boxRefs.current.filter((ref) => ref !== null);
      if (validRefs.length > 0) {
        gsap.fromTo(
          validRefs,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.5, stagger: 0.3 }
        );
        setAnimationTriggered(true);
      }
    }
  }, [inView, animationTriggered]);

  // Ensure boxRefs is reset when the component unmounts
  useEffect(() => {
    return () => {
      boxRefs.current = [];
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !boxRefs.current.includes(el)) {
      boxRefs.current.push(el);
    }
  };

  return (
    <div
      style={bgImage}
      className="bg-container pt-12 xl:h-[135vh] py-4 px-6  gap-16 lg:gap-64 flex xl:flex-col flex-wrap   items-center   "
    >
      <div className="bg-[#201f23] overflow-visible justify-center pt-6 xl:pt-0  border border-gray-500 hover:scale-105 hover:cursor-pointer transition delay-150 duration-300 ease-in-out xl:h-28 px-6 xl:w-[950px] lg:justify-between rounded-2xl text-white flex flex-wrap xl:items-center ">
        <div className=" xl:text-[18px]  md:text-[24px]  tracking-wider font-bold font-[Manrope] ">
          <a href="">
            <p>
              Don’t miss the next big Airdrop!{" "}
              <span className=" text-red-500 ">Start hunting 102 today!</span>
            </p>
          </a>
        </div>
        <div className="">
          <img src={middleSec} className="w-86 xl:h-32" alt="" />
        </div>
      </div>

      <div
        ref={ref}
        className="flex lg:flex-row flex-wrap flex-col md:gap-7 items-center justify-center w-full"
      >
        <div ref={addToRefs} className="flex gap-4 md:gap-8">
          <div className="lg:h-80 h-36 w-36 p-2 text-center sm:h-40 sm:w-40 lg:w-64 flex leading-tight mt-8 lg:mt-24 flex-col items-center justify-center text-white rounded-md bg-[#000000]">
            <p className="font-[Manrope] text-[16px] text-[#f59b09] font-bold">
              Avg per user
            </p>
            <p className="lg:text-[78px] text-[24px] font-[Anton]">$803</p>
          </div>
          <div className="lg:h-80 h-36 w-36 p-2 text-center sm:h-40 sm:w-40 lg:w-64 flex leading-tight flex-col items-center justify-center text-white rounded-md bg-[#000000]">
            <p className="font-[Manrope] text-[16px] text-[#f59b09] font-bold">
              Found for users
            </p>
            <p className="lg:text-[78px] text-[24px] font-[Anton]">$206M</p>
          </div>
        </div>
        <div ref={addToRefs} className="flex gap-4 md:gap-8">
          <div className="lg:h-80 h-36 w-36 p-2 text-center sm:h-40 sm:w-40 lg:w-64 flex leading-tight mt-8 lg:mt-24 flex-col items-center justify-center text-white rounded-md bg-[#000000]">
            <p className="font-[Manrope] text-[16px] text-[#f59b09] font-bold">
              Unclaimed Airdrops
            </p>
            <p className="lg:text-[78px] text-[24px] font-[Anton]">98,594</p>
          </div>
          <div className="lg:h-80 h-36 w-36 p-2 text-center sm:h-40 sm:w-40 lg:w-64 flex leading-tight flex-col items-center justify-center text-white rounded-md bg-[#000000]">
            <p className="font-[Manrope] text-[16px] text-[#f59b09] font-bold">
              Users
            </p>
            <p className="lg:text-[78px] text-[24px] font-[Anton]">257k</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Middle;
