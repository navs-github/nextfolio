import React from 'react'
import { useInView } from 'react-intersection-observer';



import BoxHeading from '../../BoxHeading'
import BigText from '../../BigText'
import Works from '../../Works'

function Work() {
    const [sectionRef, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-100px 0px',
    });
    return (
        <section ref={sectionRef} className="mt-64 2xl:mt-72 flex flex-col items-start">
            <BoxHeading inView={inView}>PROJECTS</BoxHeading>
            <Works inView={inView}></Works>
            <span className="mt-12 xl:mt-24 self-center">
                <BigText>WORK</BigText>
            </span>
        </section>
    )
}

export default Work
