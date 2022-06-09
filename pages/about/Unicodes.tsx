//packages
import { useInView } from 'react-intersection-observer';

//components
import Layout from '@components/common/Layout'
import TopNav from '@components/common/TopNav'
import BoxHeading from '@components/common/BoxHeading'
import BigText from '@components/common/BigText'
import ArrowLinkExternal from '@components/common/ArrowLinkExternal'
import Footer from '@components/common/Footer'

//assets
import unicodes_preview_large from '../img/unicodes_preview_large.webp'

function Unicodes() {
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
            <TopNav />
            {/* Intro Section 👋 */}
            <main ref={firstRef} className="mt-20 xl:mt-32 flex flex-col items-start">
                <BoxHeading inView={inViewFirst}>BACKGROUND</BoxHeading>
                <div className={"flex flex-col items-start opacity-0 " + (inViewFirst ? 'animate-fadein' : 'animate-none')}>
                    <p className="mt-8 xl:mt-12 leading-[180%]">A web tool that allows quick access to unique special characters. Implemented with live search for a smooth, one-page experience.</p>
                    <div className="mt-12 xl:mt-16 self-center flex flex-col">
                        <img src={unicodes_preview_large.src} className="object-cover h-96 2xl:h-[500px] p-2 border border-warm" alt="" srcSet="" />
                        <BigText>UNICODES</BigText>
                    </div>
                </div>
            </main>
            <section className="mt-20 xl:mt-40 pb-24 flex flex-col items-start" ref={secondRef}>
                <BoxHeading inView={inViewSecond}>STATUS</BoxHeading>
                <div className={"flex flex-col items-start opacity-0 " + (inViewSecond ? 'animate-fadein' : 'animate-none')}>
                    <p className="mt-8 xl:mt-12 leading-[180%]">I initially built this tool to speed up my own access to certain unicode characters, later deciding to convert it into a website and deploy it for public use. I plan to further convert this tool into a browser plugin.</p>
                    <div className="mt-8 xl:mt-12">
                        <ArrowLinkExternal text="VISIT WEBSITE" link="https://navs-unicodes.vercel.app/"></ArrowLinkExternal>
                    </div>
                </div>
            </section>
            <Footer />
        </Layout>


    )
}

export default Unicodes
