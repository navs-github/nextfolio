import { useInView } from "react-intersection-observer";
import Image from "next/image";

import Layout from "@components/common/Layout"
import TopNav from "@components/common/TopNav"
import BoxHeading from "@components/common/BoxHeading"
import BigText from "@components/common/BigText"
import ArrowLinkExternal from "@components/common/ArrowLinkExternal"
import Footer from "@components/common/Footer"

import raofolio_preview_large from "@img/raofolio_preview_large.webp";

function Raofolio() {
    const [firstRef, inViewFirst] = useInView({
        triggerOnce: true,
        rootMargin: "-50px 0px",
    });

    const [secondRef, inViewSecond] = useInView({
        triggerOnce: true,
        rootMargin: "-50px 0px",
    });

    return (
        <Layout>
            <TopNav />
            <main ref={firstRef} className="mt-20 xl:mt-32 flex flex-col items-start">
                <BoxHeading inView={inViewFirst}>BACKGROUND</BoxHeading>
                <div className={"flex flex-col items-start opacity-0 " + (inViewFirst ? "animate-fadein" : "animate-none")}>
                    <p className="mt-8 xl:mt-12 leading-[180%]">A fashion model"s online portfolio. Designed with a minimal dark theme to keep the focus on the finer details of the imagery.</p>
                    <div className="mt-12 xl:mt-16 self-center flex flex-col">
                        <div className="relative h-96 2xl:h-[500px] p-2 border border-warm">
                            <Image src={raofolio_preview_large.src} layout="fill" className="object-cover" alt="" />
                        </div>
                        <BigText>RAOFOLIO</BigText>
                    </div>
                </div>
            </main>
            <section className="mt-20 xl:mt-32 pb-24 flex flex-col items-start" ref={secondRef}>
                <BoxHeading inView={inViewSecond}>STATUS</BoxHeading>
                <div className={"flex flex-col items-start opacity-0 " + (inViewSecond ? "animate-fadein" : "animate-none")}>
                    <p className="mt-8 xl:mt-12 leading-[180%]">Using my own design intuition, and with my client"s artistic preferences as guidelines, I ideated, designed, and developed this portfolio in 2020.</p>
                    <div className="mt-8 xl:mt-12">
                        <ArrowLinkExternal text="VISIT WEBSITE" link="https://raofolio.in/"></ArrowLinkExternal>
                    </div>
                </div>
            </section>
            <Footer />
        </Layout>
    )
}

export default Raofolio
