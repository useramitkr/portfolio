import { AppWindow, MoveRight, StepForward } from 'lucide-react';
import React from 'react'

const ServiceSection: React.FC = () => {
    return (
        <>
            <section className='w-full md:max-w-[1440px] mx-auto'>
                <div className='md:flex items-center justify-between w-[90%] mx-auto md:py-10'>
                    <div className='w-full md:flex items-center justify-between'>
                        <div>
                            <p className='flex gap-2 items-center'><MoveRight />Services</p>
                            <h2 className='text-3xl md:text-4xl font-medium'><span className='text-amber-300 underline'>Services,</span> I Provide</h2>
                        </div>
                        <div className='py-2'>
                            {/* Global Buttn  */}
                            <div>
                                <div className="global-btn">
                                    <div className='global-btn-left'>
                                        <button>View My Portfolio</button>
                                    </div>
                                    <div className='global-btn-right'>
                                        <a href="#"><StepForward /></a>
                                    </div>
                                </div>
                            </div>
                            {/* Global Buttn  */}
                        </div>
                    </div>
                </div>

                <div className='md:flex items-center justify-between w-[90%] mx-auto py-5 md:py-1 md:gap-6'>
                    <div className='bg-[#f6f6f6] py-10 px-6 rounded-2xl md:w-[33%] mb-8'>
                        <div><AppWindow className='w-12 h-12' /></div>
                        <div>
                            <h3 className='text-2xl font-medium py-3'>Website Development</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>

                    <div className='bg-[#f6f6f6] py-10 px-6 rounded-2xl md:w-[33%] mb-8'>
                        <div><AppWindow className='w-12 h-12' /></div>
                        <div>
                            <h3 className='text-2xl font-medium py-3'>Website Development</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>

                    <div className='bg-[#f6f6f6] py-10 px-6 rounded-2xl md:w-[33%] mb-8'>
                        <div><AppWindow className='w-12 h-12' /></div>
                        <div>
                            <h3 className='text-2xl font-medium py-3'>Website Development</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ServiceSection;