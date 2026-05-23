"use client";
import React from "react";
import Image from "next/image";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase";
import { useDispatch, useSelector } from "react-redux";
import { signOutUser } from "@/redux/slices/userSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { closeLoginModal, closeSignUpModal } from "@/redux/slices/modalSlice";

const SidebarUserInfo = () => {
  const dispatch: AppDispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const handleSignOut = async () => {
    await signOut(auth);
    dispatch(signOutUser());
    dispatch(closeLoginModal())
    dispatch(closeSignUpModal())
  };
  return (
    <div
      className="absolute bottom-3 flex items-center justify-start space-x-2 hover:bg-gray-500 hover:bg-opacity-10 xl:p-3 xl:pr-6 rounded-full transition cursor-pointer w-fit xl:w-[240px]"
      onClick={handleSignOut}
    >
      <Image
        src={"/assets/user.png"}
        width={36}
        height={36}
        alt="Profile Picture"
        className="w-9 h-9"
      />
      <div className="hidden xl:flex flex-col text-sm max-w-40">
        <span className="whitespace-nowrap text-ellipsis overflow-hidden font-bold">{user.name}</span>
        <span className="whitespace-nowrap text-ellipsis overflow-hidden text-gray-500">@{user.username}</span>
      </div>
    </div>
  );
};

export default SidebarUserInfo;
