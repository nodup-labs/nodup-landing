import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <Image src={"/icon/logoNodup.svg"} alt="logo" width={150} height={150} />
    </div>
  );
};

export default Logo;
