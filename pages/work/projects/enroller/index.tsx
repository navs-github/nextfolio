//packages
import { useInView } from 'react-intersection-observer';

//components
import Layout from '@components/common/Layout'
import TopNav from '@components/common/TopNav'
import BoxHeading from '@components/common/BoxHeading'
import BigText from '@components/common/BigText'
import ArrowLinkInternal from "@components/common/ArrowLinkInternal"
import Footer from "@components/common/Footer"

//assets
import enroller_preview_large from '../img/enroller_preview_large.webp'


function Enroller() {
    const [firstRef, inViewFirst] = useInView({
        triggerOnce: true,
        rootMargin: '-50px 0px',
    });
    const [secondRef, inViewSecond] = useInView({
        triggerOnce: true,
        rootMargin: '-50px 0px',
    });
    return (
        <Layout>
            <TopNav></TopNav>
            {/* Intro Section 👋 */}
            <main ref={firstRef} className="mt-20 xl:mt-32 flex flex-col items-start">
                <BoxHeading inView={inViewFirst}>BACKGROUND</BoxHeading>
                <div className={"flex flex-col items-start opacity-0 " + (inViewFirst ? 'animate-fadein' : 'animate-none')}>
                    <p className="mt-8 xl:mt-12 leading-[180%]">Enroller is a university SaaS app that makes administrative tasks easy for students by simplifying complex processes such as course management and tuition payment.</p>
                    <div className="mt-12 xl:mt-16 self-center flex flex-col">
                        <img src={enroller_preview_large.src} className="object-cover h-96 2xl:h-[500px] p-2 border border-warm" alt="" srcSet="" />
                        <BigText>ENROLLER</BigText>
                    </div>
                </div>
            </main>
            <section className="mt-20 xl:mt-40 pb-24 flex flex-col items-start" ref={secondRef}>
                <BoxHeading inView={inViewSecond}>STATUS</BoxHeading>
                <div className={"flex flex-col items-start opacity-0 " + (inViewSecond ? 'animate-fadein' : 'animate-none')}>
                    <p className="mt-8 xl:mt-12 leading-[180%]">I ideated this concept in 2020, disappointed by the lack of UX focus in current industry solutions. This project is currently undergoing its final round of design iterations before progressing into development.</p>
                    <div className="mt-8 xl:mt-12">
                        <ArrowLinkInternal text="PAGE PREVIEWS" to="/process"></ArrowLinkInternal>
                    </div>
                </div>
            </section>
            <Footer />
        </Layout>
    )
}

export default Enroller
