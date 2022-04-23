import React from 'react'
import { useInView } from 'react-intersection-observer';


import BoxHeading from '../../BoxHeading'
import BigTextHero from '../../BigTextHero'
import ArrowLinkInternal from '../../ArrowLinkInternal';
import ArrowLinkSet from '../../ArrowLinkSet';

function Hero() {
    const [heroRef, inViewHero] = useInView({
        triggerOnce: true,
        rootMargin: '-50px 0px',
    });
    return (
        <main ref={heroRef} className="mt-20 xl:mt-32 flex flex-col items-start">
            <BoxHeading inView={inViewHero}>ABHINAV VERMA</BoxHeading>
            <p className="mt-8 xl:mt-12 leading-[180%] opacity-0 animate-fadein">A front-end developer and product designer. I spend my time ideating, designing, and coding polished digital interactions.</p>
            <ArrowLinkSet>
                <li className="">
                    <ArrowLinkInternal text="MORE ABOUT ME" to="/about"></ArrowLinkInternal>
                </li>
                <li className="">
                    <ArrowLinkInternal text="SEE MY WORK" to="/work"></ArrowLinkInternal>
                </li>
            </ArrowLinkSet>
            <div className="mt-12 xl:mt-16 self-center animate-slideright">
                <BigTextHero><span className="">CREATIVE</span> ENGINEER</BigTextHero>
            </div>
        </main>
    )
}

export default Hero
