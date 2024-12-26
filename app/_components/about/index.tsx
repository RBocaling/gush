"use client";
import React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

import Stars from "../star/index";
import { motion } from "framer-motion";

const index = () => {
  return (
    <>
      <div id="about_bg" className="relative w-full h-auto">
        <Stars />
        <motion.main
          initial={{ y: 0, opacity: 0 }}
          whileInView={{ y: [-15, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          id="about"
          className="relative max-w-[1365px] w-full  mx-auto my-20 pb-14 "
        >
          <div className="w-full flexEnd">
            <LeftContent />
            <RightContent />
          </div>
          <div className="w-full max-w-full md:translate-y-[40px]">
            <div className="neon-red-line"></div>
          </div>
          <div className="flex flex-col items-center gap-5 translate-y-[10px] md:translate-y-[80px] ">
            <button className="neon-button rounded-md py-4 px-12 ">
              Buy Now
            </button>
          </div>
        </motion.main>
      </div>
    </>
  );
};

export default index;
