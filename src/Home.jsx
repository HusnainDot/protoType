import { useGSAP } from "@gsap/react";
import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { FaArrowDown } from "react-icons/fa";

import bgImg from "./images/bg.png";
import character from "./images/9b48f167-3aeb-457f-b8d3-9c20324f9a9e.png";
import logo18 from "./images/logo18.png";
import imgPs5 from "./images/ps5.png";
import imgSky from "./images/sky.png";
import sectionTwoImg from "./images/sectioni2mag.png";
import sectionTwoImgtwo from "./images/sectionimg2.png";

const Home = () => {
  let [showContent, setShowContent] = useState(false);

  const svgRef = useRef();
  const mainContentRef = useRef();
  const bgSkyRef = useRef();
  const bgImgRef = useRef();
  const textRef = useRef();
  const charRef = useRef();
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: -20,
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

  useGSAP(() => {
  
      if (showContent) {
        const mainContent = mainContentRef.current;
        const text = textRef.current;
        const bgImg = bgImgRef.current;
        const bgSky = bgSkyRef.current;
        const charImg = charRef.current;

        if (bgImg || text || bgSky || charImg || mainContent) {
          gsap.to(mainContent, {
            rotate: 0,
            scale: 1,
            duration: 2.5,
            delay: -0.7,
            ease: "expo.inOut",
          });
          gsap.to(bgImg, {
            rotate: 0,
            scale: 1.1,
            duration: 2.5,
            delay: -0.7,
            ease: "expo.inOut",
          });
          gsap.to(bgSky, {
            rotate: 0,
            scale: 1.1,
            duration: 2.5,
            delay: -0.7,
            ease: "expo.inOut",
          });

          gsap.to(charImg, {
            x: "-50%",
            duration: 2.5,
            delay: -1.1,
            ease: "expo.inOut",
            rotate: 0,
            opacity: 1,
          });

          gsap.to(text, {
            rotate: 0,
            scale: 1,
            duration: 3,
            delay: -0.7,
            ease: "expo.inOut",
           
            opacity: 1,
          });
        }

        if (mainContent) {
          const handleMouseMove = (e) => {
            const xMove = (e.clientX / window.innerWidth - 0.5) * 40;

            if (bgImg || text || bgSky || charImg) {
              gsap.to(text, {
                x: xMove * 2,
              });
              gsap.to(bgImg, {
                x: xMove,
              });
              gsap.to(bgSky, {
                x: xMove,
              });
            }
          };

          mainContent.addEventListener("mousemove", handleMouseMove);

          return () => {
            mainContent.removeEventListener("mousemove", handleMouseMove);
          };
        }
      }
  }, [showContent,setShowContent]);

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
            href={bgImg}
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>

      {showContent && (
        <div
          ref={mainContentRef}
          className="w-full  bg-black overflow-hidden -rotate-5 scale-120  "
        >
          <div className="w-full h-screen overflow-hidden relative ">
            <div className="navBar  fixed top-0 w-full  z-[50] flex items-center  p-5 md:p-10 ">
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
                className="absolute w-full h-full object-cover top-0 left-0 scale-130 rotate-12"
                ref={bgSkyRef}
                src={imgSky}
                alt=""
              />
              <img
                className="absolute w-full h-full  object-cover top-0 left-0  scale-130 rotate-12"
                ref={bgImgRef}
                src={bgImg}
                alt=""
              />

              <div
                ref={textRef}
                className="absolute left-[60%] md:left-[55%] top-[15%] lg:top-[20%] xl:top-0 -translate-x-1/2  z-50 scale-140 opacity-0 "
              >
                <h3 className="capitalize text-6xl lg:text-7xl xl:text-9xl text-white -ml-10  md:-ml-15 lg:-ml-20 xl:-ml-20 ">
                  Grand
                </h3>
                <h3 className="capitalize  text-6xl lg:text-7xl xl:text-9xl text-white  ml-0     ">
                  thefta
                </h3>
                <h3 className="capitalize text-6xl lg:text-7xl  xl:text-9xl text-white -ml-10  md:-ml-15 lg:-ml-20 xl:-ml-20 ">
                  Auto
                </h3>
              </div>
              <img
                className="absolute -rotate-45 opacity-0  scale-100 bottom-0 lg:-bottom-[20%] lg:scale-70 xl:-bottom-[50%] xl:scale-50 2xl:-bottom-[45%] 2xl:scale-60 left-1/2 -translate-x-1/2 z-[50]  char "
                ref={charRef}
                src={character}
                alt=""
              />
            </div>

            <div className="bottomBar  absolute bottom-0 py-10  w-full flex items-center md:px-10   z-500 bg-gradient-to-b to-black">
              <div className="flex items-center relative w-full h-full">
                <div className="flex items-center gap-3 py-2 px-1 rounded-full border border-white">
                  <FaArrowDown className="text-white text-sm sm:text-base md:text-xl lg:text-2xl" />

                  <h3 className="capitalize  text-white font-serif text-sm sm:text-base md:text-xl lg:text-2xl ">
                    Scroll Down
                  </h3>
                </div>

                <div className=" w-[200px] md:w-[300px] h-[200px]  absolute md:-translate-x-1/2 md:left-1/2 right-0 top-0 z-50">
                  <img src={imgPs5} alt="" className="object-contain  " />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full   md:p-10 flex  items-center justify-center overflow-hidden">
            <div className="w-full h-full  rounded-2xl flex flex-col md:flex-row items-center  gap-10">
              <div className="w-[80%] md:w-[40%] ">
                <img
                  src={sectionTwoImgtwo}
                  className="  object-contain w-full  "
                  alt=""
                />
              </div>
              <div className=" w-auto  px-5 md:px-0 md:w-[30%] mb-20   ">
                <h3 className="text-3xl md:text-6xl text-white capitalize  ">
                  Still running,
                </h3>
                <h3 className="text-3xl md:text-6xl text-white capitalize  mb-5 md:mb-10">
                  not Hunting
                </h3>

                <p className="text-white font-sans mb-5 font-semibold  md:text-xl ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta culpa, eaque officiis voluptate ratione labore,
                  aperiam, sapiente aut pariatur perferendis eligendi cum vero
                  ipsa voluptas repellendus. Esse cum ab sapiente?
                </p>
                <p className="text-white font-sans mb-5 font-semibold  md:text-xl ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta culpa, eaque officiis voluptate ratione labore,
                  aperiam, sapiente aut pariatur perferendis eligendi cum vero
                  ipsa voluptas repellendus. Esse cum ab sapiente?
                </p>

                <div className="py-5 px-3 bg-amber-500 rounded-md w-fit text-4xl">
                  Download
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
