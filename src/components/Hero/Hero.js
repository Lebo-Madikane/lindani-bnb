import Button from '../UI/Button/Button'
import styles from './Hero.module.scss'

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        Welcome to <span>Lindani BnB</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Experience luxury and comfort in the heart of nature.
                        Your perfect getaway awaits at our beautiful bed and breakfast.
                    </p>
                    <div className={styles.buttons}>
                        <Button size="large" variant="primary">
                            Book Now
                        </Button>
                        <Button size="large" variant="secondary">
                            View Rooms
                        </Button>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <div className={styles.placeholderImage}>
                        <p>Hero Image</p>
                        <p>Coming Soon</p>
                    </div>
                </div>
            </div>
        </section>
    )
}