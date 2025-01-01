import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React from "react";
import { BsStars } from "react-icons/bs";

export default function Pricing() {
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
    <section className="max-w-screen-lg mx-auto px-5">
      <div className="mt-40">
        <div>
          <h1 className="scroll-m-20 pb-2 text-5xl font-semibold tracking-tight first:mt-0 mb-20 items text-center">
            Choose a Plan for You
          </h1>

          <div className="flex place-content-center max-sm:flex-wrap gap-5">
            <div className="max-w-5xl mx-auto gap-3">
              <div className="w-full max-w-sm items p-16">
                <h1 className="text-4xl font-bold tracking-tight mb-3">
                  Individual
                </h1>
                <div className="flex items-baseline">
                  <span className="text-5xl font-medium tracking-tight">$</span>
                  <span className="text-5xl font-medium tracking-tight">0</span>
                  <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                    /month
                  </span>
                </div>
                <ul role="list" className="space-y-5 my-7">
                  <li className="flex items-center">
                    <Image src="/good.svg" width={25} height={20} alt="mark" />
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-2">
                      1 block/month
                    </span>
                  </li>
                  <li className="flex">
                    <Image src="/good.svg" width={25} height={20} alt="mark" />
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-2">
                      Online forums
                    </span>
                  </li>
                </ul>
                <button
                  type="button"
                  className="text-white bg-[#121212] hover:bg-[#121212] focus:ring-4 focus:outline-none focus:ring-[#121212] dark:bg-[#121212] dark:hover:bg-[#121212] dark:focus:ring-[#121212] font-medium rounded-lg text-xl px-5 py-2.5 inline-flex justify-center w-full text-center"
                >
                  Subscribe now
                </button>
              </div>
            </div>

            <div className="max-w-5xl mx-auto gap-3 bg-gray-950">
              <div className="w-full max-w-sm p-10 items shadow-inner sm:p-16">
                <h1 className="text-4xl font-bold tracking-tight mb-3">
                  Team
                </h1>
                <div className="flex items-baseline">
                  <span className="text-5xl font-medium tracking-tight">$</span>
                  <span className="text-5xl font-medium tracking-tight">8</span>
                  <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                    /seat
                  </span>
                </div>
                <ul role="list" className="space-y-5 my-7">
                  <li className="flex items-center">
                    <Image src="/good.svg" width={25} height={20} alt="mark" />
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-2">
                      Everything in Individual
                    </span>
                  </li>
                  <li className="flex">
                    <Image src="/good.svg" width={25} height={20} alt="mark" />
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-2">
                      Performance dashboard
                    </span>
                  </li>
                </ul>
                <button
                  type="button"
                  className="text-white bg-[#121212] hover:bg-[#121212] focus:ring-4 focus:outline-none focus:ring-[#121212] dark:bg-[#121212] dark:hover:bg-[#121212] dark:focus:ring-[#121212] font-medium rounded-lg text-xl px-5 py-2.5 inline-flex justify-center w-full text-center"
                >
                  Talk to us
                </button>
              </div>
            </div>

            <div className="max-w-5xl mx-auto gap-3">
              <div className="w-full max-w-sm items p-16">
                <h1 className="text-4xl font-bold tracking-tight mb-3">
                  Pro
                </h1>
                <div className="flex items-baseline">
                  <span className="text-5xl font-medium tracking-tight">$</span>
                  <span className="text-5xl font-medium tracking-tight">
                    24
                  </span>
                  <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                    /month
                  </span>
                </div>
                <ul role="list" className="space-y-5 my-7">
                  <li className="flex items-center">
                    <Image src="/good.svg" width={25} height={20} alt="mark" />
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-2">
                      Focus Coach
                    </span>
                  </li>
                  <li className="flex">
                    <Image src="/good.svg" width={25} height={20} alt="mark" />
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-2">
                      Timeblocking
                    </span>
                  </li>
                </ul>
                <button
                  type="button"
                  className="text-white bg-[#121212] hover:bg-[#121212] focus:ring-4 focus:outline-none focus:ring-[#121212] dark:bg-[#121212] dark:hover:bg-[#121212] dark:focus:ring-[#121212] font-medium rounded-lg text-xl px-5 py-2.5 inline-flex justify-center w-full text-center"
                >
                  Subscribe now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid place-items-center mt-20 mb-10 max-lg:gap-10 px-5">
        <div className="flex items-center justify-center gap-1 mb-5">
          <BsStars />
          <BsStars />
          <BsStars />
          <BsStars />
          <BsStars />
        </div>
        <blockquote className="mt-6 border-l-2 pl-6 italic max-w-3xl mb-5 text-center">
          &quot;Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Eligendi repellat rem laborum consectetur, suscipit corrupti
          perferendis inventore magni, modi fugiat explicabo error optio dolor
          minima veritatis voluptatem fugit ea reprehenderit temporibus quis
          odit? Porro explicabo, quis, vero minus reprehenderit adipisci
          provident harum odio ab dolore repudiandae culpa? Voluptas, laborum
          rerum.&quot;
        </blockquote>
        <p>Abdulrahman, software engineer.</p>
      </div>
    </section>
  );
}
