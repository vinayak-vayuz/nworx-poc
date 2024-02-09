"use client";
import Image from "next/image";
import { useState } from "react";
import { Inter } from "next/font/google";
import Sidebar from "./components/sidebar";
import MobileHeader from "./components/header";
import { useRouter } from "next/navigation";

const inter = Inter({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export default function Home() {
  const [getstarted, setGetstarted] = useState(false);
  const [moreclarification, setMoreclarification] = useState(false);
  const router = useRouter();

  function handleGetStarted() {
    setGetstarted(!getstarted);
  }
  return (
    <main
      className={`${inter.className} flex flex-col md:flex-row min-h-screen`}
    >
      {/* Mobile Header */}
      <MobileHeader />
      {/* Sidebar */}
      <Sidebar />
      <div className="w-full md:w-[85%] pl-4 md:pl-10 pr-6 md:pr-20 pb-4 bg-[#F8F8F8]">
        {/* Section Heading */}
        <div className="pt-6 pb-4 flex flex-col md:flex-row justify-between gap-2">
          {/* Back Button */}
          <button
            onClick={() => router.back()}
            className="flex items-center gap-4"
          >
            <Image
              className=""
              src={"/icons/left_arrow.svg"}
              width={14}
              height={14}
              alt="icons"
            />
            <span className="font-medium text-[#2D3648]">Back</span>
          </button>
          {!getstarted ? (
            <>
              <h1 className="font-bold transition-all duration-300 ease-out">
                Review the variable, semi-variable & fixed cost elements of the
                P&L.
              </h1>
              <div className="flex flex-col lg:flex-row items-center gap-2">
                <p className="text-xs whitespace-nowrap">
                  <span className="pr-1 font-bold text-black">15 mins</span>
                  <span className="text-[#000000] opacity-50">remaining</span>
                </p>
                <Image
                  className="hover:text-[#F58A43] group-hover:stroke-[#F58A43]"
                  src={"/icons/progress_bar.svg"}
                  width={112}
                  height={8}
                  alt="progress_bar"
                />
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
        {/* Heading Section */}
        {getstarted ? (
          <>
            {" "}
            <div className="flex justify-between items-center gap-4">
              <div>
                <p className="pb-1 text-xs font-semibold">19 Nov • Monday</p>
                <h1 className="text-2xl font-semibold">
                  Review the variable, semi-variable & fixed cost elements of
                  the P&L.{" "}
                </h1>
                <p>
                  Specifically evaluate opportunity areas where there is
                  headroom vs historical benchmarks, and/or external industry
                  benchmarks.
                </p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <Image
                  className="hover:text-[#F58A43] group-hover:stroke-[#F58A43]"
                  src={"/icons/arrows.svg"}
                  width={16}
                  height={16}
                  alt="arrow"
                />
                <Image
                  className="hover:text-[#F58A43] group-hover:stroke-[#F58A43]"
                  src={"/icons/progress_bar.svg"}
                  width={112}
                  height={8}
                  alt="progress_bar"
                />

                <p className="text-xs whitespace-nowrap">
                  <span className="pr-1 font-bold text-black">15 mins</span>
                  <span className="text-[#000000] opacity-50">remaining</span>
                </p>
                <p className="-mt-1 text-xs whitespace-nowrap">
                  <span className="pr-1 font-bold text-black">5 mins</span>
                  <span className="pr-1 text-[#000000] opacity-50">to</span>
                  <span className="font-bold text-[#2E5DB0]">break</span>
                </p>
              </div>
            </div>{" "}
          </>
        ) : (
          <></>
        )}
        {/* Steps Section */}
        <div
          className={`${
            getstarted ? "fade-in" : "fade-in"
          } pt-4 flex justify-center gap-6`}
        >
          <div className="w-full md:w-[70%] flex flex-col gap-4">
            <div className="p-3 w-full min-h-20 bg-white rounded-xl flex flex-col gap-2">
              <div className="flex justify-between">
                {getstarted ? (
                  <p className="font-semibold text-[13px]">{"STEP 1/3"}</p>
                ) : (
                  <p className="font-semibold text-base text-[#000000] opacity-50">
                    {"STEP 1"}
                  </p>
                )}

                {getstarted ? (
                  <p className="font-semibold text-[15px]">
                    4 Prompts | 5 mins
                  </p>
                ) : (
                  <button
                    className="px-2.5 py-3 rounded-full bg-[#000000] bg-opacity-5"
                    onClick={handleGetStarted}
                  >
                    <Image
                      src={"/icons/arrow_up.svg"}
                      width={14}
                      height={9}
                      alt="icon"
                    />
                  </button>
                )}
              </div>
              <div className="flex justify-between">
                <div>
                  <h1 className="font-bold text-xl">Cost Identification</h1>
                  {getstarted ? (
                    <p className="text-sm">
                      Identify and categorize the various costs influencing
                      margins.
                    </p>
                  ) : (
                    <>
                      <p className="text-sm transition-all duration-300">
                        Identify and categorize the various costs influencing
                        margins. Costs are usually categorized as variable costs
                        (which increase directly with an increase in sales or
                        revenue – for example raw material costs for
                        production), semi-variable costs (which increase with
                        sales too, but not as linearly. For example – manpower
                        costs for some services heavy business) and fixed costs
                        (which are not linked to the volume of
                        products/sales/revenue directly. For example –
                        headquarter administration costs).
                      </p>
                      <button>
                        <Image
                          src={"/icons/from_HBR.svg"}
                          width={65}
                          height={9}
                          alt="icon"
                        />
                      </button>
                      <button className="mt-2 bg-[#DFEBF680] bg-opacity-50 rounded p-2 flex justify-between items-center gap-2">
                        <p className="font-semibold text-[11px] text-[#2E5DB0]">
                          ✨ Need more clarification on the section?
                        </p>
                        <Image
                          src={"/icons/addincircle.svg"}
                          width={13}
                          height={12}
                          alt="icon"
                        />
                      </button>
                      <div className="pt-14">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className="font-semibold text-xs text-black text-opacity-50">
                              Question 1 out of 3
                            </p>
                            <h1 className="font-medium text-lg text-black text-opacity-85">
                              What are the primary components of variable &
                              semi-variable costs impacting gross margins?
                            </h1>
                          </div>
                          <Image
                            src={"/icons/add.svg"}
                            width={17}
                            height={18}
                            alt="icon"
                          />
                        </div>
                      </div>
                    </>
                  )}
                </div>
                {getstarted ? (
                  <div className="px-4 py-6 bg-[#F2F2F2] flex justify-center items-center">
                    <button
                      onClick={handleGetStarted}
                      className="flex justify-center items-center text-[#2E5DB0]"
                    >
                      <span className="font-semibold">Get Started</span>
                      <Image
                        src={"/icons/arrow_right.svg"}
                        width={25}
                        height={24}
                        alt="icon"
                      />
                    </button>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
          <div className="hidden md:flex w-full md:w-[30%] flex-col gap-6">
            <div className="w-full min-h-[20rem] bg-[#000000] opacity-5 rounded-2xl"></div>
            <div className="w-full min-h-[20rem] bg-[#000000] opacity-5 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
