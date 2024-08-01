import styles from "./TitleForPost.module.css"
import standarStyle from "../../Style/StandardContainerStyles.module.css"

export function TitleForPost() {
    return (
        <div className={standarStyle.standardContainer}>
            <div className={styles.titleContainer}>
                <h3 className={styles.title}>
                    O enigma de outro mundo.
                </h3>

                <div className={styles.titleContent}>
                    <div className={styles.author}>
                        <p className={styles.firstPart}>por</p>
                        <p className={styles.secondPart}>Gabriel Zanon</p>
                    </div>
                        
                    <time className={styles.time} title="11 de Maio as 08:13" dateTime="2022-05-11 08:13:30">Publicado em 12/04/2023</time>
                </div>
            </div>
        </div>
    )
}