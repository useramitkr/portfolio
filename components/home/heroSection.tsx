
import { StepForward } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

const HeroSection: React.FC = () => {
    return (
        <>
            <section className='w-full md:max-w-[1440px] mx-auto' id='hero'>
                <div className='md:flex justify-between w-[90%] mx-auto md:py-10'>
                    {/* left side  */}
                    <div className='w-full md:w-[90%] mx-auto flex justify-between items-center py-10'>
                        <div className='w-full md:w-[90%]'>
                            <p className='border rounded inline px-2 py-1 bg-gray-300'>Hello There!</p>
                            <h1 className='text-4xl md:text-7xl py-6 font-medium'>I'am <span className='text-amber-300 underline'>Amit Kumar, </span>Frontend Developer Based in India.</h1>
                            <p>I specialize in building modern, responsive websites using React, Next.js, and Tailwind CSS. With a keen eye for detail and a passion for creating seamless user experiences, I’m dedicated to delivering high-quality web solutions. Explore my portfolio to see how I bring ideas to life through code and design.</p>

                            <div className='flex items-center gap-4 mt-5'>
                                {/* Global Buttn  */}
                                <div>
                                    <div className="global-btn">
                                        <div className='global-btn-left'>
                                            <button>View My Portfolio</button>
                                        </div>
                                        <div className='global-btn-right'>
                                            <a href="#portfolio"><StepForward /></a>
                                        </div>
                                    </div>
                                </div>
                                {/* Global Buttn  */}

                                <div>
                                    <a target='_blank' href="https://drive.google.com/drive/folders/17yK9a_C7XttaXHy7L5JxtrJnH1OFi9Yp?usp=sharing">
                                        <button className="border rounded-xl px-4 py-2 text-black cursor-pointer transition-all duration-300 hover:bg-amber-300">
                                        Hire Me!
                                    </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side  */}
                    <div className="w-full md:w-[70%] mx-auto flex items-end">
                        <Image
                            src="/images/amit-kr.webp"
                            alt="Amit Kumar - Frontend Developer"
                            width={600}
                            height={600}
                        />
                    </div>
                </div>
            </section>

            {/* Marquee text  */}
            <section className='w-full bg-[#344D37] -rotate-3 mb-15 -mt-8'>
                <div className='bg-amber-300 text-black py-6 rotate-3'>
                    <div>
                        <div className="overflow-hidden whitespace-nowrap">
                            <div className="animate-marquee font-medium text-3xl flex items-ce
                            nter justify-center gap-10">
                                <p>HTML</p>
                                <p>✵</p>
                                <p>CSS</p>
                                <p>✵</p>
                                <p>Tailwind CSS</p>
                                <p>✵</p>
                                <p>JavaScript</p>
                                <p>✵</p>
                                <p>TypeScript</p>
                                <p>✵</p>
                                <p>React.js</p>
                                <p>✵</p>
                                <p>Next.js</p>
                                <p>✵</p>
                                <p>WordPress</p>
                                <p>✵</p>
                                <p>Shopify</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection;