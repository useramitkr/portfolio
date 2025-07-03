import InfoSection from '@/components/home/infoSection';
import { Github, Linkedin, MailCheck, MessageCircleMore, PhoneCall, StepForward } from 'lucide-react';
import React from 'react'

const Footer: React.FC = () => {
  return (
    <>
      <section>

        {/* Footer area  */}
        <section className='w-full md:max-w-[1440px] mx-auto pt-10' id='footer'>
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
                      <button>View My Resume</button>
                    </div>
                    <div className='global-btn-right'>
                      <a target='_blank' href="https://drive.google.com/drive/folders/17yK9a_C7XttaXHy7L5JxtrJnH1OFi9Yp?usp=sharing"><StepForward /></a>
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
        </section>

        <InfoSection />

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
          <div className='text-white py-2 w-[90%] mx-auto'>
            <div className='md:flex items-center justify-between text-center md:text-left'>
              <div>
                <p>Copyright @ 2025 <span className='text-amber-300'>Amit Kumar.</span> All Right Reserved.</p>
              </div>

              <div>
                <div className='flex items-center justify-center gap-4 text-black py-2'>
                  <div className='transition-all duration-300 ease-in bg-amber-300 rounded-[50%] p-2 hover:bg-[#344C36] hover:text-white hover:border-1 hover:border-white'><a target='_blank' href="https://www.linkedin.com/in/useramitkr/"><Linkedin /></a></div>
                  <div className='transition-all duration-300 ease-in bg-amber-300 rounded-[50%] p-2 hover:bg-[#344C36] hover:text-white hover:border-1 hover:border-white'><a target='_blank' href="https://github.com/useramitkr"><Github /></a></div>
                  <div className='transition-all duration-300 ease-in bg-amber-300 rounded-[50%] p-2 hover:bg-[#344C36] hover:text-white hover:border-1 hover:border-white'><a target='_blank' href="tel:918777427484"><PhoneCall /></a></div>
                  <div className='transition-all duration-300 ease-in bg-amber-300 rounded-[50%] p-2 hover:bg-[#344C36] hover:text-white hover:border-1 hover:border-white'><a target='_blank' href="https://wa.me/918777427484"><MessageCircleMore /></a></div>
                  <div className='transition-all duration-300 ease-in bg-amber-300 rounded-[50%] p-2 hover:bg-[#344C36] hover:text-white hover:border-1 hover:border-white'><a target='_blank' href="mailto:devamitkr9@gmail.com"><MailCheck /></a></div>
                </div>
              </div>

            </div>
          </div>
        </section>

      </section>
    </>
  )
}

export default Footer;