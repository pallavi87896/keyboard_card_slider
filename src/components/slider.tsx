
import Cards from "./cards";
import { useEffect,useState } from "react";

type CardsProps={
    isHover:boolean
}
export default function SliderLayout({isHover}:CardsProps){

    const [visible, setVisible] = useState(false);

useEffect(() => {
  
  const timer = setTimeout(() => {
    setVisible(true);
  }, 50);

  return () => clearTimeout(timer);
}, []);

    return(
            <div className={`h-[300px] bg-gray-300 rounded-2xl w-[500px] mx-auto  flex flex-col items-center relative overflow-hidden md:mt-0 md:-left-18 md:-mb-12 md:w-[800px] transition-all -mt-20 duration-700 ease-out ${visible ? "opacity-100 translate-y-0":"opactiy-0 translate-y-20"} `}>
                <div className=" h-[50px] w-full rounded-t-lg bg-gray-200 flex items-center self-start px-4">
                    
                    <div className="w-[15px] h-[15px]  bg-red-500 rounded-full px-2 "></div>
                    <div className="w-[15px] h-[15px]  bg-gray-500 rounded-full px-2 ml-2 "></div>
                    <div className="w-[15px] h-[15px]  bg-green-500 rounded-full px-2 ml-2"></div>
                    
                    
                </div>
                <Cards isHover={isHover}/>
            </div>
    
    )
}