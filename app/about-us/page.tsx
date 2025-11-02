import HeaderAboutUs from "./components/headeraboutus";
import HowNodupWork from "./components/hownodupwork";
import OurValue from "./components/OurValue";

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 ">
      <HeaderAboutUs />
      {/* How NOdup Work */}
      <HowNodupWork />
      {/* Our Value */}
      <OurValue />
    </div>
  );
};

export default AboutUs;
