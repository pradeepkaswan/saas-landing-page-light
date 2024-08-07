import { dm_sans } from "@/app/fonts";
import ArrowRight from "@/assets/svgs/arrow-right.svg";
import { twMerge } from "tailwind-merge";
import cogImage from "@/assets/images/cog.png";
import cylinderImage from "@/assets/images/cylinder.png";
import noodleImage from "@/assets/images/noodle.png";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section className="pt-8 pb-20 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip | md:pt-5 md:pb-10">
      <div className="container">
        <div className="items-center | md:flex">
          <div className="md:max-w-[524px]">
            <div className="text-sm font-medium inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">
              Version 2.0 is here
            </div>
            <h1
              className={twMerge(
                dm_sans.className,
                "text-5xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6 | md:text-[90px] md:leading-[90px]"
              )}>
              Pathway to productivity
            </h1>
            <p className="text-[22px] leading-[31px] text-[#010D3E] tracking-tight mt-6">
              Celebrate the joy of accomplishment with an app designed to track your progress,
              motivate your efforts, and celebrate your successes.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary">Get for free</button>
              <button className="btn btn-text gap-1">
                <span>Learn more</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="mt-20 relative | md:mt-0 md:h-[648px] md:flex-1">
            <Image
              src={cogImage}
              alt="cog"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
            />
            <Image
              src={cylinderImage}
              alt="cylinder"
              width={220}
              className="hidden | md:block -top-8 -left-32 md:absolute"
            />
            <Image
              src={noodleImage}
              alt="noodle"
              width={220}
              height={220}
              className="hidden absolute top-[524px] left-[448px] rotate-[30deg] | lg:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
