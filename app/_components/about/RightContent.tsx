"use client";
import React from "react";
import { motion } from "framer-motion";

const RightContent = () => {
  return (
    <motion.div
      initial={{ x: 0, opacity: 0 }}
      whileInView={{ x: [25, 0], opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="w-[65%] right flexColStart   md:translate-x-[150px]"
    >
      <h1 className="neon-text-title text-[6rem] md:text-[4.5rem] font-bold flexCenter gap-7">
        WHAT IS <span className="underline">$MEG</span>
      </h1>
      <div className=" max-w-[450px] md:max-w-[800px] ">
        <p className="neon-text-p text-[3.5rem] md:text-3xl  tracking-wider leading-[5rem] text-[#f1eeee] m-10">
          Meet Gush, the lovable bear from Crypto Forest who’s redefining DeFi
          with charm and innovation. From playful origins to creating the
          Bearverse, Gush brings fun, community, and decentralized finance to
          life.
        </p>
        {/* <br /> */}
        <p className="neon-text-p text-[3.5rem] md:text-3xl  tracking-wider leading-[5rem] text-[#f1eeee] m-10">
          Join the "Gushers," a vibrant community sharing memes, strategies, and
          creativity around virtual campfires. Together, we’re building a future
          that’s not just DeFi-driven but filled with joy, rewards, and endless
          possibilities.
        </p>
      </div>
    </motion.div>
  );
};

export default RightContent;
