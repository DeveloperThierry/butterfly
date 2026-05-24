"use client";
// import CommentModal from "@/components/modals/CommentModal";
import { PostHeader } from "@/components/Post";
// import PostFeed from "@/components/PostFeed";
import Sidebar from "@/components/Sidebar";
import SignUpPrompt from "@/components/SignUpPrompt";
import Widgets from "@/components/Widgets";
import { db } from "@/firebase";
// import { RootState } from "@/redux/store";
import {
  ArrowLeftIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/16/solid";
import {
  ArrowUpTrayIcon,
  ChartBarIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import {
  arrayRemove,
  arrayUnion,
  doc,
  DocumentData,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const fetchPost = async (id: string) => {
  const postRef = doc(db, "posts", id);
  const postSnap = getDoc(postRef);
  return (await postSnap).data();
};
interface PostDetailProps {
  params: {
    id: string;
  };
}

interface CommentProps {
  name: string;
  text: string;
  username: string;
}
const PostDetail = async ({ params }: PostDetailProps) => {
  const { id } = params;
  const post = await fetchPost(id);
  return (
    <>
      <div className="text-[#0F1419] min-h-screen max-w-[1400px] mx-auto flex justify-center">
        <Sidebar />
        <div className="flex-grow max-w-2xl">
          <div className="py-4 px-3 text-lg sm:text-xl sticky top-0 z-50 bg-white bg-opacity-80 backdrop-blur-sm font-bold flex items-center">
            <Link href="/">
              <ArrowLeftIcon className="w-5 h-5 mr-10" />
            </Link>
            Butterfly
          </div>
          <div className="flex flex-col p-3 space-y-5">
            <div className="flex justify-between items-center mb-1.5">
              <div className="flex space-x-3">
                <Image
                  src={"/assets/user.png"}
                  width={44}
                  height={44}
                  alt={"Profile Picture"}
                  className="w-11 h-11"
                />
                <div className="flex flex-col text-[15px]">
                  <span className="font-bold inline-block whitespace-nowrap overflow-hidden text-ellipsis max-w-[60px] min-[400px]:max-w-[100px] min-[500px]:max-w-[140px] sm:max-w-[160px]">
                    {post?.name}
                  </span>
                  <span className="text-[#707E89] inline-block whitespace-nowrap overflow-hidden text-ellipsis max-w-[60px] min-[400px]:max-w-[100px] min-[500px]:max-w-[140px] sm:max-w-[160px]">
                    {post?.username}
                  </span>
                </div>
              </div>
              <EllipsisHorizontalIcon className="w-5 h-5" />
            </div>
            <span className="text-[15px]">{post?.text}</span>
          </div>

          <div className="p-3 text-[15px]">
            <span className="font-bold">{post?.likes.length}</span> likes
          </div>

          <div className="p-3 text-[15px] flex justify-evenly">
            <ChatBubbleOvalLeftEllipsisIcon className="w-[22px] h-{22px] text-[#707E89] cursor-not-allowed" />
            <HeartIcon className="w-[22px] h-{22px] text-[#707E89] cursor-not-allowed" />
            <ChartBarIcon className="w-[22px] h-{22px] text-[#707E89] cursor-not-allowed" />
            <ArrowUpTrayIcon className="w-[22px] h-{22px] text-[#707E89] cursor-not-allowed" />
          </div>

          {post?.comments.map((comment: CommentProps, i: React.Key) => (
            <Comment
              key={i}
              name={comment.name}
              text={comment.text}
              username={comment.username}
            />
          ))}
        </div>
        <Widgets />
      </div>

      <SignUpPrompt />
    </>
  );
};

const Comment = ({ name, username, text }: CommentProps) => {
  return (
    <div>
      <PostHeader name={name} username={username} text={text} />
      <div className="flex space-x-14 p-3 ml-6">
        <ChatBubbleOvalLeftEllipsisIcon className="w-[22px] h-{22px] text-[#707E89] cursor-not-allowed" />
        <HeartIcon className="w-[22px] h-{22px] text-[#707E89] cursor-not-allowed" />
        <ChartBarIcon className="w-[22px] h-{22px] text-[#707E89] cursor-not-allowed" />
        <ArrowUpTrayIcon className="w-[22px] h-{22px] text-[#707E89] cursor-not-allowed" />
      </div>
    </div>
  );
};

export default PostDetail;
