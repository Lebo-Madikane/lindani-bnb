import Link from 'next/link'
import styles from './Footer.module.scss'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.content}>
                    {/* Brand Section */}
                    <div className={styles.brand}>
                        <h3 className={styles.logo}>Lindani BnB</h3>
                        <p className={styles.description}>
                            Experience luxury and comfort in the heart of nature.
                            Your perfect getaway awaits at our beautiful bed and breakfast.
                        </p>
                        <div className={styles.social}>
                            <a href="#" aria-label="Facebook">📘</a>
                            <a href="#" aria-label="Instagram">📷</a>
                            <a href="#" aria-label="Twitter">🐦</a>
                            <a href="#" aria-label="WhatsApp">💬</a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className={styles.links}>
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/services">Services</Link></li>
                            <li><Link href="/attractions">Attractions</Link></li>
                            <li><Link href="#contact">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className={styles.links}>
                        <h4>Our Services</h4>
                        <ul>
                            <li><a href="#services">Room Service</a></li>
                            <li><a href="#services">Concierge</a></li>
                            <li><a href="#services">Airport Transfer</a></li>
                            <li><a href="#services">Tour Guide</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className={styles.contact}>
                        <h4>Contact Information</h4>
                        <div className={styles.contactItem}>
                            <span>📞</span>
                            <p>+27 123 456 7890</p>
                        </div>
                        <div className={styles.contactItem}>
                            <span>📧</span>
                            <p>hello@lindanibnb.co.za</p>
                        </div>
                        <div className={styles.contactItem}>
                            <span>📍</span>
                            <p>123 Mountain View Road<br />Scenic Valley, South Africa</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className={styles.bottom}>
                    <div className={styles.bottomContent}>
                        <p>&copy; {currentYear} Lindani BnB. All rights reserved.</p>
                        <div className={styles.legal}>
                            <Link href="/privacy">Privacy Policy</Link>
                            <Link href="/terms">Terms of Service</Link>
                        </div>
                        <p className={styles.developer}>
                            Website by <Link href="https://lebo-madikane.github.io/portfolio/" target="_blank">Lebo Madikane</Link>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}