// Footer.jsx

import React from "react";
import { FaEnvelope } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import "./Footer.css"; // Import the CSS file for styling

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]" id="contact">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-col items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <h1 className="text-4xl font-semibold text-center text-black bg-gradient-to-r from-purple-500 to-cyan-500 py-6 px-4 mb-10">
              Let's Connect 🤝🏼
            </h1>
            <p className="flex flex-row items-center my-[15px] cursor-pointer contact-item">
              <FaEnvelope />
              <a
                href="mailto:ramyasrimuthuluri@gmail.com"
                className="text-[15px] ml-[6px]"
              >
                "Ready to dive into new challenges and deliver outstanding results. Let's chat! Email me to get started."
              </a>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer contact-item">
              <RxLinkedinLogo />
              <a
                href="https://www.linkedin.com/in/ramya-sri-518a85204/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] ml-[6px]"
              >
                "Let's connect professionally on LinkedIn. Explore my career journey and insights."
              </a>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer contact-item">
              <RxInstagramLogo />
              <a
                href="https://www.instagram.com/__ramya__sri__/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] ml-[6px]"
              >
                Instagram
              </a>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer contact-item">
              <RxTwitterLogo />
              <a
                href="https://twitter.com/ramya_sri88222"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] ml-[6px]"
              >
                "Engage with me on Twitter for my Technical insights"
              </a>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer contact-item">
              <RxGithubLogo />
              <a
                href="https://github.com/MRamya-sri"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] ml-[6px]"
              >
                "Explore my code repositories and contributions on GitHub. Let's collaborate on open-source projects!"
              </a>
            </p>
          </div>
        </div>

        <div className="mb-[20px] mt-[100px] text-[15px] text-center">
          &copy; Designed and Developed by Ramya Sri 💡. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
