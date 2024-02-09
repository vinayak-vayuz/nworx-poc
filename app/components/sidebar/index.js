import Image from "next/image";

const buttons = [
  { id: 1, label: "Home", icon: "/icons/home.svg" },
  { id: 2, label: "Set Goals", icon: "/icons/organisation.svg" },
  { id: 3, label: "Act on Goals", icon: "/icons/target_orange.svg" },
  { id: 4, label: "Analyse", icon: "/icons/target_white.svg" },
  { id: 5, label: "Dashboard", icon: "/icons/feedback.svg" },
  { id: 6, label: "Tools", icon: "/icons/feedback.svg" },
];

const Sidebar = () => {
  return (
    <div className="hidden md:flex sticky top-0 left-0 w-full md:w-[15%] h-screen bg-[#F58A43] flex-col items-center">
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
                data.label === "Act on Goals" ? "text-[#F58A43]" : "text-white"
              } font-semibold group-hover:text-[#F58A43]`}
            >
              {data.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
