import styles from "./SliderCardDesktop.module.css"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"

export function SliderCardDesktop({ id, img, tag, title, author }) {
    const [postUrl, setPostUrl ] = useState("");

    useEffect(() => {
        if(tag == "PodCast") {
            setPostUrl(`/Postagem/PodCast/${id}`)
        } else {
            setPostUrl(`/Postagem/${tag}/${id}`)
        }
    }, [id, tag]);

    return (
        <div className={styles.container}>
            <Link to={postUrl}>
                <div className={styles.imgElement}>
                    <img src={img} alt="Img" />

                    <div className={styles.tag}>
                        <p>{tag}</p>
                    </div>
                </div>
            </Link>

            <Link
                to={postUrl}
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
        </div>
    )
}