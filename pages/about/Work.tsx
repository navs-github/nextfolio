import { useInView } from 'react-intersection-observer';

import Layout from '@components/Layout';
import TopNav from '@components/TopNav'
import BoxHeading from '@components/BoxHeading'
import Works from '@components/Works'
import Footer from '@components/Footer'



function Work() {
    const [workRef, inViewWork] = useInView({
        triggerOnce: true,
        rootMargin: '-50px 0px',
    });


    return (
        <Layout>
            <TopNav></TopNav>
            <main ref={workRef} className="mt-20 xl:mt-32 pb-24 flex flex-col items-start">
                <BoxHeading inView={inViewWork}>PROECTS</BoxHeading>
                <Works inView={inViewWork}></Works>
            </main>
            <Footer />
        </Layout>
    );
}

export default Work;
