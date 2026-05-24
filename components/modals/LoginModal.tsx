"use client";
import React, { useState } from "react";
import { Modal } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { closeLoginModal, openLoginModal } from "@/redux/slices/modalSlice";
import { EyeIcon, EyeSlashIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";
const LoginModal = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isOpen = useSelector((state: RootState) => state.modals.loginModalOpen);
  const dispatch: AppDispatch = useDispatch();
  const handleLogin = async () => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const handleGuestLogin = async () => {
    await signInWithEmailAndPassword(auth, "guest@noreply.com", "guest000123456");
  };
  return (
    <>
      <button
        className="w-full h-[48px] md:w-[88px] h-[40px] text-md md:text-sm border border-2 border-gray-100 rounded-full text-white font-bold hover:bg-pink-300 bg-opacity-25 transition"
        onClick={() => dispatch(openLoginModal())}
      >
        Log In
      </button>
      <Modal
        open={isOpen}
        onClose={() => dispatch(closeLoginModal())}
        className="flex justify-center items-center "
      >
        <div className="w-full h-full sm:w-[600px] sm:h-fit bg-white sm:rounded-xl outline-none">
          <XMarkIcon
            className="w-7 mt-5 ms-5 cursor-pointer"
            onClick={() => dispatch(closeLoginModal())}
          />
          <div className="pt-10 pb-20 px-4 sm:px-20">
            <h1 className="text-3xl font-bold mb-10">Log In to Butterfly</h1>
            <div className="w-full space-y-5 mb-10">
              <input
                className="w-full h-[54px] border border-gray-200 outline-none pl-3 rounded-[4px] focus:border-pink-400 transition"
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="w-full h-[54px] border border-gray-200 outline-none rounded-[4px] focus-within:border-pink-400 transition flex items-center overflow-hidden pr-3">
                <input
                  placeholder="Password"
                  type={showPassword ? "text" : "password"}
                  className="w-full h-full px-3  outline-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div
                  onClick={() => setShowPassword(!showPassword)}
                  className="w-7 h-7 text-gray-400 cursor-pointer"
                >
                  {showPassword ? <EyeSlashIcon /> : <EyeIcon />}
                </div>
              </div>
            </div>
            <button
              className="bg-pink-400 text-white h-[48px] rounded-full shadow-md mb-5 w-full"
              onClick={handleLogin}
            >
              Login
            </button>
            <span className="mb-5 text-sm text-center block">Or</span>
            <button className="bg-pink-400 text-white h-[48px] rounded-full shadow-md mb-5 w-full"
            onClick={handleGuestLogin}>
              Log In as Guest
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default LoginModal;
