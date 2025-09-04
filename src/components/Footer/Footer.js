import Link from 'next/link'
import styles from './Footer.module.scss'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer id="contact" className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.content}>
                    {/* Brand Section */}
                    <div className={styles.brand}>
                        <h3 className={styles.logo}>Lindani BnB</h3>
                        <p className={styles.description}>
                            Experience comfort in the heart of Eastern Cape.
                            Your perfect getaway awaits at our beautiful bed and breakfast.
                        </p>
                        <div className={styles.social}>
                            <a href="#" aria-label="Facebook">📘</a>
                            <a href="#" aria-label="Instagram">📷</a>
                            <a href="#" aria-label="Twitter">🐦</a>
                            <a href="#" aria-label="WhatsApp">💬</a>
                        </div>
                    </div>

                    {/* Services */}
                    <div className={styles.links}>
                        <h4>Our Services</h4>
                        <ul>
                            <li><a href="#services">Accommodation</a></li>
                            <li><a href="#services">Catering</a></li>
                            <li><a href="#services">Shuttle Services</a></li>
                            <li><a href="#services">Laundry</a></li>
                            <li><a href="#services">Conference Facilities</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className={styles.contact}>
                        <h4>Contact Information</h4>
                        <div className={styles.contactItem}>
                            <span>📞</span>
                            <p>047 5770 268</p>
                        </div>
                        <div className={styles.contactItem}>
                            <span>📧</span>
                            <p>lindanibnb@gmail.com</p>
                        </div>
                        <div className={styles.contactItem}>
                            <span>📍</span>
                            <p>Elliotdale, 5070, Eastern Cape<br />South Africa</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className={styles.bottom}>
                    <div className={styles.bottomContent}>
                        <p>&copy; {currentYear} Lindani BnB. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}