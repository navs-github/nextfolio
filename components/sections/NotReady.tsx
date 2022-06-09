import { useInView } from 'react-intersection-observer';

import Layout from '@components/common/Layout';
import TopNav from '@components/common/TopNav';
import BoxHeading from '@components/common/BoxHeading';
import ArrowLinkInternal from '@components/common/ArrowLinkInternal';
import ArrowLinkSet from '@components/common/ArrowLinkSet';
import Footer from '@components/common/Footer';



function NotReady() {

    const [firstRef, inViewFirst] = useInView({
        triggerOnce: true,
        rootMargin: '-50px 0px',
    });

    return (
        <Layout>
            <TopNav />
            <main ref={firstRef} className="mt-20 xl:mt-32 pb-24 flex flex-col items-start" >
                <BoxHeading inView={inViewFirst}>UNDER CONSTRUCTION</BoxHeading>
                <p className="mt-8 xl:mt-12 leading-[180%] opacity-0 animate-fadein">This section is currently undergoing development and testing. I wouldn't publish something that isn't up to my standards.</p>
                <p className="mt-6 xl:mt-8 leading-[180%] opacity-0 animate-fadein">In the meantime, feel free to check out some of the other sections.</p>
                <ArrowLinkSet>
                    <li className="">
                        <ArrowLinkInternal text="ABOUT ME" to="/about" />
                    </li>
                    <li className="">
                        <ArrowLinkInternal text="MY WORK" to="/work" />
                    </li>
                </ArrowLinkSet>
            </main >
            <Footer />
        </Layout>
    );
}

export default NotReady;
