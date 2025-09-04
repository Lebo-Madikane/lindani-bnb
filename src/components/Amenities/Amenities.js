import Link from 'next/link'
import Card from '../UI/Card/Card'
import styles from './Amenities.module.scss'

export default function Amenities() {
    const amenities = [
        {
            id: 1,
            title: "Free WiFi",
            description: "High-speed wireless internet throughout the property",
            icon: "📶",
            featured: false
        },
        {
            id: 2,
            title: "Swimming Pool",
            description: "Outdoor heated pool with mountain views",
            icon: "🏊‍♂️",
            featured: true
        },
        {
            id: 3,
            title: "Spa & Wellness",
            description: "Full-service spa with massage and wellness treatments",
            icon: "💆‍♀️",
            featured: true
        },
        {
            id: 4,
            title: "Television",
            description: "Entertainment available",
            icon: "📺",
            featured: false
        },
        {
            id: 5,
            title: "Restaurant",
            description: "Fine dining restaurant with local and international cuisine",
            icon: "🍽️",
            featured: true
        },
        {
            id: 6,
            title: "Private Parking",
            description: "Complimentary secure parking for all guests",
            icon: "🚗",
            featured: false
        },
        {
            id: 7,
            title: "Braai Area",
            description: "Beautiful outdoor terrace with garden views",
            icon: "🥩",
            featured: false
        },
        {
            id: 8,
            title: "Conference Room",
            description: "Professional meeting space for business travelers",
            icon: "💼",
            featured: false
        },
        {
            id: 9,
            title: "Pet Friendly",
            description: "Welcome your furry friends with special pet amenities",
            icon: "🐕",
            featured: false
        }
    ]

    const featuredAmenities = amenities.filter(amenity => amenity.featured)
    const regularAmenities = amenities.filter(amenity => !amenity.featured)

    return (
        <section className={styles.amenities}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Amenities</h2>
                    <p className={styles.subtitle}>
                        See what’s included
                    </p>
                </div>

                {/* Regular Amenities */}
                <div className={styles.regularSection}>
                    <div className={styles.regularGrid}>
                        {regularAmenities.map((amenity) => (
                            <Card
                                key={amenity.id}
                                variant="default"
                                padding="medium"
                                className={styles.regularCard}
                            >
                                <div className={styles.cardContentCompact}>
                                    <div className={styles.icon}>{amenity.icon}</div>
                                    <div className={styles.text}>
                                        <h4>{amenity.title}</h4>
                                        <p>{amenity.description}</p>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className={styles.cta}>
                    <div className={styles.ctaContent}>
                        <h3>Experience All Our Amenities</h3>
                        <p>Ready to enjoy comfort at its finest?</p>
                        <div className={styles.ctaButtons}>
                            <Link href="/#contactForm">
                                <button className={styles.primaryBtn}>Book Your Stay</button>
                            </Link>
                            <Link href="/services">
                                <button className={styles.secondaryBtn}>View Services</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}