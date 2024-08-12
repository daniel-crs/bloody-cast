import styles from "./Participants.module.css"

export function Participants({ img, name }) {
    return (
        <div className={styles.authorContainer}>
            <div className={styles.authorImg}>
                <img src={img} alt="" />
            </div>

            <div className={styles.authorInfo}>
                <div className={styles.author}>
                    <p className={styles.name}>{name}</p>
                </div>
            </div>
        </div>
    )
}