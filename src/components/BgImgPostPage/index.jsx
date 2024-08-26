import styles from "./BgImgPostPage.module.css"

export function BgImgPostPage({ tag, img }) {
    return (
        <div className={styles.imgHeader}>
            <img src={img} alt="" />

            <div className={styles.tagContainer}>
                <p>{tag}</p>
            </div>
        </div>
    )
}