"use client"
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Image from "next/image";
import {Projects} from  '@/utils/projects'
const Recentprojects = () => {
  return (
    <div id="projects">
         <h1 className=" text-center text-5xl font-extrabold "> Recent projects</h1>

      <div className="flex flex-wrap items-center justify-center p-4  mt-10 relative top-36 gap-28 ">
        {Projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[70vw]"
            key={item.id}
          >
            <CardContainer className="inter-var">
      <CardBody className=" bg-white relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {item.title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {item.des}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={item.img}
            height="400"
            width="400"
            className=" w-full rounded-xl group-hover/card:shadow-xl object-contain"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
        <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2 object-contain  object-top" />
                    </div>
                  ))}
                </div>
          </div>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Check out
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recentprojects