'use client';

import { button } from '@material-tailwind/react';
import { MoveRight, StepForward } from 'lucide-react';
import React, { useState } from 'react'
import ReactPortfolio from '../portfolios/react.next.portfolio';
import HtmlCSSPortfolio from '../portfolios/html.css.portfolio';
import WpShopifyPortfolio from '../portfolios/wp.shopify';

const PortfolioSection = () => {
    const [activeTab, setActiveTab] = useState('react');

    const tabData = [
        {
            label: "React/Next.js",
            value: "react",
            content: <ReactPortfolio />
        },
        {
            label: "HTML/CSS",
            value: "html",
            content: <HtmlCSSPortfolio />
        },
        {
            label: "WordPress/Shopify",
            value: "wordpress",
            content: <WpShopifyPortfolio />
        },
    ];

    return (
        <>
            <section className='w-full md:max-w-[1440px] mx-auto'>
                <div className='w-[90%] mx-auto py-10'>
                    <div className='w-full md:flex items-center justify-between'>
                        <div>
                            <p className='flex gap-2 items-center'><MoveRight />Portfolio</p>
                            <h2 className='text-3xl md:text-4xl font-medium'>Featured <span className='text-amber-300 underline'>Projects</span></h2>
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

                    {/* All Portfolio  */}
                    <div className="w-full mx-auto py-6 sm:py-8 md:py-10">
                        <div className="flex border-b border-gray-300">
                            {tabData.map((tab) => (
                                <button
                                    key={tab.value}
                                    onClick={() => setActiveTab(tab.value)}
                                    className={`flex-1 py-4 px-2 sm:px-3 md:px-4 rounded-2xl text-center font-semibold transition-all duration-500 ease-in text-xs xs:text-sm sm:text-base md:text-lg ${activeTab === tab.value
                                            ? 'border-b-2 bg-[#354D36] border-amber-300 text-amber-300'
                                            : 'text-gray-600 hover:text-amber-300'
                                        }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                        <div className="p-2 sm:p-3 md:p-4">
                            {tabData.map((tab) => (
                                <div
                                    key={tab.value}
                                    className={`transition-opacity duration-300 ${activeTab === tab.value ? 'block opacity-100' : 'hidden opacity-0'
                                        }`}
                                >
                                    {tab.content}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PortfolioSection;