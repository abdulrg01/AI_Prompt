import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React from "react";
import { BsLinkedin, BsTwitterX } from "react-icons/bs";
import { FaArrowUp } from "react-icons/fa6";
import { RiStarSFill } from "react-icons/ri";

export default function Footer() {
  useGSAP(() => {
    gsap.fromTo(
      ".items",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        delay: 1,
        stagger: 0.2,
      }
    );
  }, []);

  return (
    <footer className="flex items-center justify-center bg-gray-950">
      <div className="rounded-t-2xl px-3 pt-20 w-full">
        <div className="flex flex-col items-center justify-center">
          <h1 className="scroll-m-20 pb-2 text-5xl font-semibold tracking-tight first:mt-0 max-w-lg text-center mb-8 items">
            Get to know your tracing beam
          </h1>

          <button
            type="button"
            className="border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-xs px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 me-2 mb-2"
          >
            REVIEW MEMBERSHIP OPTION
            <FaArrowUp className="w-4 h-3 me-2 ms-1" />
          </button>

          <div className="flex items-center gap-1 -space-x-4 rtl:space-x-reverse mt-3 items">
            <div className="flex -space-x-4 rtl:space-x-reverse">
              <Image
                src="/profile1.jpg"
                alt="home"
                width={25}
                height={25}
                className="border-2 border-white rounded-full dark:border-gray-800"
              />
              <Image
                src="/profile2.jpg"
                alt="home"
                width={25}
                height={25}
                className="border-2 border-white rounded-full dark:border-gray-800"
              />
              <Image
                src="/profile3.jpg"
                alt="home"
                width={25}
                height={25}
                className="border-2 border-white rounded-full dark:border-gray-800"
              />
              <Image
                src="/profile5.jpg"
                alt="home"
                width={25}
                height={25}
                className="border-2 border-white rounded-full dark:border-gray-800"
              />
            </div>
            <div className="pl-5 mt-2 text-sm flex flex-col items-start gap-1">
              <div className="flex items-start justify-center gap-1">
                <RiStarSFill className="text-[#E1B037] rounded-full" />
                <RiStarSFill className="text-[#E1B037] rounded-full" />
                <RiStarSFill className="text-[#E1B037] rounded-full" />
                <RiStarSFill className="text-[#E1B037] rounded-full" />
                <RiStarSFill className="text-[#E1B037] rounded-full" />
              </div>
              <p className="text-xs">
                5000k+ People already trusted us
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-screen-xl mx-auto flex items-center justify-between mt-20 border-gray-500 pb-3">
          <p className="font-sans font-semibold text-sm">
            c 2024 - Tech book club
          </p>
          <div className="flex items-center gap-2">
            <BsLinkedin />
            <BsTwitterX />
          </div>
        </div>
      </div>
    </footer>
  );
}
