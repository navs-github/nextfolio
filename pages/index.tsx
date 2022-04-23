import Hero from "@components/pages/sections/Hero"
import Superpowers from '@components/pages/sections/Superpowers';
import WorkSection from '@components/pages/sections/WorkSection'
import ContactSection from '@components/pages/sections/ContactSection'

import Layout from '@components/Layout'
import TopNav from '@components/TopNav'
import Footer from '@components/Footer'

function Landing() {
    return (
        <Layout>
            <TopNav />
            <Hero />
            <Superpowers />
            <WorkSection />
            <ContactSection className="mt-64 2xl:mt-72" />
            <Footer />
        </Layout>
    );
}

export default Landing;
