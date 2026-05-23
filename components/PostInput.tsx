import {
  CalendarIcon,
  ChartBarIcon,
  FaceSmileIcon,
  MapPinIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

const PostInput = () => {
  return (
    <div className="flex space-x-5 p-3">
      <Image
        src="/assets/butterfly.png"
        width={44}
        height={44}
        alt="butterfly logo"
        className="w-11 h-11"
      />
      <div className="w-full">
        <textarea
          className="resize-none outline-none w-full min-h-[50px] text-lg"
          placeholder="What's on your mind?"
        />
        <div className="flex justify-between pt-5">
          <div className="flex space-x-1.5">
            <PhotoIcon className="w-[22px] h-[22px] text-pink-400" />
            <ChartBarIcon className="w-[22px] h-[22px] text-pink-400" />
            <FaceSmileIcon className="w-[22px] h-[22px] text-pink-400" />
            <CalendarIcon className="w-[22px] h-[22px] text-pink-400" />
            <MapPinIcon className="w-[22px] h-[22px] text-pink-400" />
          </div>
          <button className="bg-pink-400 text-white w-[80px] h-[36px] rounded-full text-sm cursor-pointer">
            Bubble
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostInput;
