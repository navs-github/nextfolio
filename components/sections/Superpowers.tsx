import React from 'react'
import { useInView } from 'react-intersection-observer';

import BoxHeading from '@components/common/BoxHeading'
import BigText from '@components/common/BigText'

import LogoDribbble from '@components/logos/LogoDribbble'
import LogoGithub from '@components/logos/LogoGithub'

interface Props {
    className?: string;
}

function Superpowers({ className }: Props) {
    const [sectionRef, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-100px 0px',
    });
    return (
        <section ref={sectionRef} className={`${className}`}>
            <div className="flex flex-col items-start text-base xl:text-2xl 2xl:text-3xl">
                <BoxHeading inView={inView}>SUPERPOWERS</BoxHeading>
                <div className={"mt-7 xl:mt-12 w-full grid grid-cols-2 gap-y-10 xl:flex xl:flex-row xl:justify-between leading-[160%] opacity-0 " + (inView ? 'animate-fadein' : 'animate-none')}>
                    <ul className="group flex flex-col space-y-5 xl:space-y-10">
                        <li className="">UX <span className="font-lora font-bold group-hover:text-theme-accent">Design</span></li>
                        <li className="">Interface Design</li>
                        <li className="">Figma Mastery</li>
                    </ul>
                    <ul className="group flex flex-col space-y-5 xl:space-y-10">
                        <li className=" whitespace-nowrap"><span className="group-hover:text-theme-accent font-lora font-bold">Front-end</span> Architecture</li>
                        <li className="">React Development</li>
                        <li className="">CSS Mastery</li>
                    </ul>
                    <ul className="group flex flex-col space-y-5 xl:space-y-10">
                        <li className=""><span className="group-hover:text-theme-accent font-lora font-bold">Art</span> Direction</li>
                        <li className="">Photography</li>
                    </ul>
                </div>
                <span className="mt-12 xl:mt-24 self-center">
                    <BigText>VERSATILITY</BigText>
                </span>
                <address className="mt-4 xl:mt-6 self-center flex flex-row space-x-6 xl:space-x-9">
                    <LogoGithub></LogoGithub>
                    <LogoDribbble></LogoDribbble>
                </address>
            </div>
        </section>
    )
}

export default Superpowers
