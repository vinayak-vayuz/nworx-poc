const BackButton = ({children}) => {
  return (
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
  );
};

export default BackButton;
