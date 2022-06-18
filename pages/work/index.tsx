
import Project from '@components/common/Project'

import enroller_preview from '@img/enroller_preview.webp'
import unicodes_preview from '@img/unicodes_preview.webp'
import raofolio_preview from '@img/raofolio_preview.webp'


import { useInView } from 'react-intersection-observer';

import Layout from '@components/common/Layout'
import TopNav from '@components/common/TopNav'
import BoxHeading from '@components/common/BoxHeading'
import Footer from '@components/common/Footer'

type Props = {}

function Index({ }: Props) {

    const [sectionRef, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-50px 0px',
    });

    return (
        <Layout>
            <TopNav></TopNav>
            <article className={"mt-8 xl:mt-24 flex flex-col space-y-36 xl:space-y-52 leading-[160%] opacity-0 " + (true ? 'animate-fadein' : 'animate-none')}>
                <Project
                    title="Raofolio"
                    body="A fashion model's online portfolio. Designed with a minimal dark theme to keep the focus on the finer details of the imagery."
                    thumb={raofolio_preview}
                    to="work/projects/raofolio"
                    link="https://raofolio.in"
                />
                <Project
                    title="Unicodes"
                    body="A web tool that allows quick access to unique special characters. Implemented with live search for a smooth, one-page experience."
                    thumb={unicodes_preview}
                    to="work/projects/unicodes"
                    link="https://navs-unicodes.vercel.app/"
                />
                <Project
                    title="Enroller"
                    body="A university SaaS app that makes administrative tasks easy for students by simplifying complex processes such as course management and tuition payment."
                    thumb={enroller_preview}
                    to="work/projects/enroller"
                />
            </article >
            <Footer className="mt-36" />
        </Layout>
    )
}

export default Index;
