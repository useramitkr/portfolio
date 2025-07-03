import React from 'react'
import Header from '../header';
import Footer from '../footer/footer';
import { wrapp } from '@/typescript/layout.type';

const Wrapper: React.FC<wrapp> = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Wrapper;