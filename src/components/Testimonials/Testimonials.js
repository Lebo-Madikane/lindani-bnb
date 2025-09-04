'use client'
import { useState, useEffect } from 'react'
import Card from '../UI/Card/Card'
import styles from './Testimonials.module.scss'

export default function Testimonials() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0)

    const testimonials = [
        {
            id: 1,
            name: "Sipho K.",
            location: "Cape Town, SA",
            rating: 5,
            text: "We hosted a small workshop here and everything was perfect, from the conference space to the catering. Highly recommend.",
            avatar: "SK",
            date: "August 2024"
        },
        {
            id: 2,
            name: "Thandi M.",
            location: "Johannesburg, SA",
            rating: 5,
            text: "The room was very spotless, the bed was so comfortable, and the evironment was relaxed.",
            avatar: "TM",
            date: "July 2024"
        },
        {
            id: 3,
            name: "Nomsa L",
            location: "Eastern Cape, SA",
            rating: 5,
            text: "Friendly staff, fast WI-FI, and the shuttle service made my trip stress free. I'd definetly come back.",
            avatar: "NL",
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
                        Hear what our guests say about their experiences
                    </p>
                </div>


                {/* All Testimonials Grid (Desktop) */}
                <div className={styles.allTestimonials}>
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