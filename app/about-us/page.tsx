"use client";
import FAQ1 from "../(app)/components/FAQ1";
import HeaderAboutUs from "./components/headeraboutus";
import HowNodupWork from "./components/hownodupwork";
import OurMission from "./components/ourmission";
import OurTeam from "./components/ourteam";
import OurValue from "./components/OurValue";

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 ">
      <HeaderAboutUs />
      {/* How NOdup Work */}
      <HowNodupWork />
      {/* Our Value */}
      <OurValue />
      {/* Our Mission */}
      <OurMission />
      {/* Our Team */}
      <OurTeam />
      {/* FAQ */}
      <FAQ1 />
    </div>
  );
};

export default AboutUs;
