import React from 'react'
import { useInView } from 'react-intersection-observer';

import BoxHeading from '@components/common/BoxHeading'
import BigText from '@components/common/BigText'
import ArrowLinkExternal from '@components/common/ArrowLinkExternal';
import ArrowLinkSet from '@components/common/ArrowLinkSet';


import LogoAngel from '@components/logos/LogoAngel'
import LogoLinkedin from '@components/logos/LogoLinkedin'

interface Props {
    className?: string;
}

function ContactSection({ className }: Props) {

    const [sectionRef, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-100px 0px',
    });

    return (
        <section ref={sectionRef} className={`${className} pb-24 flex flex-col items-start`}>
            <BoxHeading inView={inView}>AVAILABILITY</BoxHeading>
            <div className={"opacity-0 " + (inView ? 'animate-fadein' : 'animate-none')}>
                <p className="mt-8 xl:mt-12 leading-[180%]">I'm working full time at <span className="font-lora font-bold">Boxhub</span>, a startup based in Toronto. Don't be shy though, I'm always up for a chat about front-end architecture, product design, or cats.</p>
                <p className="mt-8 xl:mt-12 leading-[180%]">I'm quickest to respond on my work email, or my Angel account.</p>
                <ArrowLinkSet>
                    <li className="">
                        <ArrowLinkExternal text="EMAIL ME" link="mailto:nav.verma.work@gmail.com" />
                    </li>
                    <li className="">
                        <ArrowLinkExternal text="MY ANGEL PROFILE" link="https://angel.co/u/nav-verma" />
                    </li>
                </ArrowLinkSet>
            </div>
            <span className="mt-12 xl:mt-24 self-center">
                <BigText>CONNECT</BigText>
            </span>
            <address className="mt-6 self-center flex flex-row space-x-9">
                <LogoLinkedin />
                <LogoAngel />
            </address>
        </section>
    )
}

export default ContactSection;
