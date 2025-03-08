"use client";
import { useRef, useState } from "react";
import { Sectionheader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from '../../public/assets/icons/star.svg';
import Image from "next/image";
import JavascriptIcon from '../../public/assets/icons/square-js.svg';
import ReactIcon from '../../public/assets/icons/react.svg';
import HtmlIcon from '../../public/assets/icons/html5.svg';
import CssIcon from '../../public/assets/icons/css3.svg';
import FigmaIcon from '../../public/assets/icons/figma.svg';
import mapImage from '../../public/assets/images/map.png';
import smileMemoji from '../../public/assets/images/memoji-smile.png';
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from 'framer-motion';
import GitHubStats from "@/components/GithubStats";

const toolboxItems = [
  {
    title: "Frontend",
    iconType: ReactIcon,
  },
  {
    title: "HTML",
    iconType: HtmlIcon,
  },
  {
    title: "CSS",
    iconType: CssIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
];

const hobbies = [
  {
    title: "Travel",
    emoji: "🌍",
    left: "60%",
    top: "55%",
  },
  {
    title: "Photography",
    emoji: "📸",
    left: "50%",
    top: "75%",
  },
  {
    title: "Music",
    emoji: "🎵",
    left: "10%",
    top: "35%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "35%",
    top: "40%",
  },
  {
    title: "Cricket",
    emoji: "🏏",
    left: "5%",
    top: "65%",
  },
];

export const AboutSection = () => {
  const constraintsRef = useRef(null);
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(' adrian@jsmastery.pro');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <div className="py-20">
      <div className="container">
        <Sectionheader
          eyebrow="About me"
          title="A Glimpse into my world"
          description="Learn more about who I am, what I do, and about me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="md:grid md:grid-cols-5 md:gap-8 lg:grid-cols-5 lg:grid-rows-2 md:grid-rows-2 -mb-8">
            <Card className="  p-0 relative md:col-span-3 lg:col-span-3 lg:row-span-2 md:row-span-2 sm:mb-8">
              <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[264px] h-fit object-contain mt-6" />
              <div className="p-4 sm:p-4">
                <p className="text-xl  mb-2 text-white-300 font-serif">Hi, I'm Adrian Hajdin</p>
                <p className="text-base font-sans">
                  With 12 years of experience, I have honed my skills in both frontend and backend dev, creating dynamic
                  and responsive websites. 
                </p>
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2  lg:col-span-2 lg:row-span-1 md:row-span-1 sm:mb-8">
              <Image src={mapImage} alt="map" className="h-full w-full object-cover object-left-top" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after-outline after-outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <Image src={smileMemoji} alt="smile" className="size-20" />
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative  md:col-span-2  lg:col-span-2 lg:row-span-1 md:row-span-1 ">
              <GitHubStats/>
            </Card>
          </div>
          <div className="md:grid md:grid-cols-5 md:gap-8 lg:grid-cols-5 -mb-8">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-3 mb-8">
              <div className="px-6 py-6">
                <div className="flex flex-col">
                  <div className="inline-flex items-center gap-2">
                    <StarIcon className="size-9 text-emerald-300" />
                    <h3 className="font-serif text-3xl">Beyond the code</h3>
                  </div>
                  <p className="text-sm lg:text-base max-w-xs text-white/60 mt-2">Explore my interests and hobbies beyond the digital realm.</p>
                </div>
                <div className="" ref={constraintsRef}>
                  {hobbies.map((hobby) => (
                    <motion.div
                      key={hobby.title}
                      className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                      style={{ left: hobby.left, top: hobby.top }}
                      drag
                      dragConstraints={constraintsRef}
                    >
                      <span>{hobby.emoji}</span>
                      <span className="font-medium text-gray-950">{hobby.title}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-2 sm:mb-8">
              <img
                src="assets/grid4.png"
                alt="grid-4"
                className="w-full md:h-[184px] sm:h-[276px] h-fit object-cover sm:object-top"
              />
              <div className="space-y-2">
                <p className="lg:mt-6 md:mt-2 font-sans text-center -mt-12">Contact me</p>
                <div className="cursor-pointer flex justify-center items-center gap-2" onClick={handleCopy}>
                  <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                  <p className="lg:text-xl md:text-xs font-medium text-gray_gradient text-white">siddarthakarumuri003@gmail.com</p>
                </div>
              </div>
            </Card>
          </div>
          <div className="md:grid md:grid-cols-5 md:gap-8 lg:grid-cols-5">
            <Card className="h-[320px] md:col-span-5 lg:col-span-5">
              <div className="px-6 pt-4">
                <div className="flex flex-col ">
                  <div className="inline-flex items-center gap-2">
                    <StarIcon className="size-9 text-emerald-300" />
                    <h3 className="font-serif text-3xl">My tool box</h3>
                  </div>
                  <p className="text-sm lg:text-base max-w-xs text-white/60 mt-2">Explore the technologies and tools I use to craft.</p>
                </div>
                <ToolboxItems toolboxItems={toolboxItems} className="" itemsWrapperClassName="animate-move-left [animation-duration:30s]" />
                <ToolboxItems toolboxItems={toolboxItems} className="mt-6" itemsWrapperClassName="animate-move-right [animation-duration:30s]" />
              </div>
            </Card>
          </div>

          
        </div>
      </div>
    </div>
  );
};
