import Link from 'next/link'
import Button from '../UI/Button/Button'
import styles from './Hero.module.scss'
import Image from 'next/image'

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        Welcome to<br/> <span>LINDANI BNB</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Your home, away from home
                        in Elliotdale, Eastern Cape
                    </p>
                    <div className={styles.buttons}>
                        <Link href='/#contactForm'>
                            <Button size="large" variant="primary">
                                Book Now
                            </Button>
                        </Link>
                        <Link href='/services'>
                            <Button size="large" variant="secondary">
                                View Rooms
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <div className={styles.placeholderImage}>
                        <Image src="/images/HeroImg.png" className={styles.heroImage} alt="Hero Image" width={550} height={400} priority={true} />
                    </div>
                </div>
            </div>
        </section>
    )
}