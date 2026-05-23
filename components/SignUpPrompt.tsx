import React from 'react'

const SignUpPrompt = () => {
  return (
    <div
    className="fixed w-full h-[80px] bg-pink-400 bottom-0 flex justify-center items-center md:space-x-5 lg:justify-between lg:px-20 xl:px-40 2xl:px-80"
    >
        <div className="hidden md:flex flex-col text-white">
            <span className="text-xl font-bold">Stay fly and don't miss out!</span>
            <span>People on butterfly are always the first to know.</span>
        </div>
        <div className="flex space-x-2 w-full p-3 md:w-fit">
            <button className="w-full h-[48px] md:w-[88px] h-[40px] text-md md:text-sm border border-2 border-gray-100 rounded-full text-white font-bold hover:bg-white bg-opacity-25 transition">Log In</button>
            <button className="w-full h-[48px] md:w-[88px] h-[40px] text-md md:text-sm font-bold bg-white rounded-full">Sign Up</button>
        </div>
    </div>
  )
}

export default SignUpPrompt