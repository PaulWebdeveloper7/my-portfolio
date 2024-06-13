"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background.gradient";
import Image from "next/image";

export function BackgroundGradientDemo() {
  return (
    <div className=" my-11">
      <BackgroundGradient className="rounded-[22px]  p-4 sm:p-10 bg-black dark:bg-zinc-900 w-[80vw] ">
        <div className="flex  gap-16 justify-center flex-wrap">

        <Image
          src={`/images/Helloworld.gif`}
          alt="jordans"
          height="400"
          width="400"
          property="unoptimized"
          className="object-contain rounded-md"
          />
         <Image
          src={`/images/program.gif`}
          alt="jordans"
          height="400"
          width="400"
          property="unoptimized"
          className="object-contain rounded-md"
          />
          </div>
        <p className="text-base sm:text-3xl text-white mt-4 mb-2 dark:text-neutral-200  font-extrabold">
           Hello world to full stack  Web  development
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
        My journey into full-stack web development began with a simple "Hello, World!" and quickly expanded to mastering HTML, CSS, and JavaScript. I progressed to building dynamic interfaces with React and delved into backend technologies like Node.js and Python, connecting them with databases like SQL and NoSQL. Along the way, I embraced tools like Git, Docker, and cloud deployment. Today, I create seamless full-stack applications that blend compelling front-end designs with robust back-end functionality.
        </p>
       
      </BackgroundGradient>
    </div>
  );
}
