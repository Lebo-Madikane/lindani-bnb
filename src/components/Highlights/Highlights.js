import Link from 'next/link'
import Image from 'next/image'
import Button from '../UI/Button/Button'
import styles from './Highlights.module.scss'

export default function Highlights() {

    return (
        <section className={styles.highlights}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>EXPLORE ELLIOTEDALE</h2>
                    <p className={styles.subtitle}>
                        View highlights of nearby attractions
                    </p>
                </div>

                <div className={styles.btnSection}>
                    <Link href="/attractions" >
                        <Button size="large" variant="secondary">
                            View Attractions
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}