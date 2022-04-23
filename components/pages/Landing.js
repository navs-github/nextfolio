//sections
import Hero from './sections/Hero';
import Superpowers from './sections/Superpowers';
import WorkSection from './sections/WorkSection'
import ContactSection from './sections/ContactSection'

//components
import Layout from '../Layout'
import TopNav from '../TopNav'
import Footer from '../Footer'

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
