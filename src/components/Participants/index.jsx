import styles from "./Participants.module.css"

export function Participants({ profile, name }) {
    return (
        <div className={styles.authorContainer}>
            <div className={styles.authorImg}>
                <img src={profile} alt="" />
            </div>

            <div className={styles.authorInfo}>
                <div className={styles.author}>
                    <p className={styles.name}>{name}</p>
                </div>
            </div>
        </div>
    )
}