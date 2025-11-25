import React from "react";
import { cn } from "../lib/utils";
export const Container=({
    children,
    className,
}:{
    children:React.ReactNode;
    className?:string;
})=>{
    return <div className="flex justify-center items-center md:mt-20"> <div className={cn("max-w-7xl  w-full px-6 relative z-10", className)}>{children}</div></div>
};
