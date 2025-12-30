import { ArrowUpRight, CircleArrowOutUpLeft, CircleArrowOutUpRight } from "lucide-react";
import React from "react";

const Card = ({ title, text }) => {
  return (
    <div className="border border-gray-800 py-5 rounded-2xl">
        <div className="p-5">
      <h1 className="font-bold">{title}</h1>
      <p className="text-sm my-2 text-gray-400">{text}</p>
      </div>
      <div className="flex items-center justify-between border-t border-gray-800 pt-5 px-5 text-sm text-gray-300 cursor-pointer">
        <p className="">Read Article</p>
        <CircleArrowOutUpRight size={15}/>
      </div>
    </div>
  );
};

export default Card;
