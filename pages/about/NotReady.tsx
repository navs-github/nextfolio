//packages
import { useInView } from 'react-intersection-observer';

//components
import Layout from '@components/Layout'
import TopNav from '@components/TopNav'
import BoxHeading from '@components/BoxHeading'
import ArrowLinkInternal from '@components/ArrowLinkInternal';
import Footer from '@components/Footer'



function NotReady() {
    //interesction observers for each section
    const [firstRef, inViewFirst] = useInView({
        triggerOnce: true,
        rootMargin: '-50px 0px',
    });


    return (
        <Layout>
            < TopNav ></TopNav >
            {/* Intro Section 👋 */}
            < main ref={firstRef} className="mt-20 xl:mt-32 pb-24 flex flex-col items-start" >
                <BoxHeading inView={inViewFirst}>UNDER CONSTRUCTION</BoxHeading>
                <p className="mt-8 xl:mt-12 leading-[180%] opacity-0 animate-fadein">This section is currently undergoing development and testing. I wouldn't publish something that isn't up to my standards.</p>
                <p className="mt-6 xl:mt-8 leading-[180%] opacity-0 animate-fadein">In the meantime, feel free to check out some of the other sections.</p>
                <ul className="mt-8 xl:mt-12 space-y-4">
                    <li className="">
                        <ArrowLinkInternal text="ABOUT ME" to="/about"></ArrowLinkInternal>
                    </li>
                    <li className="">
                        <ArrowLinkInternal text="MY WORK" to="/work"></ArrowLinkInternal>
                    </li>
                </ul>
            </main >
            <Footer />
        </Layout>
    );
}

export default NotReady;
