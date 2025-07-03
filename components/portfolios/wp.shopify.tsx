import { StepForward } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

const WpShopifyPortfolio: React.FC = () => {
  return (
    <>
    <section>
        <div>
            <div className='flex flex-col md:flex-row gap-3 justify-between my-2'>
                <div className='bg-[#f6f6f6] p-3 rounded-2xl'>
                    <Image src='/images/portfolios/shopify/decorporium.webp' alt='BEME - Shopify' width={1200} height={700} className='rounded-2xl' />
                    <div className='flex items-center py-4 gap-2'>
                        <p className='bg-amber-300 py-2 px-5 rounded-3xl font-medium text-[14px]'>Shopify</p>
                        <p className='bg-amber-300 py-2 px-5 rounded-3xl font-medium text-[14px]'>eCommerce</p>
                        <p className='bg-amber-300 py-2 px-5 rounded-3xl font-medium text-[14px]'>Bug Fixing</p>
                    </div>
                    <div className='w-full flex items-center justify-between'>
                        <div>
                            <h3 className='text-[20px] md:text-2xl font-medium'>Decorporium - Shopify ecommerce website</h3>
                        </div>
                        <div className='bg-[#354C37] text-white p-5 rounded-[50%] w-10% hover:bg-amber-300 hover:text-black transition-all duration-300 ease-in cursor-pointer'><StepForward /></div>
                    </div>
                </div>

                <div className='bg-[#f6f6f6] p-3 rounded-2xl'>
                    <Image src='/images/portfolios/shopify/ashley and alvis.webp' alt='BEME - Shopify' width={1200} height={700} className='rounded-2xl' />
                    <div className='flex items-center py-4 gap-2'>
                        <p className='bg-amber-300 py-2 px-5 rounded-3xl font-medium text-[14px]'>Shopify</p>
                        <p className='bg-amber-300 py-2 px-5 rounded-3xl font-medium text-[14px]'>eCommerce</p>
                        <p className='bg-amber-300 py-2 px-5 rounded-3xl font-medium text-[14px]'>Bug Fixing</p>
                    </div>
                    <div className='w-full flex items-center justify-between'>
                        <div>
                            <h3 className='text-[20px] md:text-2xl font-medium'>Ashley and Alvis - Shopify ecommerce website</h3>
                        </div>
                        <div className='bg-[#354C37] text-white p-5 rounded-[50%] w-10% hover:bg-amber-300 hover:text-black transition-all duration-300 ease-in cursor-pointer'><StepForward /></div>
                    </div>
                </div>
            </div>

            
        </div>
    </section>
    </>
  )
}

export default WpShopifyPortfolio;