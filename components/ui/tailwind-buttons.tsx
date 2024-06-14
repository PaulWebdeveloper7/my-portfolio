"use client";
import React from "react";
import { IconClipboard } from "@tabler/icons-react";
import { cn } from "@/utils/cn";

export const ButtonsCard = ({
  className,
  title , 
  icon , 
  onClick,
}: {
  children?: React.ReactNode;
  className?: string;
  icon?:React.ReactNode ;
  title:string;
  onClick?: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "  rounded-xl border border-neutral-100 dark:bg-black dark:border-white/[0.2] hover:border-neutral-200 group/btn overflow-hidden relative flex items-center justify-center p-3 mt-10",
        className
      )}
    >
      <div className="absolute inset-0 dark:bg-dot-white/[0.1] bg-dot-black/[0.1] flex gap-8" />
      <div className="relative z-40">{title  }</div>
      <div >{icon}</div>
    </div>
  );
};
