import styles from "./BackGroundImg.module.css"

import { RiMovie2Fill } from "react-icons/ri";

export function BackGroundImg({ title, bgImg}) {
    return (
        <div className={styles.titleContainer}>
            <img src={bgImg} alt="" />

            <div className={styles.info}>
              <h3>{title}</h3>
              <RiMovie2Fill className={styles.icon} />
            </div>
        </div>
    )
}