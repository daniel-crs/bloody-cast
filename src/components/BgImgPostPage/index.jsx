import styles from "./BgImgPostPage.module.css"

import cardImg2 from "../../assets/Enigma-de-outro-mundo.webp"

export function BgImgPostPage() {
    return (
        <div className={styles.imgHeader}>
            <img src={cardImg2} alt="" />

            <div className={styles.tagContainer}>
                <p>Cinema</p>
            </div>
        </div>
    )
}