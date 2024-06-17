import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer id="contact" className="w-full pt-20 pb-10">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          className="w-full h-full opacity-50"
          src="/footer-grid.svg"
          alt="grid"
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 my-5 text-center md:mt-10">
          Reach out to me today and let&apos;s discuss how I can help your
          goals.
        </p>
        <a href="mailto:ericgeorge4477@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex flex-col justify-between items-center mt-16  md:flex-row">
        <p className="text-sm font-light md:font-normal md:text-base">
          Copyright &copy; {new Date().getFullYear()} Eric
        </p>
        <div className="flex items-center gap-6 md:gap-3">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-150 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href={profile.link}>
                <img
                  src={profile.img}
                  alt={profile.img}
                  width={20}
                  height={20}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
