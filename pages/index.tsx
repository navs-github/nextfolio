import React from 'react'

import Hero from '@components/pages/sections/Hero';
import Superpowers from '@components/pages/sections/Superpowers';
import WorkSection from '@components/pages/sections/WorkSection'
import ContactSection from '@components/pages/sections/ContactSection'

import Layout from '@components/Layout'
import TopNav from '@components/TopNav'
import Footer from '@components/Footer'

type Props = {

}

function Landing({ }: Props) {
    return (
        <Layout>
            <TopNav className="pt-8 xl:pt-12" /> {/* pull out connecting layout styles in class name */}
            <Hero className="mt-20 xl:mt-32" /> {/* eg. pull mt-12 py-24 */}
            <Superpowers className="mt-64 2xl:mt-72" />
            <WorkSection className="mt-64 2xl:mt-72" />
            <ContactSection className="opacity-0 mt-64 2xl:mt-72" /> {/* like this */}
            <Footer className="-mx-6 px-6 xl:-mx-44 xl:px-44 2xl:px-56 2xl:-mx-56 py-12 xl:py-24" />
        </Layout>
    );
}

export default Landing;

