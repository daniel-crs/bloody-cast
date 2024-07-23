import styles from "./CardMobile.module.css"

import img1 from "../../assets/invocacao-do-mal-4.jpg"

export function CardMobile({ tag, title, author }) {
    return (
        <div className={styles.container}>
            <div className={styles.imgElement}>
                <img src={img1} alt="Img" />

                <div className={styles.tag}>
                    <p>{tag}</p>
                </div>
            </div>

            <div className={styles.infoContainer}>
                <h3 className={styles.title}>
                    {title}
                </h3>
                

                <div className={styles.author}>
                    <p className={styles.firstPart}>por</p>
                    <p className={styles.secondPart}>{author}</p>
                </div>
            </div>

            <span className={styles.underBar}></span>
        </div>
    )
}