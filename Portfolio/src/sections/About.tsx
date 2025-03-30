"use client";
import { useRef, useState } from "react";
import { Sectionheader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from '../../public/assets/icons/star.svg';
import Image from "next/image";
import mapImage from '../../public/assets/map1.png';
import smileMemoji from '../../public/assets/images/memoji-smile.png';
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from 'framer-motion';
import GitHubStats from "@/components/GithubStats";
import HtmlIcon from '../../public/assets/icons/html5.svg';
import CssIcon from '../../public/assets/icons/css3.svg';
import JavascriptIcon from '../../public/assets/icons/square-js.svg';
import phpIcon from '../../public/assets/icons/php.svg';
import mysqlIcon from '../../public/assets/icons/mysql-logo.svg';
import ReactIcon from '../../public/assets/icons/react.svg';
import expressIcon from '../../public/assets/icons/icons8-express-js.svg';
import nodeIcon from '../../public/assets/icons/icons8-node-js.svg';
import mongodbIcon from '../../public/assets/icons/mongodb.svg';
import nextjsIcon from '../../public/assets/icons/next-js-svgrepo-com.svg';
import vueIcon from '../../public/assets/icons/vue-svgrepo-com.svg';
import angularIcon from '../../public/assets/icons/angular-svgrepo-com.svg';
import reactnativeIcon from '../../public/assets/icons/react.svg';
import expoIcon from '../../public/assets/expo-go-app.svg';
import firebaseIcon from '../../public/assets/icons/firebase.svg';
import supabaseIcon from '../../public/assets/icons/icons8-supabase.svg';
import typescriptIcon from '../../public/assets/icons/icons8-typescript.svg';
import threeIcon from '../../public/assets/icons/Three.js.svg';
import postmanIcon from '../../public/assets/icons/postman-icon.svg';
import postgressIcon from '../../public/assets/icons/icons8-postgresql.svg';
import figmaIcon from '../../public/assets/icons/icons8-figma.svg';
import bootstrapIcon from '../../public/assets/icons/icons8-bootstrap.svg';
import framerIcon from '../../public/assets/icons/framer-motion.svg';
import pythonIcon from '../../public/assets/icons/icons8-python.svg';
import javaIcon from '../../public/assets/icons/icons8-java.svg';
import fastapiIcon from '../../public/assets/icons/FastAPI.svg';
import flaskIcon from '../../public/assets/icons/Flask.svg';
import tailwindIcon from '../../public/assets/icons/icons8-tailwindcss.svg';
import { TechIcon } from "@/components/TechIcon";




const toolboxItems = [
  {
    title: "HTML",
    iconType: HtmlIcon,
  },
  {
    title: "CSS",
    iconType: CssIcon,
  },
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "PHP",
    iconType: phpIcon,
  },
  {
    title: "MySQL",
    iconType: mysqlIcon,
  },
  {
    title: "React.js",
    iconType: ReactIcon,
  },
  {
    title: "Express.js",
    iconType: expressIcon,
  },
  {
    title: "Node.js",
    iconType: nodeIcon,
  },
  {
    title: "MongoDB",
    iconType: mongodbIcon,
  },
  {
    title: "Next.js",
    iconType: nextjsIcon,
  },
  {
    title: "Tailwind CSS",
    iconType: tailwindIcon,
  },
  {
    title: "vue.js",
    iconType: vueIcon,
  },
  {
    title: "Angular",
    iconType: angularIcon,
  },
  {
    title: "React Native CLI",
    iconType: reactnativeIcon,
  },
  {
    title: "React Native Expo",
    iconType: expoIcon,
  },
  {
    title: "Firebase",
    iconType: firebaseIcon,
  },
  {
    title: "Supabase",
    iconType: supabaseIcon,
  },
  {
    title: "Typescript",
    iconType: typescriptIcon,
  },
  {
    title: "Three.js",
    iconType: threeIcon,
  },
  {
    title: "postman",
    iconType: postmanIcon,
  },
  {
    title: "postgresql",
    iconType: postgressIcon,
  },
  {
    title: "Figma",
    iconType: figmaIcon,
  },
  {
    title: "bootstrap",
    iconType: bootstrapIcon,
  },
  {
    title: "Framer Motion",
    iconType: framerIcon,
  },
  {
    title: "python",
    iconType: pythonIcon,
  },
  {
    title: "Java",
    iconType: javaIcon,
  },
  {
    title: "FastAPI",
    iconType: fastapiIcon,
  },
  {
    title: "Flask",
    iconType: flaskIcon,
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
    top: "45%",
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
    top: "75%",
  },
];

export const AboutSection = () => {
  const constraintsRef = useRef(null);
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('siddarthakarumuri003@gmail.com');
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
          {/* First row */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-5 lg:grid-rows-2 md:grid-rows-2">
            <Card className="p-0 relative md:col-span-3 lg:col-span-3 lg:row-span-2 md:row-span-2">
              <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[264px] h-fit object-contain mt-6" />
              <div className="p-4 sm:p-4">
                <p className="text-2xl mb-2 text-white-300 font-serif text-center"> Hi, I'm Siddardha! 👋</p>
                <p className="text-2xl mb-2 text-white-300 font-serif text-center"> Tech & AI/ML Enthusiast 👨‍💻</p>
                <p className="text-base font-sans text-center">
                  💡 I'm a passionate web developer and designer with a love for technology and creativity.<br/>
                  🌍 Love working on real-world projects that blend design, development, and AI to create impactful solutions.
                  <br/><br/>
                  🎯 Currently focused on: <br/>
                  💻 Web & App Development | 🧠AI/ML | 🎨UI/UX Design | 🔥Exploring the latest tech trends
                  <br/><br/>
                  🤝 Open to collaborations & new opportunities!<br/>
                  📩 Let's connect and build something amazing together!🚀

                </p>
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-2 lg:row-span-1 md:row-span-1">
              <Image src={mapImage} alt="map" className="h-full w-full object-cover object-left-top" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after-outline after-outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <Image src={smileMemoji} alt="smile" className="size-20" />
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-2 lg:row-span-1 md:row-span-1">
              <GitHubStats username="siddardha003" />
            </Card>
          </div>

          {/* Second row */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-5">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-3">
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
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-2">
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

          {/* Third row */}
          <div className="container">
            <div className="flex justify-center mt-32">
              <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent text-center">
                My Skill Set
              </p>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">My Core Competencies</h2>
            <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 mx-auto max-w-2xl mb-24">
              A reflection of my abilities, continuously refined through learning and experience to deliver impactful results.
            </p>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-5">
              <div className="h-[240px] md:col-span-5 lg:col-span-5 border border-white/40 overflow-hidden rounded-3xl">
                <ToolboxItems toolboxItems={toolboxItems} className="mt-12" itemsWrapperClassName="animate-move-left [animation-duration:40s]" />
                <ToolboxItems toolboxItems={toolboxItems} className="mt-6" itemsWrapperClassName="animate-move-right [animation-duration:40s]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};