import { db } from "@/firebase";
import { openComentnModal, openLoginModal, setCommentDetails } from "@/redux/slices/modalSlice";
import { RootState } from "@/redux/store";
import {
  ArrowUpTrayIcon,
  ChartBarIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolidIcon } from "@heroicons/react/24/solid";
import {
  arrayRemove,
  arrayUnion,
  doc,
  DocumentData,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Moment from "react-moment";
import { useDispatch, useSelector } from "react-redux";
interface PostProps {
  data: DocumentData;
  id: string;
}
const Post = ({ data, id }: PostProps) => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  const likePost = async () => {
    if(!user.username){
      dispatch(openLoginModal())
      return
    }

    const postRef = doc(db, "posts", id);

    if (data.likes.includes(user.uid)) {
      await updateDoc(postRef, {
        likes: arrayRemove(user.uid),
      });
    } else {
      await updateDoc(postRef, {
        likes: arrayUnion(user.uid),
      });
    }
  };
  return (
    <div>
      <Link href={"/" + id}>
        <PostHeader
          name={data.name}
          username={data.username}
          timestamp={data.timestamp}
          text={data.text}
        />
      </Link>
      <div className="ml-16 p-5 flex space-x-14">
        <div className="relative">
          <ChatBubbleOvalLeftEllipsisIcon
            className="w-[22px] h-[22px] cursor-pointer hover:text-pink-400 transition"
            onClick={() => {
              if(!user.username){
                dispatch(openLoginModal())
                return
              }
              dispatch(
                setCommentDetails({
                  name: data.name,
                  username: data.username,
                  id: id,
                  text: data.text,
                })
              );
              dispatch(openComentnModal());
            }}
          />
          {data.comments.length > 0 && (
            <span className="absolute text-xs top-1 -right-3">
              {data.comments.length}
            </span>
          )}
        </div>
        <div className="relative">
          {data.likes.includes(user.uid) ? (
            <HeartSolidIcon
              className="w-[22px] h-[22px] cursor-pointer text-[#f998f3] transition"
              onClick={likePost}
            />
          ) : (
            <HeartIcon
              className="w-[22px] h-[22px] cursor-pointer hover:text-[#f998f3] transition"
              onClick={likePost}
            />
          )}
          {data.likes.length > 0 && (
            <span className="absolute text-xs top-1 -right-3">
              {data.likes.length}
            </span>
          )}
        </div>
        <div className="relative">
          <ChartBarIcon className="w-[22px] h-[22px] cursor-not-allowed" />
          {/* <span className="absolute text-xs top-1 -right-3">2</span> */}
        </div>
        <div className="relative">
          <ArrowUpTrayIcon className="w-[22px] h-[22px] cursor-not-allowed" />
          {/* <span className="absolute text-xs top-1 -right-3">2</span> */}
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
  replyTo?: string;
}
export const PostHeader = ({
  username,
  name,
  timestamp,
  text,
  replyTo,
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
        {replyTo && (
          <span className="text-[15px] text-[#707E89]">
            Replying to <span className="text-pink-400">@{replyTo}</span>
          </span>
        )}
      </div>
    </div>
  );
};

export default Post;
