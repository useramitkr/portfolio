import { MoveRight, StepForward, Braces, CodeXml, FileScan } from 'lucide-react';
import React from 'react'

const ServiceSection: React.FC = () => {
    return (
        <>
            <section className='w-full md:max-w-[1440px] mx-auto' id='service'>
                <div className='md:flex items-center justify-between w-[90%] mx-auto md:py-10'>
                    <div className='w-full md:flex items-center justify-between'>
                        <div>
                            <p className='flex gap-2 items-center'><MoveRight />What I Do</p>
                            <h2 className='text-3xl md:text-4xl font-medium'>My Expertise & <span className='text-amber-300 underline'>Services</span></h2>
                        </div>
                        <div className='py-2'>
                            {/* Global Buttn  */}
                            <div>
                                <div className="global-btn">
                                    <div className='global-btn-left'>
                                        <button>View My Work</button>
                                    </div>
                                    <div className='global-btn-right'>
                                        <a href="#portfolio"><StepForward /></a>
                                    </div>
                                </div>
                            </div>
                            {/* Global Buttn  */}
                        </div>
                    </div>
                </div>

                <div className='md:flex justify-between w-[90%] mx-auto py-5 md:py-1 md:gap-6'>
                    <div className='bg-[#f6f6f6] py-10 px-6 rounded-2xl md:w-[33%] mb-8'>
                        <div><Braces className='w-12 h-12' /></div>
                        <div>
                            <h3 className='text-2xl font-medium py-3'>React / Next.js</h3>
                            <p>Building fast, scalable, and SEO-friendly web applications using modern JavaScript frameworks.</p>
                        </div>
                    </div>

                    <div className='bg-[#f6f6f6] py-10 px-6 rounded-2xl md:w-[33%] mb-8'>
                        <div><CodeXml className='w-12 h-12' /></div>
                        <div>
                            <h3 className='text-2xl font-medium py-3'>HTML / CSS</h3>
                            <p>Crafting pixel-perfect, responsive layouts using modern HTML5 and CSS3 techniques, ensuring accessibility and cross-browser compatibility.
                            </p>
                        </div>
                    </div>

                    <div className='bg-[#f6f6f6] py-10 px-6 rounded-2xl md:w-[33%] mb-8'>
                        <div><FileScan className='w-12 h-12' /></div>
                        <div>
                            <h3 className='text-2xl font-medium py-3'>WordPress / Shopify</h3>
                            <p>Creating custom themes and solutions for WordPress and Shopify to power your business online.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ServiceSection;