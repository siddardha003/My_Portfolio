"use client";
import { useState } from 'react';
import { myProjects } from '@/constants/constants';

const projectCount = myProjects.length;

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const handleNavigation = (direction: string) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === 'previous') {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };


  const currentProject = myProjects[selectedProjectIndex];

  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase  font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400  bg-clip-text text-transparent text-center">
            Real-world projects</p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">Featured projects</h2>
        <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 mx-w-md mx-auto">see how i transformed cocepts into engaing digital experiences.</p>
        <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full mt-24">
          <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
            <div className="absolute top-0 right-0">
              <img src={currentProject.spotlight} alt="spotlight" className="w-full h-96 object-cover rounded-xl" />
            </div>

            <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={currentProject.logoStyle}>
              <img className="w-10 h-10 shadow-sm" src={currentProject.logo} alt="logo" />
            </div>

            <div className="flex flex-col gap-5 text-white-600 my-5">
              <p className="text-white text-2xl font-semibold animatedText">{currentProject.title}</p>

              <p className="animatedText">{currentProject.desc}</p>
              <p className="animatedText">{currentProject.subdesc}</p>
            </div>

            <div className="flex items-center justify-between flex-wrap gap-5">
              <div className="flex items-center gap-3">
                {currentProject.tags.map((tag, index) => (
                  <div key={index} className="w-10 h-10 rounded-md p-2 bg-neutral-100 bg-opacity-10 backdrop-filter backdrop-blur-lg flex justify-center items-center">
                    <img src={tag.path} alt={tag.name} />
                  </div>
                ))}
              </div>

              <a
                className="flex items-center gap-2 cursor-pointer text-white-600"
                href={currentProject.href}
                target="_blank"
                rel="noreferrer">
                <p>Check Live Site</p>
                <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
              </a>
            </div>

            <div className="flex justify-between items-center mt-7">
              <button className="w-10 h-10 p-3 cursor-pointer active:scale-95 transition-all rounded-full arrow-gradient" onClick={() => handleNavigation('previous')}>
                <img src="/assets/left-arrow.png" alt="left arrow" />
              </button>

              <button className="w-10 h-10 p-3 cursor-pointer active:scale-95 transition-all rounded-full arrow-gradient" onClick={() => handleNavigation('next')}>
                <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">

          </div>
        </div>


      </div>
    </section>
  );
};
export default Projects;
