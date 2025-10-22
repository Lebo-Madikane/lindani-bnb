import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import styles from './page.module.scss'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
    title: 'Our Services - Lindani BnB',
    description: 'Discover our premium services including room service, concierge, spa treatments, and more.',
}

export default function ServicesPage() {
    const services = [
        {
            id: 1,
            title: "Accommodation",
            description: "Enjoy single or sharing stylish en-suite rooms designed for comfort, offering modern amenities and a peaceful, home-like atmosphere.",
            features: ["Bed Only", "Bed & Breakfast", "Couple & Breakfast", "2 Double Beds(Breakfast)"],
            price: "Subject to availability",
            icon: "🍽️",
            image: "/images/Accommodation.jpg"
        },
        {
            id: 2,
            title: "Catering",
            description: "Choose from delicious catered meals or enjoy independence with our fully equipped self-catering options.",
            features: ["Breakfast", "Lunch", "Lunch Pack", "Dinner"],
            price: "Soft Drink & Dessert",
            icon: "🛎️",
            image: "/images/Catering.jpg"
        },
        {
            id: 3,
            title: "Laundry Service",
            description: "On-site laundry services available for your convenience, keeping your stay fresh, clean, and stress-free.",
            features: ["Same-day service", "Dry cleaning", "Pressing included", "Eco-friendly products"],
            price: "Weighed service",
            icon: "👕",
            image: "/images/Laundry.jpg"
        },
        {
            id: 4,
            title: "Shuttle Services",
            description: "Convenient, reliable shuttle service for guests, ensuring safe travel to nearby attractions and essential destinations.",
            features: ["Reliable vehicles", "Professional drivers", "Air-condition", "Meet & greet service"],
            price: "Per km",
            icon: "🚗",
            image: "/images/Shuttle.jpg"
        },
        {
            id: 5,
            title: "Goods & Services",
            description: "We provide a reliable supply of essential goods and services, ensuring guests’ needs are always met.",
            features: ["Information Desk", "Shopping", "Nearby errands", "Bookings"],
            price: "Per Service",
            icon: "🗺️",
            image: "/images/GoodsAndServices.jpg"
        },
    ]

    return (
        <>
            <Header />
            <main className={styles.servicesPage}>
                {/* Hero Section */}
                <section className={styles.hero}>
                    <div className={styles.container}>
                        <h1>Our Services</h1>
                        <p>Experience exceptional hospitality with our comprehensive range of services designed to make your stay unforgettable.</p>
                    </div>
                </section>

                {/* Services Grid */}
                <section className={styles.servicesSection}>
                    <div className={styles.container}>
                        <div className={styles.servicesGrid}>
                            {services.map((service) => (
                                <div key={service.id} className={styles.serviceCard}>
                                    <div className={styles.serviceIcon}>
                                        <Image alt='Services Image' className={styles.images} src={service.image} width="550" height="400"/>
                                    </div>
                                    <h2>{service.title}</h2>
                                    <p className={styles.description}>{service.description}</p>

                                    <div className={styles.features}>
                                        <h3>Features:</h3>
                                        <ul>
                                            {service.features.map((feature, index) => (
                                                <li key={index}>✓ {feature}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className={styles.pricing}>
                                        <strong>{service.price}</strong>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className={styles.cta}>
                    <div className={styles.container}>
                        <h2>Ready to Experience Our Services?</h2>
                        <p>Book your stay today and enjoy all our premium services.</p>
                        <Link href="/#contactForm" ><button className={styles.ctaButton}>Book Now</button></Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}