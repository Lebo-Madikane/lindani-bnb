'use client'
import { useState, useEffect } from 'react'
import Card from '../UI/Card/Card'
import styles from './Testimonials.module.scss'

export default function Testimonials() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0)

    const testimonials = [
        {
            id: 1,
            name: "Sarah Johnson",
            location: "Cape Town, SA",
            rating: 5,
            text: "Absolutely incredible experience! The mountain views from our room were breathtaking, and the staff went above and beyond to make our anniversary special. The locally sourced breakfast was phenomenal.",
            avatar: "SJ",
            date: "August 2024"
        },
        {
            id: 2,
            name: "Mike & Lisa Wilson",
            location: "Johannesburg, SA",
            rating: 5,
            text: "Perfect family getaway! Our kids loved the pool, and we appreciated the historic charm of the building. The concierge helped us discover amazing local attractions we never would have found.",
            avatar: "MW",
            date: "July 2024"
        },
        {
            id: 3,
            name: "James Thompson",
            location: "London, UK",
            rating: 5,
            text: "Outstanding service and attention to detail. The personalized recommendations from the staff made our South African adventure unforgettable. Will definitely be returning!",
            avatar: "JT",
            date: "June 2024"
        },
        {
            id: 4,
            name: "Maria Rodriguez",
            location: "Madrid, Spain",
            rating: 5,
            text: "The perfect blend of luxury and authenticity. The spa treatments were divine, and the restaurant exceeded all expectations. This hidden gem is now our favorite place to stay.",
            avatar: "MR",
            date: "May 2024"
        },
        {
            id: 5,
            name: "David & Emma Chen",
            location: "Sydney, Australia",
            rating: 5,
            text: "Exceeded every expectation! The eco-friendly practices align with our values, and the historic architecture tells such a beautiful story. Can't wait to return with friends.",
            avatar: "DC",
            date: "April 2024"
        }
    ]

    // Auto-rotate testimonials
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial((prev) =>
                prev === testimonials.length - 1 ? 0 : prev + 1
            )
        }, 5000) // Change every 5 seconds

        return () => clearInterval(interval)
    }, [testimonials.length])

    const renderStars = (rating) => {
        return '★'.repeat(rating) + '☆'.repeat(5 - rating)
    }

    return (
        <section className={styles.testimonials}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Guest Testimonials</h2>
                    <p className={styles.subtitle}>
                        Hear what our guests say about their unforgettable experiences
                    </p>
                </div>

                {/* Featured Testimonial */}
                <div className={styles.featuredTestimonial}>
                    <Card variant="accent" padding="large" className={styles.featuredCard}>
                        <div className={styles.featuredContent}>
                            <div className={styles.stars}>
                                {renderStars(testimonials[currentTestimonial].rating)}
                            </div>
                            <blockquote className={styles.quote}>
                                "{testimonials[currentTestimonial].text}"
                            </blockquote>
                            <div className={styles.author}>
                                <div className={styles.avatar}>
                                    {testimonials[currentTestimonial].avatar}
                                </div>
                                <div className={styles.authorInfo}>
                                    <h4>{testimonials[currentTestimonial].name}</h4>
                                    <p>{testimonials[currentTestimonial].location}</p>
                                    <span>{testimonials[currentTestimonial].date}</span>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Testimonial Navigation */}
                <div className={styles.navigation}>
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            className={`${styles.navDot} ${index === currentTestimonial ? styles.active : ''}`}
                            onClick={() => setCurrentTestimonial(index)}
                            aria-label={`View testimonial ${index + 1}`}
                        />
                    ))}
                </div>

                {/* All Testimonials Grid (Desktop) */}
                <div className={styles.allTestimonials}>
                    <h3 className={styles.gridTitle}>More Happy Guests</h3>
                    <div className={styles.testimonialsGrid}>
                        {testimonials.slice(0, 3).map((testimonial) => (
                            <Card key={testimonial.id} variant="default" padding="medium" className={styles.testimonialCard}>
                                <div className={styles.cardContent}>
                                    <div className={styles.stars}>
                                        {renderStars(testimonial.rating)}
                                    </div>
                                    <p className={styles.testimonialText}>
                                        "{testimonial.text.length > 120 ? testimonial.text.substring(0, 120) + '...' : testimonial.text}"
                                    </p>
                                    <div className={styles.authorSmall}>
                                        <div className={styles.avatarSmall}>
                                            {testimonial.avatar}
                                        </div>
                                        <div>
                                            <h5>{testimonial.name}</h5>
                                            <span>{testimonial.location}</span>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}