import styles from "./TitleForPost.module.css"
import standarStyle from "../../Style/StandardContainerStyles.module.css"

export function TitleForPost({ title, author, data }) {
    return (
        <div className={standarStyle.standardContainerForPost}>
            <div className={styles.titleContainer}>
                <h3 className={styles.title}>
                    {title}
                </h3>

                <div className={styles.titleContent}>
                    <div className={styles.author}>
                        <p className={styles.firstPart}>por</p>
                        <p className={styles.secondPart}>{author}</p>
                    </div>
                        
                    <time className={styles.time} title="11 de Maio as 08:13" dateTime="2022-05-11 08:13:30">Publicado em {data}</time>
                </div>
            </div>
        </div>
    )
}