import { openComentnModal } from "@/redux/slices/modalSlice";
import {
  ArrowUpCircleIcon,
  ChartBarIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import { DocumentData, Timestamp } from "firebase/firestore";
import Image from "next/image";
import React from "react";
import Moment from "react-moment";
import { useDispatch } from "react-redux";
interface PostProps {
  data: DocumentData;
}
const Post = ({ data }: PostProps) => {
  const dispatch = useDispatch();
  return (
    <div>
      <PostHeader
        name={data.name}
        username={data.username}
        timestamp={data.timestamp}
        text={data.text}
      />
      <div className="ml-16 p-5 flex space-x-14">
        <div className="relative">
          <ChatBubbleOvalLeftEllipsisIcon
            className="w-[22px] h-[22px] cursor-pointer hover:text-pink-400 transition"
            onClick={() => dispatch(openComentnModal())}
          />
          <span className="absolute text-xs top-1 -right-3">2</span>
        </div>
        <div className="relative">
          <HeartIcon className="w-[22px] h-[22px] cursor-pointer hover:text-[#f998f3] transition" />
          <span className="absolute text-xs top-1 -right-3">2</span>
        </div>
        <div className="relative">
          <ChartBarIcon className="w-[22px] h-[22px] cursor-not-allowed" />
          <span className="absolute text-xs top-1 -right-3">2</span>
        </div>
        <div className="relative">
          <ArrowUpCircleIcon className="w-[22px] h-[22px] cursor-not-allowed" />
          <span className="absolute text-xs top-1 -right-3">2</span>
        </div>
      </div>
    </div>
  );
};
interface PostHeaderProps {
  username: string;
  name: string;
  timestamp?: Timestamp;
  text: string;
  replyTo?:string
}
export const PostHeader = ({
  username,
  name,
  timestamp,
  text,
  replyTo
}: PostHeaderProps) => {
  return (
    <div className="flex p-3 space-x-5">
      <Image
        src="/assets/user.png"
        width={44}
        height={44}
        alt="profile picture"
        className="w-12 h-12 z-10 bg-white"
      />

      <div className="text-[15px] flex flex-col space-y-1.5">
        <div className="flex space-x-1.5 text-[#979595]">
          <span className="font-bold text-[#1d1d1d] inline-block whitespace-nowrap overflow-hidden text-ellipsis max-w-[60px] min-[400px]:max-w-[100px] min-[500px]:max-w-[140px] sm:max-w-[160px]">
            {name}
          </span>
          <span className="inline-block whitespace-nowrap overflow-hidden text-ellipsis max-w-[60px] min-[400px]:max-w-[100px] min-[500px]:max-w-[140px] sm:max-w-[160px]">
            @{username}
          </span>
          {timestamp && (
            <>
              <span> · </span>
              <Moment fromNow>{timestamp.toDate()}</Moment>
            </>
          )}
        </div>
        <span>{text}</span>
       {replyTo && <span className="text-[15px] text-[#707E89]">
          Replying to <span className="text-pink-400">@{replyTo}</span>
        </span>}
      </div>
    </div>
  );
};

export default Post;
