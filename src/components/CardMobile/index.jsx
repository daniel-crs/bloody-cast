import styles from "./CardMobile.module.css"

import img1 from "../../assets/invocacao-do-mal-4.jpg"

export function CardMobile() {
    return (
        <div className={styles.container}>
            <div className={styles.imgElement}>
                <img src={img1} alt="" />

                <div className={styles.tag}>
                    <p>Cinema</p>
                </div>
            </div>

            <div className={styles.infoContainer}>
                <h3 className={styles.title}>
                    O vale da estranheza presente em mad god.
                </h3>
                

                <div className={styles.author}>
                    <p className={styles.firstPart}>por</p>
                    <p className={styles.secondPart}>Gabriel Zanon</p>
                </div>
            </div>

            <span className={styles.underBar}></span>
        </div>
    )
}