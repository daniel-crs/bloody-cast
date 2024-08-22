import styles from "./Score.module.css"

import { FaStar } from "react-icons/fa";

export function Score({ score }) {

    const RenderScore = () => {
        if(score == 5) {
            return (
                <div className={styles.icons}>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
            )
        } else if(score == 4) {
            return (
                <div className={styles.icons}>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
            )
        } else if(score == 3) {
            return (
                <div className={styles.icons}>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
            )
        } else if(score == 2) {
            return (
                <div className={styles.icons}>
                    <FaStar />
                    <FaStar />
                </div>
            )
        } else {
            return (
                <div className={styles.icons}>
                    <FaStar />
                </div>
            )
        }
    }

    return (
        <div className={styles.scoreTitle}>
            <h3>Mais Recentes</h3>
            <span className={styles.underBar}></span>

            <div className={styles.scoreContainer}>
                <RenderScore />
            </div>
        </div>
    )
}