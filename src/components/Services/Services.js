'use client'
import { useState, useRef } from 'react'
import Card from '../UI/Card/Card'
import styles from './Services.module.scss'

export default function Services() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const carouselRef = useRef(null)

    const services = [
        {
            id: 1,
            title: "Room Service",
            description: "24/7 room service with gourmet meals delivered directly to your room. Our experienced chefs prepare fresh, delicious meals.",
            icon: "🍽️"
        },
        {
            id: 2,
            title: "Housekeeping",
            description: "Daily housekeeping service ensuring your room stays pristine throughout your stay with eco-friendly products.",
            icon: "🧹"
        },
        {
            id: 3,
            title: "Concierge",
            description: "Personal concierge service to help you discover local attractions, book tours, and make restaurant reservations.",
            icon: "🛎️"
        },
        {
            id: 4,
            title: "Airport Transfer",
            description: "Complimentary airport pickup and drop-off service in our luxury vehicles for a stress-free arrival and departure.",
            icon: "🚗"
        },
        {
            id: 5,
            title: "Laundry Service",
            description: "Professional laundry and dry cleaning service with same-day turnaround for your convenience.",
            icon: "👕"
        },
        {
            id: 6,
            title: "Tour Guide",
            description: "Expert local tour guides to help you explore hidden gems and experience authentic local culture.",
            icon: "🗺️"
        }
    ]

    const nextSlide = () => {
        const isLastSlide = currentSlide === services.length - 1
        const newSlide = isLastSlide ? 0 : currentSlide + 1
        setCurrentSlide(newSlide)

        if (carouselRef.current) {
            const cardWidth = carouselRef.current.children[0].offsetWidth
            const gap = 16 // 1rem = 16px
            carouselRef.current.scrollTo({
                left: newSlide * (cardWidth + gap),
                behavior: 'smooth'
            })
        }
    }

    const prevSlide = () => {
        const isFirstSlide = currentSlide === 0
        const newSlide = isFirstSlide ? services.length - 1 : currentSlide - 1
        setCurrentSlide(newSlide)

        if (carouselRef.current) {
            const cardWidth = carouselRef.current.children[0].offsetWidth
            const gap = 16
            carouselRef.current.scrollTo({
                left: newSlide * (cardWidth + gap),
                behavior: 'smooth'
            })
        }
    }

    return (
        <section className={styles.services}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Our Services</h2>
                    <p className={styles.subtitle}>
                        We provide exceptional services to make your stay memorable and comfortable
                    </p>
                </div>

                {/* Desktop Grid */}
                <div className={styles.desktopGrid}>
                    {services.map((service) => (
                        <Card key={service.id} variant="primary" padding="large" className={styles.serviceCard}>
                            <div className={styles.cardContent}>
                                <div className={styles.icon}>{service.icon}</div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Mobile Carousel */}
                <div className={styles.mobileCarousel}>
                    <div className={styles.carouselContainer}>
                        <button
                            className={`${styles.carouselBtn} ${styles.prevBtn}`}
                            onClick={prevSlide}
                            aria-label="Previous service"
                        >
                            ‹
                        </button>

                        <div className={styles.carouselWrapper}>
                            <div className={styles.carousel} ref={carouselRef}>
                                {services.map((service, index) => (
                                    <div key={service.id} className={styles.carouselSlide}>
                                        <Card variant="primary" padding="large" className={styles.serviceCard}>
                                            <div className={styles.cardContent}>
                                                <div className={styles.icon}>{service.icon}</div>
                                                <h3>{service.title}</h3>
                                                <p>{service.description}</p>
                                            </div>
                                        </Card>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button
                            className={`${styles.carouselBtn} ${styles.nextBtn}`}
                            onClick={nextSlide}
                            aria-label="Next service"
                        >
                            ›
                        </button>
                    </div>

                    {/* Carousel Dots */}
                    <div className={styles.dots}>
                        {services.map((_, index) => (
                            <button
                                key={index}
                                className={`${styles.dot} ${index === currentSlide ? styles.active : ''}`}
                                onClick={() => {
                                    setCurrentSlide(index)
                                    if (carouselRef.current) {
                                        const cardWidth = carouselRef.current.children[0].offsetWidth
                                        const gap = 16
                                        carouselRef.current.scrollTo({
                                            left: index * (cardWidth + gap),
                                            behavior: 'smooth'
                                        })
                                    }
                                }}
                                aria-label={`Go to service ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}