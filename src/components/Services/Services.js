'use client'
import { useState, useRef } from 'react'
import Card from '../UI/Card/Card'
import styles from './Services.module.scss'
import Image from 'next/image'

export default function Services() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const carouselRef = useRef(null)

    const services = [
        {
            id: 1,
            title: "Accommodation",
            description: "Enjoy single or sharing stylish en-suite rooms designed for comfort, offering modern amenities and a peaceful, home-like atmosphere.",
            icon: "🏠",
            image: "/images/Accommodation.jpg"
        },
        {
            id: 2,
            title: "Catering",
            description: "Choose from delicious catered meals or enjoy independence with our fully equipped self-catering options.",
            icon: "🍽️",
            image: "/images/Catering.jpg"
        },
        {
            id: 3,
            title: "Laundry Service",
            description: "On-site laundry services available for your convenience, keeping your stay fresh, clean, and stress-free.",
            icon: "👕",
            image: "/images/Laundry.jpg"
        },
        {
            id: 4,
            title: "Shuttle Services",
            description: "Convenient, reliable shuttle service for guests, ensuring safe travel to nearby attractions and essential destinations.",
            icon: "🚗",
            image: "/images/Shuttle.jpg"
        },
        {
            id: 5,
            title: "Goods & Services",
            description: "We provide a reliable supply of essential goods and services, ensuring guests’ needs are always met.",
            icon: "🛍️",
            image: "/images/GoodsAndServices.jpg"
        },
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
                        At Lindani BnB, we go beyond offering a place to stay.
                        We create an experience that blends comfort, convenience, and care.
                    </p>
                </div>

                {/* Desktop Grid */}
                <div className={styles.desktopGrid}>
                    {services.map((service) => (
                        <Card key={service.id} variant="primary" padding="large" className={styles.serviceCard}>
                            <div className={styles.cardContent}>
                                <Image alt='Services Image' src={service.image} className={styles.images} width={550} height={400} />
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
                                                <Image alt='Service Image' src={service.image} className={styles.images} width={550} height={400} />
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