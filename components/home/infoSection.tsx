import { Telescope, Handshake, Rocket } from 'lucide-react';
import React from 'react';

const InfoSection = () => {
  return (
    <>
      <section className='w-full max-w-[1440px] mx-auto'>
        <div className='bg-[#344C36] w-[90%] mx-auto rounded-2xl text-white p-6 flex flex-col md:flex-row items-center justify-between gap-3 my-5'>
          <div className='border-b-1 md:border-b-0 md:border-r-2 border-dotted flex items-center gap-4 p-4 md:p-10 w-full md:w-auto'>
            <div className='text-amber-300'><Telescope width={40} height={40} className='md:w-20 md:h-20' /></div>
            <div className='text-sm md:text-base'>Focused on delivering high-performance, scalable frontend solutions tailored to your business goals.</div>
          </div>
          <div className='border-b-1 md:border-b-0 md:border-r-2 border-dotted flex items-center gap-4 p-4 md:p-10 w-full md:w-auto'>
            <div className='text-amber-300'><Handshake width={40} height={40} className='md:w-20 md:h-20' /></div>
            <div className='text-sm md:text-base'>Collaborative mindset — I thrive working with designers, developers, and stakeholders to create great digital products.

            </div>
          </div>
          <div className='flex items-center gap-4 p-4 md:p-10 w-full md:w-auto'>
            <div className='text-amber-300'><Rocket width={40} height={40} className='md:w-20 md:h-20' /></div>
            <div className='text-sm md:text-base'>Always eager to learn and apply the latest technologies to build modern, future-ready websites and applications.

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InfoSection;