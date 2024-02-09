import Image from "next/image";

const MobileHeader = () => {
  return (
    <div className="block md:hidden p-2 w-full bg-[#F58A43]">
      <Image
        src={"/images/nworx_logo.svg"}
        width={146}
        height={55}
        alt="nworx_logo"
      />
    </div>
  );
};

export default MobileHeader;
