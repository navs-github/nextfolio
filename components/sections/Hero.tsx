import React from 'react'
import { useInView } from 'react-intersection-observer';


import BoxHeading from '@components/common/BoxHeading'
import BigTextHero from '@components/common/BigTextHero'
import ArrowLinkInternal from '@components/common/ArrowLinkInternal';
import ArrowLinkSet from '@components/common/ArrowLinkSet';

type Props = {
    className: string;
}

function Hero({ className }: Props) {
    const [heroRef, inViewHero] = useInView({
        triggerOnce: true,
        rootMargin: '-50px 0px',
    });
    return (
        <main ref={heroRef} className={`${className}`}>
            <div className="flex-col-start">
                <BoxHeading inView={inViewHero}>INTRO</BoxHeading>
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
                    <BigTextHero>CREATIVE ENGINEER</BigTextHero>
                </div>
            </div>
        </main>
    )
}

export default Hero
