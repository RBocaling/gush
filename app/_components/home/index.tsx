"use client";
import React from "react";
import logo from "@/public/img/hero.gif";
import Content from "./Content";
import Image from "next/image";
import cloud_img from "@/public/images/cloud1.png";

import star from "@/public/images/star1.png";
import Moon from "../moon/Moon";
import Clouds from "./Cloud";
import Stars from "../star/index";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <div id="home_container" className="relative w-full h-auto ">
      <Stars />
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        whileInView={{ y: [-100, 0], opacity: 1 }}
        transition={{ duration: 1 }}
        id="home"
        className="relative max-w-[1365px] w-full  mx-auto pt-10 "
      >
        <div className="relative z-40 w-[320px] h-[320px]  md:w-[570px] md:h-[570px] shadodw-2xl shadow-[rgba(235,137,186,0.5)] rounded-full  mx-auto mb-12 flexColCenter">
          {" "}
          <motion.div
            initial={{ y: 0, opacity: 0 }}
            whileInView={{ y: [-15, 0], opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flexColCenter relative z-30"
          >
            <Image
              src={logo}
              alt="cloud"
              className="w-[180px] md:w-[400px] z-10 neon-turquoise-moon rounded-full opacitys-0 duration-[2s]"
            />

            <h1 className="neon-text-title text-[6rem] md:text-[3.5rem] font-bold text-left my-4">
              $Gush
            </h1>

            <h1 className="neon-text-extra text-[4rem] md:text-[1.2rem] font-bold text-left mb-4">
              Liquid Bear
            </h1>
            <div className="relative overflow-hidden w-full mt-2 mb-5">
              <div className=" slide-infinite mx-7 bg-transparent">
                <span className="neon-text-span text-[3.5rem] md:text-3xl">
                  Buy Gushers Today
                </span>
              </div>
            </div>
            <button className="neon-button shadow-lg shadow-red-200 rounded-md py-3 px-10 translate-y-8">
              Buy Now
            </button>
          </motion.div>
          <Image
            src={star}
            alt="cloud"
            className="neon-red start absolute -left-[60px] top-12 w-[60px] md:w-[120px] z-20 animate-niningning"
          />
          <Moon variant="top-0 left-0 w-[320px] h-[320px]  md:w-[570px] md:h-[570px]" />
        </div>
        <>
          <Image
            src={cloud_img}
            alt="cloud"
            className="opacity-0 duration-[2s] animate-move-cloud neon-image  absolute -left-2 top-52 w-[130px] md:w-[230px]"
            onLoadingComplete={(image) => image.classList.remove("opacity-0")}
          />
          <Image
            src={cloud_img}
            alt="cloud"
            className="opacity-0 duration-[2s] animate-move-cloud neon-image  absolute -right-12 top-40 w-[130px] md:w-[230px]"
            onLoadingComplete={(image) => image.classList.remove("opacity-0")}
          />
        </>
        <Content />
        <Clouds />
      </motion.div>
    </div>
  );
};

export default Home;
