import { MoveRight, StepForward } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

type Props = {}

const AboutSection: React.FC = () => {
    return (
        <>
            <section className='bg-[#344D37] text-white md:my-10' id='about'>
                <section className='w-full md:max-w-[1440px] mx-auto'>
                    <div className='md:flex items-center justify-between w-[90%] mx-auto py-10'>
                        <div className='w-full md:w-[90%] mx-auto flex justify-between items-center py-10'>

                            {/* left side  */}
                            <div className='w-full md:w-[70%] mx-auto'>
                                <Image src='/images/who-amit.webp' alt='Amit Kumar - Frontend Developer' width={600} height={600} />
                            </div>

                        </div>

                        {/* Right Side  */}
                        <div className='w-full md:w-[90%]'>
                            <p className='flex gap-2 items-center'><MoveRight />About Me</p>
                            <h2 className='text-4xl md:text-6xl py-6 font-medium'>Meet <span className='text-amber-300 underline'>Amit Kumar</span></h2>
                            <p>I’m a passionate frontend developer with a focus on building fast, accessible, and user-friendly web applications. With expertise in React, Next.js, and modern CSS frameworks like Tailwind, I transform ideas into responsive, high-quality digital experiences. My goal is to contribute to projects that make an impact — blending design, performance, and functionality.</p>

                            <div className='py-6 md:w-[80%] flex items-center justify-between'>
                                <div>
                                    <p className='text-amber-300 text-3xl font-medium'>50+</p>
                                    <p>Project Completed</p>
                                </div>

                                <div>
                                    <p className='text-amber-300 text-3xl font-medium'>2+</p>
                                    <p>Experiences</p>
                                </div>

                                <div>
                                    <p className='text-amber-300 text-3xl font-medium'>20+</p>
                                    <p>Tech/Tools Mastered</p>
                                </div>
                            </div>

                            <div className='pt-2'>
                                <a target='_blank' href="#https://drive.google.com/drive/folders/17yK9a_C7XttaXHy7L5JxtrJnH1OFi9Yp?usp=sharing">
                                    <button className="border w-[40%] rounded-xl px-4 py-2 cursor-pointer transition-all duration-300 text-black bg-amber-300 hover:bg-white hover:text-black">
                                        Hire Me!
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}

export default AboutSection;