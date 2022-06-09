import Layout from '@components/Layout'
import TopNav from '@components/TopNav'
import Footer from '@components/Footer'

import ContactSection from '@components/sections/ContactSection';

function Contact() {

    return (
        <Layout>
            <TopNav />
            <ContactSection className="mt-20 xl:mt-32" />
            <Footer />
        </Layout>
    )
}

export default Contact;
