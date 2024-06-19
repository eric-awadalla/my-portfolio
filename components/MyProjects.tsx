import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa";
import Image from "next/image";

const MyProjects = () => {
  return (
    <div id="projects" className="py-20">
      <h1 className="heading">
        A small selection of <span className="text-purple">my projects</span>
      </h1>
      <div className="flex flex-wrap sm:flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map(({ id, title, des, img, iconLists, link, liveLink }) => (
          <div
            key={id}
            className="  w-[80vw] flex flex-center justify-center lg:min-h-[32.5rem] h-[32rem] sm:h-[41rem] sm:w-[570px]"
          >
            <PinContainer title={link} href={link}>
              <div className="relative flex item-center overflow-hidden mb-10 justify-center sm:w-[570px] h-[30vh] sm:h-[40vh] w-[80vw] ">
                <div className="relative w-full h-full overflow-hidden rounded-lg lg:rounded-3xl bg-[#13162d] "></div>
                <Image
                  className="z-10 absolute bottom-0 rounded-lg"
                  layout="fill"
                  src={img}
                  alt={title}
                />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl lg:mb-3 text-base line-clamp-1">
                {title}
              </h1>
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                {des}
              </p>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-start items-center border-white/[0.2]"
                      style={{ transform: `translateX(-${5 * index * 2}px)` }}
                    >
                      <Image
                        layout="fill"
                        className="p-2"
                        src={icon}
                        alt="icon"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center">
                  <a
                    href={liveLink}
                    className="flex text-sm text-purple md:text-xs lg:text-xl"
                  >
                    Check Live Site
                  </a>
                  <FaLocationArrow color="#CBACF9" className="ms-3 " />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProjects;
