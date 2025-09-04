'use client'
import { useState } from 'react'
import Button from '../UI/Button/Button'
import Card from '../UI/Card/Card'
import styles from './ContactForm.module.scss'

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        checkIn: '',
        checkOut: '',
        guests: '2',
        roomType: 'standard',
        message: ''
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState(null)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate form submission
        try {
            await new Promise(resolve => setTimeout(resolve, 2000))
            setSubmitStatus('success')
            setFormData({
                name: '', email: '', phone: '', checkIn: '', checkOut: '',
                guests: '2', roomType: 'standard', message: ''
            })
        } catch (error) {
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section id='contactForm' className={styles.contactForm}>
            <div className={styles.container}>
                <div className={styles.formSection}>
                    <div className={styles.formContent}>
                        <h2 className={styles.title}>Book Your Stay</h2>
                        <p className={styles.subtitle}>
                            Ready to experience Lindani BnB? Send us your details and we'll get back to you within 24 hours.
                        </p>

                        <Card variant="primary" padding="large" className={styles.formCard}>
                            <form onSubmit={handleSubmit} className={styles.form}>
                                {/* Personal Information */}
                                <div className={styles.formGroup}>
                                    <h3 className={styles.groupTitle}>Personal Information</h3>
                                    <div className={styles.row}>
                                        <div className={styles.field}>
                                            <label htmlFor="name">Full Name *</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                placeholder="Enter your full name"
                                            />
                                        </div>
                                        <div className={styles.field}>
                                            <label htmlFor="email">Email Address *</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                placeholder="your.email@example.com"
                                            />
                                        </div>
                                    </div>
                                    <div className={styles.field}>
                                        <label htmlFor="phone">Phone Number</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+27 123 456 7890"
                                        />
                                    </div>
                                </div>

                                {/* Booking Details */}
                                <div className={styles.formGroup}>
                                    <h3 className={styles.groupTitle}>Booking Details</h3>
                                    <div className={styles.row}>
                                        <div className={styles.field}>
                                            <label htmlFor="checkIn">Check-in Date *</label>
                                            <input
                                                type="date"
                                                id="checkIn"
                                                name="checkIn"
                                                value={formData.checkIn}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className={styles.field}>
                                            <label htmlFor="checkOut">Check-out Date *</label>
                                            <input
                                                type="date"
                                                id="checkOut"
                                                name="checkOut"
                                                value={formData.checkOut}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className={styles.row}>
                                        <div className={styles.field}>
                                            <label htmlFor="guests">Number of Guests</label>
                                            <select
                                                id="guests"
                                                name="guests"
                                                value={formData.guests}
                                                onChange={handleChange}
                                            >
                                                <option value="1">1 Guest</option>
                                                <option value="2">2 Guests</option>
                                                <option value="3">3 Guests</option>
                                                <option value="4">4 Guests</option>
                                                <option value="5">5+ Guests</option>
                                            </select>
                                        </div>
                                        <div className={styles.field}>
                                            <label htmlFor="roomType">Room Preference</label>
                                            <select
                                                id="roomType"
                                                name="roomType"
                                                value={formData.roomType}
                                                onChange={handleChange}
                                            >
                                                <option value="standard">Standard Room</option>
                                                <option value="deluxe">Deluxe Room</option>
                                                <option value="suite">Executive Suite</option>
                                                <option value="family">Family Room</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                {/* Special Requests */}
                                <div className={styles.formGroup}>
                                    <div className={styles.field}>
                                        <label htmlFor="message">Special Requests</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows="4"
                                            placeholder="Any special requests or dietary requirements..."
                                        />
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <Button
                                    type="submit"
                                    variant="accent"
                                    size="large"
                                    disabled={isSubmitting}
                                    className={styles.submitBtn}
                                >
                                    {isSubmitting ? 'Sending Request...' : 'Send Booking Request'}
                                </Button>

                                {/* Status Messages */}
                                {submitStatus === 'success' && (
                                    <div className={styles.successMessage}>
                                        ✅ Thank you! We'll contact you within 24 hours to confirm your booking.
                                    </div>
                                )}
                                {submitStatus === 'error' && (
                                    <div className={styles.errorMessage}>
                                        ❌ Something went wrong. Please try again or contact us directly.
                                    </div>
                                )}
                            </form>
                        </Card>
                    </div>

                    {/* Contact Information */}
                    <div className={styles.contactInfo}>
                        <h3>Get In Touch</h3>
                        <div className={styles.contactDetails}>
                            <div className={styles.contactItem}>
                                <div className={styles.contactIcon}>📞</div>
                                <div>
                                    <h4>Phone</h4>
                                    <p>047 5770 268</p>
                                </div>
                            </div>
                            <div className={styles.contactItem}>
                                <div className={styles.contactIcon}>📧</div>
                                <div>
                                    <h4>Email</h4>
                                    <p>lindanibnb@gmail.com</p>
                                </div>
                            </div>
                            <div className={styles.contactItem}>
                                <div className={styles.contactIcon}>📍</div>
                                <div>
                                    <h4>Location</h4>
                                    <p>Elliotdale, 5070, Eastern Cape<br /> South Africa</p>
                                </div>
                            </div>
                            <div className={styles.contactItem}>
                                <div className={styles.contactIcon}>🕒</div>
                                <div>
                                    <h4>Reception Hours</h4>
                                    <p>24/7 Available<br />Check-in: 3:00 PM<br />Check-out: 11:00 AM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}