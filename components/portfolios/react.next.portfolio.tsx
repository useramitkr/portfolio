import { StepForward } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

const ReactPortfolio: React.FC = () => {
    return (
        <>
            <section>
                <div>
                    <div className='flex flex-col md:flex-row gap-3 justify-between my-2'>
                        <div className='bg-[#f6f6f6] p-3 rounded-2xl'>
                            <Image src='/images/portfolios/react/nnnastro.webp' alt='NNN Astro - Next.js' width={1200} height={700} className='rounded-2xl' />
                            <div className='flex items-center py-4 gap-2'>
                                <p className='bg-amber-300 py-2 px-5 rounded-3xl font-medium text-[14px]'>Next.js</p>
                                <p className='bg-amber-300 py-2 px-5 rounded-3xl font-medium text-[14px]'>React.js</p>
                                <p className='bg-amber-300 py-2 px-5 rounded-3xl font-medium text-[14px]'>Tailwind CSS</p>
                            </div>
                            <div className='w-full flex items-center justify-between'>
                                <div>
                                    <h3 className='text-[20px] md:text-2xl font-medium'>Numerology Astro website</h3>
                                </div>
                                <a href="https://nnnastro.vercel.app/" target="_blank" rel="noopener noreferrer"><div className='bg-[#354C37] text-white p-5 rounded-[50%] w-10% hover:bg-amber-300 hover:text-black transition-all duration-300 ease-in cursor-pointer'><StepForward /></div></a>
                            </div>
                        </div>

                        <div className='bg-[#f6f6f6] p-3 rounded-2xl'>
                            <Image src='/images/portfolios/react/bms.webp' alt='BMS - Next.js' width={1200} height={700} className='rounded-2xl' />
                            <div className='flex items-center py-4 gap-2'>
                                <p className='bg-amber-300 py-2 px-5 rounded-3xl font-medium text-[14px]'>Next.js</p>
                                <p className='bg-amber-300 py-2 px-5 rounded-3xl font-medium text-[14px]'>React.js</p>
                                <p className='bg-amber-300 py-2 px-5 rounded-3xl font-medium text-[14px]'>Tailwind CSS</p>
                            </div>
                            <div className='w-full flex items-center justify-between'>
                                <div>
                                    <h3 className='text-[20px] md:text-2xl font-medium'>Project Management System</h3>
                                </div>
                                <a href="https://bms-two-red.vercel.app/" target="_blank" rel="noopener noreferrer"><div className='bg-[#354C37] text-white p-5 rounded-[50%] w-10% hover:bg-amber-300 hover:text-black transition-all duration-300 ease-in cursor-pointer'><StepForward /></div></a>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col md:flex-row gap-3 justify-between my-2'>
                        <div className='bg-[#f6f6f6] p-3 rounded-2xl'>
                            <Image src='/images/portfolios/react/amit-port.webp' alt='Amit Portfolio - Next.js' width={1200} height={700} className='rounded-2xl' />
                            <div className='flex items-center py-4 gap-2'>
                                <p className='bg-amber-300 py-2 px-5 rounded-3xl font-medium text-[14px]'>Next.js</p>
                                <p className='bg-amber-300 py-2 px-5 rounded-3xl font-medium text-[14px]'>React.js</p>
                                <p className='bg-amber-300 py-2 px-5 rounded-3xl font-medium text-[14px]'>Tailwind CSS</p>
                            </div>
                            <div className='w-full flex items-center justify-between'>
                                <div>
                                    <h3 className='text-[20px] md:text-2xl font-medium'>Personal Portfolio Website</h3>
                                </div>
                                <a href="https://amitkr-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer"><div className='bg-[#354C37] text-white p-5 rounded-[50%] w-10% hover:bg-amber-300 hover:text-black transition-all duration-300 ease-in cursor-pointer'><StepForward /></div></a>
                            </div>
                        </div>

                        <div className='bg-[#f6f6f6] p-3 rounded-2xl'>
                            <Image src='/images/portfolios/react/zepto.webp' alt='zepto lite - Next.js' width={1200} height={700} className='rounded-2xl' />
                            <div className='flex items-center py-4 gap-2'>
                                <p className='bg-amber-300 py-2 px-5 rounded-3xl font-medium text-[14px]'>Next.js</p>
                                <p className='bg-amber-300 py-2 px-5 rounded-3xl font-medium text-[14px]'>React.js</p>
                                <p className='bg-amber-300 py-2 px-5 rounded-3xl font-medium text-[14px]'>Tailwind CSS</p>
                            </div>
                            <div className='w-full flex items-center justify-between'>
                                <div>
                                    <h3 className='text-[20px] md:text-2xl font-medium'>Zepto Lite Mini website</h3>
                                </div>
                                <a href="https://zepto-lite.vercel.app/" target="_blank" rel="noopener noreferrer"><div className='bg-[#354C37] text-white p-5 rounded-[50%] w-10% hover:bg-amber-300 hover:text-black transition-all duration-300 ease-in cursor-pointer'><StepForward /></div></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ReactPortfolio;