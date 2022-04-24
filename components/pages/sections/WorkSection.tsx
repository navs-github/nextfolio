import React from 'react'
import { useInView } from 'react-intersection-observer';



import BoxHeading from '../../BoxHeading'
import BigText from '../../BigText'
import Works from '../../Works'

interface Props {
    className?: string;
}

function Work({ className }: Props) {
    const [sectionRef, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-100px 0px',
    });
    return (
        <section ref={sectionRef} className={`${className}`}>
            <div className="flex-col-start">
                <BoxHeading inView={inView}>PROJECTS</BoxHeading>
                <Works inView={inView}></Works>
                <span className="mt-12 xl:mt-24 self-center">
                    <BigText>WORK</BigText>
                </span>
            </div>
        </section>
    )
}

export default Work
