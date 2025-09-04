import Link from 'next/link'
import Image from 'next/image'
import Button from '../UI/Button/Button'
import styles from './Highlights.module.scss'

export default function Highlights() {

    return (
        <section className={styles.highlights}>
            <Image src='/images/HighlightsImage.jpg' className={styles.backgroundImage} alt='Hightlights Background Image' width={550} height={400} />
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>EXPLORE ELLIOTEDALE</h2>
                    <p className={styles.subtitle}>
                        View highlights of nearby attractions
                    </p>
                </div>

                <div className={styles.btnSection}>
                    <Link href="/attractions" >
                        <Button size="large" variant="primary">
                            View Attractions
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}