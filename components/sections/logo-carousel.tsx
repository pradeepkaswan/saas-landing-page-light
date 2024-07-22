import acmeLogo from "@/assets/images/logo-acme.png";
import quantumLogo from "@/assets/images/logo-quantum.png";
import echoLogo from "@/assets/images/logo-echo.png";
import celestialLogo from "@/assets/images/logo-celestial.png";
import pulseLogo from "@/assets/images/logo-pulse.png";
import apexLogo from "@/assets/images/logo-apex.png";
import Image from "next/image";

const LogoCarousel: React.FC = () => {
  return (
    <div className="py-8 bg-white | md:py-12">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <div className="flex gap-14 flex-none">
            <Image src={acmeLogo} alt="Acme Logo" className="logo-carousel-image" />
            <Image src={quantumLogo} alt="Quantum Logo" className="logo-carousel-image" />
            <Image src={echoLogo} alt="Echo Logo" className="logo-carousel-image" />
            <Image src={celestialLogo} alt="Celestial Logo" className="logo-carousel-image" />
            <Image src={pulseLogo} alt="Pulse Logo" className="logo-carousel-image" />
            <Image src={apexLogo} alt="Apex Logo" className="logo-carousel-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;
