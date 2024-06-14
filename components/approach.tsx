"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal";

export function CanvasRevealEffectDemo() {
  return (
    <div className=" relative top-40">
    <h1 className=" text-center text-5xl font-extrabold " id="approach"> My Strategy</h1>
      <div className="py-20 flex flex-col lg:flex-row items-center justify-center  dark:bg-black w-full gap-4 mx-auto px-8">
        <Card  title="Initial Step and Design"
         des="Requirement Gathering ,
         Technical Feasibility , Prototyping"
         bgimage='bg-approach-image4 bg-cover bg-center '
          icon={<AceternityIcon order=" Step 1"
            />}>
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card   title="Development"
        des="Set Up Development Environment,
        Frontend Development,
        Backend Development , Database Integration"
        bgimage='bg-approach-image3 bg-cover bg-center '
          icon={<AceternityIcon order="Step 2" />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-white"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          {/* Radial gradient for the cute fade */}
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        <Card   title=" Testing and Deployment"
          icon={<AceternityIcon order="Step 3" />}
          des="Testing,Continuous Integration/Continuous Deployment (CI/CD),Deployment,Choose a cloud service provider
          "  bgimage='bg-approach-image2 bg-cover bg-center '>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>

        <Card   title=" Maintenance and Optimization"
          icon={<AceternityIcon order="Step 4" />}
          des="Monitoring ,Performance Optimization, Security considerations , Feedback Loop."
          bgimage='bg-approach-image1 bg-cover bg-center '
          >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-red-600"
            colors={[[325, 251, 252]]}
          />
        </Card>
      </div>
    </div>
  );
}

const Card = ({
  title,
  icon,
  children,
  des,
  bgimage,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des?:string;
  bgimage?:string
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`border border-white/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]max-w-sm w-full mx-auto p-4 relative h-[27rem] ${bgimage}  `}
      
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-white" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-white" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-white" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-white" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
        <p
          className="text-sm opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 mt-4 group-hover/canvas-card:text-white text-center
         group-hover/canvas-card:-translate-y-2 transition duration-200"
          style={{ color: "#E4ECFF" }}
        >
          {des}
        </p>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
     <div >
      <button className="relative inline-flex overflow-hidden rounded-full p-[1px] ">
        <span
          className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
         bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
        />
        <span
          className="inline-flex h-full w-full cursor-pointer items-center 
        justify-center rounded-full bg-slate-950 px-5 py-2 text-purple backdrop-blur-3xl font-bold text-2xl"
        >
          {order}
        </span>
      </button>
    </div>  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
