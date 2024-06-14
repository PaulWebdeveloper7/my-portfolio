'use client'
import { useState } from "react";
import GlobeDemo from "./GlobeDemo";
import { AnimatedTooltip } from "./ui/animated-toolkit";
import people from '@/utils/people'
const BentoGrid = () => {
  const [iscopied, setIscopied] = useState(false)
  return (
    <section className="flex flex-row  w-full  px-10 gap-13 justify-center items-center max-md:flex-col">
    <div className="flex flex-col gap-12">
      <div className=" p-10 rounded-lg shadow-lg max-w-md text-center  glass">
    <h1 className="font-extrabold text-3xl">Want to collab with me</h1>
    { iscopied ? (
    <button className=" font-extrabold p-5 rounded-md mt-10 bg-blue-800">
      Email copied 
    </button>
     ):(
     <button className=" font-extrabold p-5 rounded-md  mt-10 bg-blue-800" onClick={()=>{
        if (navigator.clipboard) {
            navigator.clipboard.writeText('komalpaulbwebdeveloper@gmail.com');
            console.log('copied to clipboard successfully')
          }
      setIscopied(true)}}>Copy my email </button>
     )}
    
      </div>
  
    <div className="glass p-10 rounded-lg shadow-lg max-w-md text-center">
      <h1 className=" font-extrabold text-3xl">My Tech Stack</h1>
      <div className="flex flex-row items-center justify-center w-full mt-12">
      <AnimatedTooltip items={people} />
    </div>
    </div>
    </div>
    <div className=" relative top-11  w-full">
  
          
      <GlobeDemo/>
    </div>
  </section>
  )
}

export default BentoGrid