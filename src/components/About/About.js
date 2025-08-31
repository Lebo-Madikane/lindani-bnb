
import styles from './About.module.scss'

export default function About() {
    return (
        <section className={styles.about}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.title}>About Lindani BnB</h2>
                    <p className={styles.subtitle}>Your Home Away From Home</p>
                </div>

                <div className={styles.imageContainer}>
                    <div className={styles.placeholderImage}>
                        <p>About Us</p>
                        <p>Image</p>
                    </div>
                </div>

                <div className={styles.content}>
                    <div className={styles.text}>
                        <p>
                            Welcome to Lindani BnB, where luxury meets comfort in a serene
                            natural setting. Our beautiful bed and breakfast has been
                            thoughtfully designed to provide you with an unforgettable
                            experience.
                        </p>
                        <p>
                            Nestled in the heart of nature, we offer our guests a perfect
                            blend of modern amenities and rustic charm. Every detail has
                            been carefully crafted to ensure your stay is both comfortable
                            and memorable.
                        </p>
                        <p>
                            Whether you're here for a romantic getaway, family vacation,
                            or business retreat, our dedicated team is committed to making
                            your stay exceptional.
                        </p>
                    </div>

                    <div className={styles.stats}>
                        <div className={styles.stat}>
                            <h3>5+</h3>
                            <p>Years of Excellence</p>
                        </div>
                        <div className={styles.stat}>
                            <h3>200+</h3>
                            <p>Happy Guests</p>
                        </div>
                        <div className={styles.stat}>
                            <h3>98%</h3>
                            <p>Satisfaction Rate</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}