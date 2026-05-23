"use client"
import React from 'react'
import SignUpModal from './modals/SignUpModal'
import LoginModal from './modals/LoginModal'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'

const SignUpPrompt = () => {
  const name = useSelector((state:RootState) => state.user.name)
  console.log(name)
  return (
    !name && <div
    className="fixed w-full h-[80px] bg-pink-400 bottom-0 flex justify-center items-center md:space-x-5 lg:justify-between lg:px-20 xl:px-40 2xl:px-80"
    >
        <div className="hidden md:flex flex-col text-white">
            <span className="text-xl font-bold">Stay fly and don't miss out!</span>
            <span>People on butterfly are always the first to know.</span>
        </div>
        <div className="flex space-x-2 w-full p-3 md:w-fit">
            <LoginModal/>
            <SignUpModal/>
        </div>
    </div>
  )
}

export default SignUpPrompt