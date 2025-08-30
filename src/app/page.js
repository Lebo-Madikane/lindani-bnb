import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Services from '../components/Services/Services'
import Amenities from '@/components/Amenities/Amenities'
import Highlights from '@/components/Highlights/Highlights'
import Testimonials from '@/components/Testimonials/Testimonials'
import ContactForm from '@/components/ContactForm/ContactForm'
import Footer from '@/components/Footer/Footer'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Amenities />
        <Highlights />
        <Testimonials />
        <ContactForm />
        <Footer />
      </main>
    </>
  )
}