import Image from "next/image";
import { Inter } from "next/font/google";
import { FaTwitter } from "react-icons/fa6";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

interface TwitterSidebarButton{
  title : string;
  icon: React.ReactNode;
}



export default function Home() {
  return <div>
    <div className="grid grid-cols-12 h-screen w-screen px-56">
      <div className="border border-red-300 col-span-3 flex justify-start">
        <div className="text-4xl h-fit hover:bg-gray-800 rounded-full p-2 cursor-pointer transition-all">
        <FaTwitter />
        </div>
      </div>
      <div className="col-span-6 border-r-[1px] border-l-[1px] border-gray-500"></div>
      <div className="col-span-3"></div>
    </div>
    </div>
}
