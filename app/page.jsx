"use client";
import Navbar from "@/components/Navbar";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";
import BentoGrid from "@/components/BentoGrid";
import {motion} from 'framer-motion'
import RecentProjects from "@/components/Recentprojects";
import { cn } from "@/utils/cn";
import { CanvasRevealEffectDemo } from "@/components/approach";
import { Boxes } from "@/components/ui/bg";
import { useRouter } from "next/navigation";
import { BackgroundGradientDemo } from "@/components/aboutme";
const page = () => {
  const router = useRouter();
  return (
    <main className="relative w-full  h-full overflow-hidden ">
      <div className="h-screen relative w-full overflow-hidden  flex flex-col  items-start justify-center gap-6">
        <div
          className="absolute inset-0 w-full h-full  z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none 
      flex "
        />
        <Boxes />
        <h1
          className={cn(
            "md:text-7xl text-4xl  relative z-20 font-extrabold mx-20   max-md:mx-10"
          )}
          
        >
          Crafting with passion seamless, innovative, and scalable web solutions{" "}
          <br />
        </h1>
        <p className=" relative z-20 mx-20   max-md:mx-10"
        
        >
          Hey , I am komal paul , I bring ideas to life through responsive,
          user-friendly applications. From concept to deployment, I ensure that
          every detail is meticulously crafted to deliver an exceptional digital
          experience.
        </p>
        <button className="relative flex overflow-hidden rounded-full p-[1px] justify-start items-start mx-20 max-md:mx-10 ">
          <span
            className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
          bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]
         "
          />
          <span
            className="inline-flex h-full w-full cursor-pointer  
        justify-center rounded-full  px-5 py-2 backdrop-blur-3xl font-bold text-2xl "
            onClick={() => {
              router.push("#contactme");
            }}
          >
            Contact Me
          </span>
        </button>
      </div>

      <div className="m-auto relative  top-[60%]" id="aboutme">
        <h1 className="text-5xl md:text-5xl font-bold dark:text-white p-20 text-center max-sm:my-5 ">
          My Ideology <br />
        </h1>
        <div
          className="flex items-center justify-center
       relative
       h-[35rem] rounded-2xl w-full max-md:w-90 m-auto p-5 top-11 "
        >
          <BackgroundGradientDemo />
        </div>
      </div>
      <div className=" mt-11 relative top-36">
        <BentoGrid />
      </div>
      <div className=" mt-11 relative top-36">
      <RecentProjects/>
      </div>
      <div className="mt-11 relative top-36">
        <CanvasRevealEffectDemo />
      </div>
      <div className=" mt-11 relative top-36">
        <Reviews />
      </div>
      <div className=" mt-11 relative top-36">
        <Footer />
      </div>
    </main>
  );
};

export default page;
