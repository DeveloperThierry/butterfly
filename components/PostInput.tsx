"use client";
import { db } from "@/firebase";
import { closeCommentModal, openLoginModal } from "@/redux/slices/modalSlice";
import { RootState } from "@/redux/store";
import {
  CalendarIcon,
  ChartBarIcon,
  FaceSmileIcon,
  MapPinIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import Image from "next/image";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
interface PostInputProps {
  insideModal?: boolean;
}
const PostInput = ({ insideModal }: PostInputProps) => {
  const [text, setText] = useState("");
  const user = useSelector((state: RootState) => state.user);
  const commentDetails = useSelector(
    (state: RootState) => state.modals.commentPostDetails
  );
  const dispatch = useDispatch();
  const sendPost = async () => {
    if (!user.username) {
      dispatch(openLoginModal());
      return;
    }
    await addDoc(collection(db, "posts"), {
      text: text,
      name: user.name,
      username: user.username,
      timestamp: serverTimestamp(),
      likes: [],
      comments: [],
    });
    setText("");
  };

  const sendComment = async () => {
    if (!user.username) {
      dispatch(openLoginModal());
      return;
    }
    const postRef = doc(db, "posts", commentDetails.id);

    await updateDoc(postRef, {
      comments: arrayUnion({
        name: user.name,
        username: user.username,
        text: text,
      }),
    });
    setText("");
    dispatch(closeCommentModal());
  };
  return (
    <div className="flex space-x-5 p-3">
      <Image
        src={insideModal ? "/assets/user.png" : "/assets/butterfly.png"}
        width={44}
        height={44}
        alt={insideModal ? "Profile Picture" : "butterfly logo"}
        className="w-11 h-11 z-10 bg-white"
      />
      <div className="w-full">
        <textarea
          className="resize-none outline-none w-full min-h-[50px] text-lg"
          placeholder={insideModal ? "Send your reply" : "What's on your mind?"}
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
          <button
            className="bg-pink-400 text-white w-[80px] h-[36px] rounded-full text-sm cursor-pointer disabled:bg-opacity-60"
            onClick={() => (insideModal ? sendComment() : sendPost())}
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
