"use client";
import MainImg from "@/../public/main.png";
import StartImg from "@/../public/start.png";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full bg-[#feebd7] items-center justify-center rounded-2xl relative overflow-hidden">
      <Image src={MainImg} className="w-[1920px]" alt="title" />

      {/* 摩天輪遊戲圈圈 */}
      <div className="group absolute top-[25%] left-[27%] w-[12%] h-[20%] rounded-full border-4 border-white bg-white/10 hover:bg-white/20 transition cursor-pointer flex items-center justify-center">
        <Link href="">
          <Image
            src={StartImg}
            alt="start"
            className="w-[100%] opacity-0 group-hover:opacity-100 transition"
          />
        </Link>
      </div>

      {/* 杯子蛋糕遊戲圈圈 */}
      <div className="group absolute top-[30%] w-[12%] h-[20%] rounded-full border-4 border-white bg-white/10 hover:bg-white/20 transition cursor-pointer flex items-center justify-center">
        <Link href="">
          <Image
            src={StartImg}
            alt="start"
            className="w-[100%] opacity-0 group-hover:opacity-100 transition"
          />
        </Link>
      </div>

      {/* 拉霸機遊戲圈圈 */}
      <div className="group absolute top-[26%] left-[70%] w-[12%] h-[20%] rounded-full border-4 border-white bg-white/10 hover:bg-white/20 transition cursor-pointer flex items-center justify-center">
        <Link href="">
          <Image
            src={StartImg}
            alt="start"
            className="w-[100%] opacity-0 group-hover:opacity-100 transition"
          />
        </Link>
      </div>

      {/* 夾娃娃機遊戲圈圈 */}
      <div className="group absolute top-[50%] left-[63%] w-[12%] h-[20%] rounded-full border-4 border-white bg-white/10 hover:bg-white/20 transition cursor-pointer flex items-center justify-center">
        <Link href="">
          <Image
            src={StartImg}
            alt="start"
            className="w-[100%] opacity-0 group-hover:opacity-100 transition"
          />
        </Link>
      </div>

      {/* 公園遊戲圈圈 */}
      <div className="group absolute top-[55%] left-[48%] w-[12%] h-[20%] rounded-full border-4 border-white bg-white/10 hover:bg-white/20 transition cursor-pointer flex items-center justify-center">
        <Link href="">
          <Image
            src={StartImg}
            alt="start"
            className="w-[100%] opacity-0 group-hover:opacity-100 transition"
          />
        </Link>
      </div>

      {/* 旋轉木馬遊戲圈圈 */}
      <div className="group absolute top-[55%] left-[34%] w-[12%] h-[20%] rounded-full border-4 border-white bg-white/10 hover:bg-white/20 transition cursor-pointer flex items-center justify-center">
        <Link href="">
          <Image
            src={StartImg}
            alt="start"
            className="w-[100%] opacity-0 group-hover:opacity-100 transition"
          />
        </Link>
      </div>

      {/* 迷宮遊戲圈圈 */}
      <div className="group absolute top-[52%] left-[20%] w-[12%] h-[20%] rounded-full border-4 border-white bg-white/10 hover:bg-white/20 transition cursor-pointer flex items-center justify-center">
        <Link href="">
          <Image
            src={StartImg}
            alt="start"
            className="w-[100%] opacity-0 group-hover:opacity-100 transition"
          />
        </Link>
      </div>

      {/* 第三個遊戲圈圈 */}
      <div className="group absolute top-[76%] left-[68%] w-[12%] h-[20%] rounded-full border-4 border-white bg-white/10 hover:bg-white/20 transition cursor-pointer flex items-center justify-center">
        <Link href="">
          <Image
            src={StartImg}
            alt="start"
            className="w-[100%] opacity-0 group-hover:opacity-100 transition"
          />
        </Link>
      </div>

      {/* 第三個遊戲圈圈 */}
      <div className="group absolute top-[76%] left-[46%] w-[12%] h-[20%] rounded-full border-4 border-white bg-white/10 hover:bg-white/20 transition cursor-pointer flex items-center justify-center">
        <Link href="">
          <Image
            src={StartImg}
            alt="start"
            className="w-[100%] opacity-0 group-hover:opacity-100 transition"
          />
        </Link>
      </div>

      {/* 第三個遊戲圈圈 */}
      <div className="group absolute top-[76%] left-[28%] w-[12%] h-[20%] rounded-full border-4 border-white bg-white/10 hover:bg-white/20 transition cursor-pointer flex items-center justify-center">
        <Link href="">
          <Image
            src={StartImg}
            alt="start"
            className="w-[100%] opacity-0 group-hover:opacity-100 transition"
          />
        </Link>
      </div>

    </div>
  );
}
