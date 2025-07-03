import { useGSAP } from "@gsap/react";
import React, { useRef, useState } from "react";

import { gsap } from "gsap";
import { FaArrowDown } from "react-icons/fa";

const Home = () => {
  let [showContent, setShowContent] = useState(false);

  const svgRef = useRef();
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 20,
      duration: 2,
      ease: "Power4.easInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.7,
      ease: "expo.inOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.8) {
          setShowContent(true);
          if (svgRef.current) {
            svgRef.current.remove();
          }
          this.kill();
        }
      },
    });

    return () => tl.kill();
  }),
    [];

  return (
    <>
      <div
        ref={svgRef}
        className="svg w-full h-screen flex items-center justify-center fixed top-0 z-50 left-0 bg-black "
      >
        <svg
          viewBox="0 0 800 600"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>

      {showContent && (
        <div className="w-full  bg-black">
          <div className="w-full h-screen  ">
            <div className="navBar  fixed top-0 w-full  z-[50] flex items-center p-10 ">
              <div className="flex items-end gap-10">
                <div className="">
                  <div className="w-16 py-0.5 md:py-1 mb-2 bg-white"></div>
                  <div className="w-10 py-0.5 md:py-1 mb-2 bg-white"></div>
                  <div className="w-6 py-0.5 md:py-1  bg-white"></div>
                </div>
                <h3 className="text-white text-4xl md:text-5xl  leading-none  ">
                  Rockstar
                </h3>
              </div>
            </div>

            <div className="imagDiv relative w-full h-screen overflow-hidden ">
              <img
                className="absolute w-full h-full object-cover top-0 left-0 "
                src="../public/sky.png"
                alt=""
              />
              <img
                className="absolute w-full h-full object-cover top-0 left-0 "
                src="../public/bg.png"
                alt=""
              />
              <img
                className="absolute  scale-80 -bottom-[30%] md:-bottom-[40%] md:scale-90    xl:-bottom-1/2  xl:scale-80 2xl:scale-100  left-1/2 -translate-x-1/2 "
                src="../public/9b48f167-3aeb-457f-b8d3-9c20324f9a9e.png"
                alt=""
              />
            </div>

            <div className="bottomBar  absolute bottom-10  w-full flex items-center px-10 overflow-hidden   ">
              <div className="flex items-center relative w-full h-full">
                <div className="flex items-center gap-3 py-3 px-3 rounded-full border border-white">
                  <FaArrowDown size={40} className="text-white" />

                  <h3 className="capitalize text-2xl text-white font-serif ">
                    Scroll Down
                  </h3>
                </div>

                <div className=" w-[300px] h-[300px] absolute -translate-x-1/2 left-1/2 top-0 z-50">
                  <img
                    src="../public/ps5.png"
                    alt=""
                    className="object-contain  "
                  />
                </div>
              </div>
            </div>
            <div className="h-[100px] absolute bottom-0 w-full mask-t-from-4 py-2">a</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
