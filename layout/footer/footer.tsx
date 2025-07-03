import Temp from '@/components/home/infoSection';
import { Github, Linkedin, MailCheck, MessageCircleMore, PhoneCall, StepForward } from 'lucide-react';
import React from 'react'

const Footer: React.FC = () => {
  return (
    <>
      <section>

        {/* Footer area  */}
        <section className='w-full md:max-w-[1440px] mx-auto'>
          <div className='md:flex items-center justify-between w-[90%] mx-auto md:pb-10 border-b-1 border-gray-300'>
            <div className='w-full md:flex items-center justify-between'>
              <div>
                <h2 className='text-3xl md:text-4xl font-medium'>Let's <span className='text-amber-300 underline'>Connect</span> there</h2>
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

          {/* Video Area  */}
          <div className='w-full'>
            <iframe
              src="https://www.youtube.com/embed/ViFAegMZC8U?si=nleiCXGig9hgF5Qp"
              allowFullScreen
              className="md:h-[600px] w-[90%] mx-auto rounded-2xl aspect-video"
            ></iframe>
          </div>

          {/* after video  */}
          <div className='w-[90%] mx-auto mt-15'>
            <div className='flex items-center justify-center gap-4'>
              <div className='transition-all duration-300 ease-in bg-amber-300 rounded-[50%] p-2 hover:bg-[#344C36] hover:text-white'><a href="#"><Linkedin /></a></div>
              <div className='transition-all duration-300 ease-in bg-amber-300 rounded-[50%] p-2 hover:bg-[#344C36] hover:text-white'><a href="#"><Github /></a></div>
              <div className='transition-all duration-300 ease-in bg-amber-300 rounded-[50%] p-2 hover:bg-[#344C36] hover:text-white'><a href="#"><PhoneCall /></a></div>
              <div className='transition-all duration-300 ease-in bg-amber-300 rounded-[50%] p-2 hover:bg-[#344C36] hover:text-white'><a href="#"><MessageCircleMore /></a></div>
              <div className='transition-all duration-300 ease-in bg-amber-300 rounded-[50%] p-2 hover:bg-[#344C36] hover:text-white'><a href="#"><MailCheck /></a></div>
            </div>
          </div>
        </section>

        <Temp />

        {/* Marquee text  */}
        <section className='w-full bg-[#344D37] mt-15'>
          <div className='bg-amber-300 text-black py-6'>
            <div>
              <div className="whitespace-nowrap">
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

        {/* Footer Credit  */}
        <section className='w-full bg-[#344D37]'>
          <div className='text-white py-6 w-[90%] mx-auto'>
            <div>
              <div>
                dfgdfgdg
              </div>

            </div>
          </div>
        </section>

      </section>
    </>
  )
}

export default Footer;