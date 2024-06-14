"use client";
import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import sampleArcs from '@/utils/sampledata'
const World = dynamic(() => import("@/components/ui/globe").then((m) => m.World), {
  ssr: false,
});

const  GlobeDemo = ()=> {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };
 

  return (
   

    <div className="flex flex-row items-center justify-center py-20 h-screen md:h-auto  relative w-full">
       <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-full md:h-[40rem] px-4"> 
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="div"
        >
        
        </motion.div>
        <div className="absolute  bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black to-red z-40  top-5" />
        <div className="absolute w-full h-72 md:h-full z-10 ">
          <World data={sampleArcs} globeConfig={globeConfig} />
        </div>
      </div>
    </div>
  );
}
export default GlobeDemo; 