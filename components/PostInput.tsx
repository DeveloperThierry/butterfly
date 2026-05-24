"use client"
import { db } from "@/firebase";
import { RootState } from "@/redux/store";
import {
  CalendarIcon,
  ChartBarIcon,
  FaceSmileIcon,
  MapPinIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import Image from "next/image";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const PostInput = () => {
  const [text, setText] = useState("")
  const user = useSelector((state:RootState) => state.user)
  const sendPost = async () => {
    await addDoc(collection(db, "posts"), {
        text:text,
        name:user.name,
        username:user.username,
        timestamp:serverTimestamp(),
        likes:[],
        comments:[]
    })
    setText("")
  }
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
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <div className="flex justify-between pt-5">
          <div className="flex space-x-1.5">
            <PhotoIcon className="w-[22px] h-[22px] text-pink-400" />
            <ChartBarIcon className="w-[22px] h-[22px] text-pink-400" />
            <FaceSmileIcon className="w-[22px] h-[22px] text-pink-400" />
            <CalendarIcon className="w-[22px] h-[22px] text-pink-400" />
            <MapPinIcon className="w-[22px] h-[22px] text-pink-400" />
          </div>
          <button className="bg-pink-400 text-white w-[80px] h-[36px] rounded-full text-sm cursor-pointer disabled:bg-opacity-60"
          onClick={sendPost}
          disabled={!text}
          >
            Bubble
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostInput;
