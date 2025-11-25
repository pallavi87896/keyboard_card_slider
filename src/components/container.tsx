import React from "react";
import { cn } from "../lib/utils";

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className="flex justify-center items-center w-full min-h-screen md:-mt-40">
      <div
        className={cn(
          `
            w-full 
            max-w-[95%] sm:max-w-[90%] md:max-w-7xl 
            px-4 sm:px-6 
             md:mt-20 
            relative z-10
          `,
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};
