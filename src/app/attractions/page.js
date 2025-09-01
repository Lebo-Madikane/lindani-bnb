import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import styles from './page.module.scss'
import Card from '../../components/UI/Card/Card'

export default function Highlights() {
    const highlights = [
        {
            id: 1,
            title: "Scenic Mountain Views",
            description: "Wake up to breathtaking mountain vistas from every room. Our elevated location provides panoramic views that change beautifully throughout the day.",
            icon: "🏔️",
            image: "/images/mountain-view.jpg"
        },
        {
            id: 2,
            title: "Locally Sourced Cuisine",
            description: "Experience authentic flavors with ingredients sourced from local farms and markets. Our chef creates memorable dining experiences.",
            icon: "🥗",
            image: "/images/local-cuisine.jpg"
        },
        {
            id: 3,
            title: "Historic Architecture",
            description: "Stay in a beautifully restored historic building that combines old-world charm with modern luxury and contemporary amenities.",
            icon: "🏛️",
            image: "/images/historic-building.jpg"
        },
        {
            id: 4,
            title: "Personalized Experience",
            description: "Our dedicated staff provides personalized attention to every guest, ensuring your unique needs and preferences are met.",
            icon: "⭐",
            image: "/images/personalized-service.jpg"
        }
    ]

    return (
        <>
            <Header />
            <main className={styles.highlights}>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <h2 className={styles.title}>Why Choose Lindani BnB</h2>
                        <p className={styles.subtitle}>
                            Discover what makes us the perfect destination for your next getaway
                        </p>
                    </div>

                    <div className={styles.highlightsGrid}>
                        {highlights.map((highlight, index) => (
                            <div key={highlight.id} className={styles.highlightItem}>
                                <Card
                                    variant="default"
                                    padding="large"
                                    className={`${styles.highlightCard} ${index % 2 === 0 ? styles.leftAlign : styles.rightAlign}`}
                                >
                                    <div className={styles.cardLayout}>
                                        <div className={styles.imageContainer}>
                                            <div className={styles.placeholderImage}>
                                                <span className={styles.icon}>{highlight.icon}</span>
                                                <p>Image Coming Soon</p>
                                            </div>
                                        </div>

                                        <div className={styles.content}>
                                            <h3>{highlight.title}</h3>
                                            <p>{highlight.description}</p>

                                            <div className={styles.highlight}>
                                                <span className={styles.highlightIcon}>✨</span>
                                                <span>Signature Experience</span>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Stats Section */}
                    <div className={styles.statsSection}>
                        <div className={styles.statItem}>
                            <div className={styles.statIcon}>🏆</div>
                            <h3>Award Winning</h3>
                            <p>Recognized for excellence in hospitality</p>
                        </div>

                        <div className={styles.statItem}>
                            <div className={styles.statIcon}>🌍</div>
                            <h3>Eco-Friendly</h3>
                            <p>Committed to sustainable tourism practices</p>
                        </div>

                        <div className={styles.statItem}>
                            <div className={styles.statIcon}>📍</div>
                            <h3>Prime Location</h3>
                            <p>Minutes from major attractions and landmarks</p>
                        </div>

                        <div className={styles.statItem}>
                            <div className={styles.statIcon}>🤝</div>
                            <h3>Local Expertise</h3>
                            <p>Insider knowledge of the best local experiences</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}