import React from 'react'

import Hero from '@components/sections/Hero';
import Superpowers from '@components/sections/Superpowers';
import WorkSection from '@components/sections/WorkSection'
import ContactSection from '@components/sections/ContactSection'

import Layout from '@components/common/Layout'
import TopNav from '@components/common/TopNav'
import Footer from '@components/common/Footer'

type Props = {

}

function Landing({ }: Props) {
    return (
        <>
            <Layout>
                <TopNav className="pt-8 xl:pt-12" /> {/* pull out connecting layout styles in class name */}
                <Hero className="mt-20 xl:mt-24" /> {/* eg. pull mt-12 py-24 */}
                <Superpowers className="mt-64 2xl:mt-72" />
                <WorkSection className="mt-64 2xl:mt-72" />
                <ContactSection className="mt-64 2xl:mt-72" /> {/* like this */}
                <Footer />
            </Layout>
        </>
    );
}

export default Landing;

