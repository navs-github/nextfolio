import Layout from '@components/common/Layout'
import TopNav from '@components/common/TopNav'
import Footer from '@components/common/Footer'

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
