import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import styles from './page.module.scss'
import Card from '../../components/UI/Card/Card'
import Image from 'next/image'

export default function Highlights() {
    const highlights = [
        {
            id: 1,
            title: "Lubanzi Beach",
            description: "The Wild Coast of South Africa is special. It is raw, dramatic, and breath-takingly beautiful. Lubanzi Beach is one of its little secrets – an unspoilt retreat from the real world; where white sands, clear blue skies, and the verdant greenery of the Transkei are celebrated in one very special spot.",
            image: "/images/Lubanzi-Beach.jpg",
            distance: "72,5 km",
        },
        {
            id: 2,
            title: "Hole in the Wall",
            description: "The hills all around the Hole in the Wall are fantastic to climb and explore (often accompanied by one or two of the local beach dogs that are usually tame and playful, eager to welcome tourists to their home). There is also a grassy area where families can picnic, play, or simply relax as they enjoy the pure prettiness around them.",
            image: "/images/Hole_In_The_Wall.jpg",
            distance: "70,7 km",
        },
        {
            id: 3,
            title: "Hluleka Nature Reserve",
            description: "This Nature Reserve is a diverse ecosystem, combining lush indigenous forests, beautiful rocky coastline, unspoilt beaches and rolling grassland.",
            image: "/images/Hluleka-Nature-Reserve.jpg",
            distance: "101,3 km",
        },
        {
            id: 4,
            title: "Nelson Mandela Museum",
            description: "The Nelson Mandela Museum offers a memorable cultural experience that gives insights into the life of Nelson Mandela, with guided tours and a heritage trail that follow his footsteps. Day) from 9h00 – 12h00 noon.",
            image: "/images/Nelson-Mandela-Museum.jpg",
            distance: "58,0 km",
        }
    ]

    return (
        <>
            <Header />
            <main className={styles.highlights}>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <h2 className={styles.title}>Nearby Activities & Attractions</h2>
                        <p className={styles.subtitle}>
                            Discover what makes Eastern Cape the perfect destination for your next getaway
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
                                                <Image className={styles.images} src={highlight.image} width={550} height={400} />
                                            </div>
                                        </div>

                                        <div className={styles.content}>
                                            <h3>{highlight.title}</h3>
                                            <p>{highlight.description}</p>

                                            <div className={styles.highlight}>
                                                <span className={styles.highlightIcon}>📍</span>
                                                <span>{highlight.distance}</span>
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