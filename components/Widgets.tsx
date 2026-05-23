import {
  EllipsisHorizontalIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

const Widgets = () => {
  return (
    <div className="p-3 hidden lg:flex flex-col space-y-4 w-[400px] pl-10">
      <div className="bg-[#EFF3F4] text-[#899590] h-[44px] flex items-center space-x-3 rounded-full pl-5">
        <MagnifyingGlassIcon className="w-[20px] h-[20px]" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none"
        />
      </div>
      <div className="bg-[#EFF3F4] rounded-xl p-3">
        <h1 className="font-bold text-xl">What's happening?</h1>
        <div className="flex flex-col py-3 space-y-0.5 ">
          <div className="flex justify-between text-[#536471] text-[13px]">
            <span>Trending in United States</span>
            <EllipsisHorizontalIcon className="w-[20px] " />
          </div>
          <span className="font-bold text-sm">ReactJS</span>
          <span className=" text-[#536471] text-xs">240K Bubbles</span>
        </div>
        <div className="flex flex-col py-3 space-y-0.5 ">
          <div className="flex justify-between text-[#536471] text-[13px]">
            <span>Trending in United States</span>
            <EllipsisHorizontalIcon className="w-[20px] " />
          </div>
          <span className="font-bold text-sm">ReactJS</span>
          <span className=" text-[#536471] text-xs">240K Bubbles</span>
        </div>
        <div className="flex flex-col py-3 space-y-0.5 ">
          <div className="flex justify-between text-[#536471] text-[13px]">
            <span>Trending in United States</span>
            <EllipsisHorizontalIcon className="w-[20px] " />
          </div>
          <span className="font-bold text-sm">ReactJS</span>
          <span className=" text-[#536471] text-xs">240K Bubbles</span>
        </div>
        <div className="flex flex-col py-3 space-y-0.5 ">
          <div className="flex justify-between text-[#536471] text-[13px]">
            <span>Trending in United States</span>
            <EllipsisHorizontalIcon className="w-[20px] " />
          </div>
          <span className="font-bold text-sm">ReactJS</span>
          <span className=" text-[#536471] text-xs">240K Bubbles</span>
        </div>
      </div>
      <div className="bg-[#EFF3F4] rounded-xl p-3">
        <h1 className="font-bold text-xl">Who to follow</h1>
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center space-x-3">
            {/* joe, eric, ally */}
            <Image
              src={"/assets/joe.jpg"}
              width={56}
              height={56}
              alt={`Profile picture of joe`}
              className="w-14 h-14 rounded-full"
            />
            <div className="flex flex-col text-sm">
              <span className="font-bold">Joe Johnson</span>
              <span>@jjohnson103</span>
            </div>
          </div>
          <button className="bg-[#0F1419] text-white w-[72px] h-[40px] rounded-full text-sm">
            Follow
          </button>
        </div>
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center space-x-3">
            {/* joe, eric, ally */}
            <Image
              src={"/assets/joe.jpg"}
              width={56}
              height={56}
              alt={`Profile picture of joe`}
              className="w-14 h-14 rounded-full"
            />
            <div className="flex flex-col text-sm">
              <span className="font-bold">Joe Johnson</span>
              <span>@jjohnson103</span>
            </div>
          </div>
          <button className="bg-[#0F1419] text-white w-[72px] h-[40px] rounded-full text-sm">
            Follow
          </button>
        </div>
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center space-x-3">
            {/* joe, eric, ally */}
            <Image
              src={"/assets/joe.jpg"}
              width={56}
              height={56}
              alt={`Profile picture of joe`}
              className="w-14 h-14 rounded-full"
            />
            <div className="flex flex-col text-sm">
              <span className="font-bold">Joe Johnson</span>
              <span>@jjohnson103</span>
            </div>
          </div>
          <button className="bg-[#0F1419] text-white w-[72px] h-[40px] rounded-full text-sm">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
};

export default Widgets;
