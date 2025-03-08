"use client";
import { useState } from 'react';
import { education } from '@/constants/constants';
import { Card } from '@/components/Card';

const Education = () => {
    return (

            <section className="pb-16 lg:py-24">
                <div className="container">
                    <div className="flex justify-center">
                        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent text-center">
                            Education
                        </p>
                    </div>
                    <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">My Learning Journey</h2>
                    <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 mx-w-md mx-auto">
                        Discover my educational background, and the skills I've acquired along the way.
                    </p>
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 mt-12 sm:mt-24">
                        <Card className="col-span-3 rounded-3xl border border-white/30">
                            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
                                {education.map((item, index) => (
                                    <div key={index} className="grid grid-cols-[auto_1fr] items-start gap-5 transition-all ease-in-out duration-500 cursor-pointer hover:bg-white/20 rounded-3xl sm:px-5 px-2.5 group">
                                        <div className="flex flex-col h-full justify-start items-center py-2">
                                            <div className="rounded-3xl w-16 h-16 p-2 bg-white/20">
                                                <img className="w-full h-full" src={item.icon} alt={item.name} />
                                            </div>
                                            <div className="flex-1 w-0.5 mt-4 h-full bg-white/50 group-hover:bg-white group-last:hidden" />
                                        </div>
                                        <div className="sm:p-5 px-2.5 py-5">
                                            <p className=" text-[#fff] font-serif text-xl">{item.name}</p>
                                            <p className="text-sm text-[#fff] mb-5 font-sans">
                                                {item.pos}    <span>({item.duration})</span>
                                            </p>
                                            <p className=" text-white/70 group-hover:text-white transition-all ease-in-out duration-500 font-sans">{item.title}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </div>
                </div>
            </section>
    );
};

export default Education;
