import { FaqItem } from '@/typescript/layout.type';
import { Minus, MoveRight, Plus } from 'lucide-react';
import React, { useState } from 'react'

const faqData: FaqItem[] = [
    {
        id: 1,
        question: 'What is Next.js?',
        answer: 'Next.js is a React framework for production with features like SSR and static site generation.'
    },
    {
        id: 2,
        question: 'What is Tailwind CSS?',
        answer: 'Tailwind CSS is a utility-first CSS framework for rapidly building custom designs.'
    },
    {
        id: 3,
        question: 'What is Lucide?',
        answer: 'Lucide is an open-source icon library built by the community.'
    },
];

const FaqSection = () => {
    const [openId, setOpenId] = useState(2);

    const toggle = (id: number) => {
        setOpenId(prev => (prev === id ? -1 : id));
    };

    return (
        <>
            <section className='bg-[#354C37] pt-15 pb-10'>
                <section className='w-full md:max-w-[1440px] mx-auto bg-[#354C37]'>
                    <div className='md:flex items-center justify-between w-[90%] mx-auto md:py-10'>
                        <div className='text-white'>
                            <p className='flex gap-2 items-center'><MoveRight />Services</p>
                            <h2 className='text-3xl md:text-4xl font-medium'>Questions? <span className='text-amber-300 underline'>Look here.</span></h2>
                        </div>
                    </div>

                    {/* FAQ  */}
                    <div className="md:w-[90%] mx-auto my-10 px-4">
                        {faqData.map((faq) => {
                            const isOpen = faq.id === openId;
                            return (
                                <div
                                    key={faq.id}
                                    className={`mb-4 py-4 text-[20px] md:text-2xl rounded-lg overflow-hidden transition-colors duration-300 ${isOpen ? 'bg-amber-300 text-black' : 'bg-[#455B44] text-white'}`}
                                >
                                    <button
                                        onClick={() => toggle(faq.id)}
                                        className="w-full flex justify-between items-center p-4 text-left"
                                    >
                                        <span className='font-semibold'>{faq.question}</span>
                                        {isOpen ? (
                                            <Minus className='w-5 h-5' />
                                        ) : (
                                            <Minus className='w-5 h-5' />
                                        )}
                                    </button>

                                    {isOpen && (
                                        <div className="p-4 text-[16px] md:text-[20px] border-t border-gray-100 text-sm">
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            )
                        })}
                    </div>

                </section>
            </section >
        </>
    )
}

export default FaqSection;