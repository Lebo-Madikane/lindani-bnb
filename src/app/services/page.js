import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import styles from './page.module.scss'

export const metadata = {
    title: 'Our Services - Lindani BnB',
    description: 'Discover our premium services including room service, concierge, spa treatments, and more.',
}

export default function ServicesPage() {
    const services = [
        {
            id: 1,
            title: "24/7 Room Service",
            description: "Gourmet meals delivered directly to your room at any time of day or night. Our experienced chefs prepare fresh, delicious meals using locally sourced ingredients.",
            features: ["Available 24/7", "Local ingredients", "Dietary accommodations", "In-room dining setup"],
            price: "Included in stay",
            icon: "🍽️"
        },
        {
            id: 2,
            title: "Personal Concierge",
            description: "Our knowledgeable concierge team helps you discover the best local attractions, book tours, make restaurant reservations, and plan your perfect day.",
            features: ["Local expertise", "Tour bookings", "Restaurant reservations", "Activity planning"],
            price: "Complimentary",
            icon: "🛎️"
        },
        {
            id: 3,
            title: "Spa & Wellness",
            description: "Rejuvenate your body and mind with our full-service spa offering massage therapy, wellness treatments, and relaxation packages.",
            features: ["Swedish massage", "Hot stone therapy", "Aromatherapy", "Couples packages"],
            price: "From R400",
            icon: "💆‍♀️"
        },
        {
            id: 4,
            title: "Airport Transfer",
            description: "Travel in comfort with our luxury vehicle airport pickup and drop-off service. No stress, no hassle - we handle your transportation needs.",
            features: ["Luxury vehicles", "Professional drivers", "Flight tracking", "Meet & greet service"],
            price: "R200 one way",
            icon: "🚗"
        },
        {
            id: 5,
            title: "Laundry Service",
            description: "Keep your clothes fresh and clean with our professional laundry and dry cleaning service, featuring same-day turnaround.",
            features: ["Same-day service", "Dry cleaning", "Pressing included", "Eco-friendly products"],
            price: "From R50 per item",
            icon: "👕"
        },
        {
            id: 6,
            title: "Private Tour Guide",
            description: "Explore hidden gems and experience authentic local culture with our expert private tour guides who know all the best spots.",
            features: ["Cultural tours", "Nature walks", "Historical sites", "Photography tours"],
            price: "From R500 per day",
            icon: "🗺️"
        }
    ]

    return (
        <>
            <Header />
            <main className={styles.servicesPage}>
                {/* Hero Section */}
                <section className={styles.hero}>
                    <div className={styles.container}>
                        <h1>Our Premium Services</h1>
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
                                        {service.icon}
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
                        <button className={styles.ctaButton}>Book Now</button>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}