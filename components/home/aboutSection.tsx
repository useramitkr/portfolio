import { MoveRight, StepForward } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

type Props = {}

const AboutSection: React.FC = () => {
    return (
        <>
            <section className='bg-[#344D37] text-white md:my-10'>
                <section className='w-full md:max-w-[1440px] mx-auto'>
                    <div className='md:flex items-center justify-between w-[90%] mx-auto py-10'>
                        <div className='w-full md:w-[90%] mx-auto flex justify-between items-center py-10'>

                            {/* left side  */}
                            <div className='w-full md:w-[70%] mx-auto'>
                                <Image src='/images/Amit.webp' alt='Amit Kumar - Frontend Developer' width={600} height={600} />
                            </div>

                        </div>

                        {/* Right Side  */}
                        <div className='w-full md:w-[90%]'>
                            <p className='flex gap-2 items-center'><MoveRight />About Me</p>
                            <h2 className='text-4xl md:text-6xl py-6 font-medium'>Who is <span className='text-amber-300 underline'>Amit Kumar</span></h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio officia cumque suscipit omnis culpa, eveniet cum perspiciatis obcaecati quos libero impedit accusantium officiis voluptate earum nobis! Molestiae incidunt officiis corrupti!</p>

                            <div className='py-6 md:w-[80%] flex items-center justify-between'>
                                <div>
                                    <p className='text-amber-300 text-3xl font-medium'>600+</p>
                                    <p>Project Completed</p>
                                </div>

                                <div>
                                    <p className='text-amber-300 text-3xl font-medium'>600+</p>
                                    <p>Project Completed</p>
                                </div>

                                <div>
                                    <p className='text-amber-300 text-3xl font-medium'>600+</p>
                                    <p>Project Completed</p>
                                </div>
                            </div>

                            <div className='pt-2'>
                                <button className="border w-[40%] rounded-xl px-4 py-2 cursor-pointer transition-all duration-300 text-black bg-amber-300 hover:bg-white hover:text-black">
                                    Hire Me!
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}

export default AboutSection;