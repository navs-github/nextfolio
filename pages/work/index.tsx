import { useInView } from 'react-intersection-observer';

import Layout from '@components/common/Layout'
import TopNav from '@components/common/TopNav'
import BoxHeading from '@components/common/BoxHeading'
import Footer from '@components/common/Footer'

type Props = {}

function index({ }: Props) {

    const [sectionRef, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-50px 0px',
    });

    return (
        <Layout>
            <TopNav></TopNav>
            <section ref={sectionRef} className="first-section">
                <BoxHeading
                    className=""
                    inView={inView}
                    slug="MY WORK"
                />
                <div className="first-section-content">
                    <p className="body">
                        split components and projects
                    </p>
                </div>
                <BoxHeading
                    className="mt-between-sections"
                    inView={inView}
                    slug="PROJECTS"
                />
                <div className="first-section-content">
                    <p className="body">
                        split components and projects
                    </p>
                </div>
                <BoxHeading
                    className="mt-between-sections"
                    inView={inView}
                    slug="COMPONENTS"
                />
                <div className="first-section-content">
                    <p className="body">split components and projects</p>
                </div>
            </section>
            <Footer />
        </Layout>
    )
}

export default index
