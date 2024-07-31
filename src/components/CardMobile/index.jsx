import styles from "./CardMobile.module.css"

import { Link } from "react-router-dom"

export function CardMobile({ id, img, tag, title, author }) {
    return (
        <div className={styles.container}>
            <Link to={`/Postagem/${id}`}>
                <div className={styles.imgElement}>
                    <img src={img} alt="Img" />

                    <div className={styles.tag}>
                        <p>{tag}</p>
                    </div>
                </div>
            </Link>

            <Link
                to={`/Postagem/${id}`}
                style={{ textDecoration: "none" }}
            >
                <div className={styles.infoContainer}>
                    <h3 className={styles.title}>
                        {title}
                    </h3>
                    

                    <div className={styles.author}>
                        <p className={styles.firstPart}>por</p>
                        <p className={styles.secondPart}>{author}</p>
                    </div>
                </div>
            </Link>

            <span className={styles.underBar}></span>
        </div>
    )
}