"use client"
import MainImg from "@/../public/main.png";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full bg-[#feebd7] items-center justify-center rounded-2xl">
      <Image src={MainImg} className="w-[1024px]" alt="title" />
    </div>
  );
}






