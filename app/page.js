import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

const buttons = [
  { id: 1, label: "Home", icon: "/icons/home.svg" },
  { id: 2, label: "Set Goals", icon: "/icons/organisation.svg" },
  { id: 3, label: "Act on Goals", icon: "/icons/target_orange.svg" },
  { id: 4, label: "Analyse", icon: "/icons/target_white.svg" },
  { id: 5, label: "Dashboard", icon: "/icons/feedback.svg" },
  { id: 6, label: "Tools", icon: "/icons/feedback.svg" },
];

export default function Home() {
  return (
    <main className={`${inter.className} flex min-h-screen`}>
      <div className="w-full md:w-[15%] h-screen bg-[#F58A43] flex flex-col items-center">
        <Image
          src={"/images/nworx_logo.svg"}
          width={146}
          height={55}
          alt="nworx_logo"
        />
        <div className="flex flex-col justify-center min-h-[80%]">
          {buttons.map((data, index) => (
            <button
              key={index}
              className={`${
                data.label === "Act on Goals" ? "bg-white" : ""
              } group hover:bg-white p-2 rounded flex gap-2 mb-3`}
            >
              <Image
                className="hover:text-[#F58A43] group-hover:stroke-[#F58A43]"
                src={data.icon}
                width={24}
                height={25}
                alt="icons"
              />
              <span
                className={`${
                  data.label === "Act on Goals" ? "text-[#F58A43]" : ""
                } font-semibold text-white group-hover:text-[#F58A43]`}
              >
                {data.label}
              </span>
            </button>
          ))}
        </div>
      </div>
      <div className="w-full md:w-[85%] pl-10 pr-20 pb-4 bg-[#F8F8F8]">
        {/* Back Button */}
        <button className="pt-6 pb-4 flex justify-center items-center gap-4">
          <Image
            className=""
            src={"/icons/left_arrow.svg"}
            width={14}
            height={14}
            alt="icons"
          />
          <span className="font-medium text-[#2D3648]">Back</span>
        </button>
        {/* Heading Section */}
        <div className="flex justify-between items-center gap-4">
          <div>
            <p className="pb-1 text-xs font-semibold">19 Nov • Monday</p>
            <h1 className="text-2xl font-semibold">
              Review the variable, semi-variable & fixed cost elements of the
              P&L.{" "}
            </h1>
            <p>
              Specifically evaluate opportunity areas where there is headroom vs
              historical benchmarks, and/or external industry benchmarks.
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
              alt="arrow"
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
        </div>
        {/* Steps Section */}
        <div className="pt-4 flex justify-center gap-6">
          <div className="w-full md:w-[70%] flex flex-col gap-4">
            <div className="p-3 w-full min-h-20 bg-white rounded-xl flex flex-col gap-2">
              <div className="flex justify-between">
                <p className="font-semibold text-[13px]">STEP 1/3</p>
                <p className="font-semibold text-[15px]">4 Prompts | 5 mins</p>
              </div>
              <div className="flex justify-between">
                <div>
                  <h1 className="font-bold text-xl">Cost Identification</h1>
                  <p className="text-sm">
                    Identify and categorize the various costs influencing
                    margins.
                  </p>
                </div>
                <div className="px-4 py-6 bg-[#F2F2F2] flex justify-center items-center">
                  <button className="flex justify-center items-center text-[#2E5DB0]">
                    <span className="font-semibold">Get Started</span>
                    <Image
                      src={"/icons/arrow_right.svg"}
                      width={25}
                      height={24}
                      alt="icon"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[30%] flex flex-col gap-6">
            <div className="w-full min-h-[20rem] bg-[#000000] opacity-5 rounded-2xl"></div>
            <div className="w-full min-h-[20rem] bg-[#000000] opacity-5 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
