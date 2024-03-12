"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-8 md:px-20 mt-40 w-full z-[20]"
    >
      <div className="order-2 md:order-1 flex flex-col gap-5 justify-center m-auto text-left">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] inline-block"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px] inline-block text-white">
            My Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-3xl md:text-5xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-white">
            Hey! 👋 I'm Ramya sri
          </span>
          <motion.div
            variants={slideInFromLeft(0.7)}
            className="text-white"
          >
            <span className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-white">
              Data Scientist 📈
            </span>
          </motion.div>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-white my-5 max-w-[600px]"
        >
          I thrive on the exhilaration of discovering hidden insights in data through creative analytical approaches. My mind is wired to constantly hypothesize about trends and relationships to uncover problems that can be solved with data.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          href="https://drive.google.com/file/d/1alrkpScLI_c35fyvFuUOG0Uiuig6Hoyw/view?usp=sharing"
          target="_blank" rel="noopener noreferrer"
        >
          Check Out My Resume!
        </motion.a>
      </div>

    </motion.div>
  );
};

export default HeroContent;
