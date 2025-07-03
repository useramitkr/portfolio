import { FaqItem } from '@/typescript/layout.type';
import { Minus, MoveRight, Plus } from 'lucide-react';
import React, { useState } from 'react'

const faqData: FaqItem[] = [
    {
        id: 1,
        question: 'What technologies do you work with?',
        answer: 'I specialize in React.js, Next.js, Tailwind CSS, TypeScript, JavaScript, WordPress, and Shopify. I focus on building modern, responsive, and accessible websites.'
    },
    {
        id: 2,
        question: 'Why should I hire you as a frontend developer?',
        answer: 'I combine strong technical skills with attention to design and user experience. I’m passionate about clean code, performance optimization, and delivering solutions that meet real business needs. I’m reliable, detail-oriented, and committed to continuous learning.'
    },
    {
        id: 3,
        question: 'Do you create responsive designs for all devices?',
        answer: 'Yes, I ensure that all websites and applications I build are fully responsive and work smoothly across desktop, tablet, and mobile devices.'
    },
    {
        id: 4,
        question: 'How do you ensure code quality in your projects?',
        answer: 'I follow clean code principles, modular architecture, and use tools like ESLint and Prettier. I also review and test code carefully to ensure maintainability and scalability.'
    },
    {
        id: 5,
        question: 'What’s your approach to performance optimization?',
        answer: 'I prioritize performance by lazy loading assets, optimizing images, minimizing CSS/JS, and using frameworks like Next.js for server-side rendering and static site generation.'
    },
    {
        id: 6,
        question: 'How do you stay updated with frontend trends?',
        answer: 'I actively follow industry blogs, contribute to projects, and continuously explore new frameworks, libraries, and best practices to keep my skills sharp.'
    },
    {
        id: 7,
        question: 'Can you collaborate with designers and backend developers?',
        answer: 'Absolutely! I enjoy working as part of a team, ensuring smooth integration between frontend, backend, and design for seamless user experiences.'
    },
];

const FaqSection = () => {
    const [openId, setOpenId] = useState(2);

    const toggle = (id: number) => {
        setOpenId(prev => (prev === id ? -1 : id));
    };

    return (
        <>
            <section className='bg-[#354C37] pt-15 pb-10' id='faq'>
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
                                            <Plus className='w-5 h-5' />
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