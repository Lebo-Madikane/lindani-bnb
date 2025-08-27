import styles from './Card.module.scss'

export default function Card({
    children,
    variant = 'default',
    padding = 'medium',
    shadow = true,
    className = '',
    ...props
}) {
    const cardClass = `${styles.card} ${styles[variant]} ${styles[padding]} ${shadow ? styles.shadow : ''} ${className}`

    return (
        <div className={cardClass} {...props}>
            {children}
        </div>
    )
}