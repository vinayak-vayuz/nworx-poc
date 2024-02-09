import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({
  weight: ["400", "600"],
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
    <main className="flex min-h-screen">
      <div className="w-full md:w-[15%] min-h-screen bg-[#F58A43] flex flex-col items-center">
        <Image
          src={"/images/nworx_logo.svg"}
          width={146}
          height={55}
          alt="nworx_logo"
        />
        <div className="flex flex-col justify-center min-h-[80%]">
          {buttons.map((data, index) => (
            <button key={index} className={`${data.title === "Act on Goals" ? "bg-white" : ""} group hover:bg-white p-2 rounded flex gap-2 mb-3`}>
              <Image className="hover:text-[#F58A43] group-hover:stroke-[#F58A43]" src={data.icon} width={24} height={25} alt="icons" />
              <span className={`${inter.className} font-semibold text-white group-hover:text-[#F58A43]`}>{data.label}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="w-full md:w-[85%]"></div>
    </main>
  );
}
