import sourceImg from "../Assests/4th Image.png";
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';

import Bottom from "./Bottom";

function Source() {
  const bgImage1 = {
    background: `url('${sourceImg}')`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center right",
  };
  
  // Media query to handle scaling on smaller screens
  const style = document.createElement('style');
  style.innerHTML = `
    @media (max-width: 768px) {
      .responsive-background {
        background-size: cover; /* Ensures the image covers the background area */
        background-position: center; /* Centers the image */
      }
    }
  `;
  
  document.head.appendChild(style);
  

  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.2, // Trigger when 20% of the element is in view
  });

  const animateRef = useRef(null);

  useEffect(() => {
    if (inView && animateRef.current) {
      const elements = animateRef.current.children;

      gsap.fromTo(elements, 
        {
          opacity: 0,
          y: 50,
        }, 
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          stagger: 0.3, // Stagger the animations of child elements by 0.3 seconds
        }
      );
    }
  }, [inView]);

  
  return (
    <footer class="">
      <div
      ref={ref}
        style={bgImage1}
        class=" Middle h-[400px]  md:rounded-none shadow-xl xl:h-[700px] p-4 flex items-center justify-center lg:justify-between  bg-[#0f0f0f]    "
      >
        <div  ref={animateRef} className=" h-fit w-fit text-[40px] sm:text-[50px] lg:text-[77px]   rounded-2xl bg-black/50 p-6 xl:p-0 xl:bg-[#0f0f0f] lg:ml-24 text-white  tracking-wide  leading-none">
          <div className="text-left">
            <p className=" font-normal font-[Anton] ">WE SOURCE FROM</p>
            <p>
              <span className=" font-normal font-[Anton] ">THE</span>{" "}
              <span className=" font-normal  tracking-tighter italic lg:text-[85px] font-[Playfair] ">
                {" "}
                biggest names
              </span>
            </p>
            <p>
              <span className=" font-normal font-[Anton] ">SO YOU</span>{" "}
              <span className=" font-normal  tracking-tighter italic lg:text-[85px] font-[Playfair] ">
                {" "}
                never
              </span>
            </p>
            <p className=" font-normal font-[Anton] ">MISS A CLAIMABLE</p>
          </div>
        </div>
      </div>

      <Bottom/>
    </footer>
  );
}

export default Source;
