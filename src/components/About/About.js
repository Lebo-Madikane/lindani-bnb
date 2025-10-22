
import Image from 'next/image'
import styles from './About.module.scss'

export default function About() {
    return (
        <section id="about" className={styles.about}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.title}>About Us</h2>
                    <p className={styles.subtitle}>Nestled in the hills of Elliotdale, Lindani BnB offers warm hospitality, stylish comfort, and a touch of home in the Eastern Cape. Founded and proudly owned by Lindani Mahlungu.</p>
                </div>

                <div className={styles.imageContainer}>
                    <div className={styles.placeholderImage}>
                        <Image src='/images/Accommodation.jpg' alt='About Us Image' className={styles.aboutImage} width={550} height={400} priority={true} />
                    </div>
                </div>

                <div className={styles.content}>
                    <div className={styles.text}>
                        <p>
                            Whether you’re here for leisure, business, or a quick stop along your journey,
                            our en-suite bedrooms  and self-catering unit options promise an unforgettable stay.
                        </p>
                        <p>
                            At Lindani BnB, we believe that travel should feel like coming home,
                            with a view, a smile, and a little bit of indulgence.
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