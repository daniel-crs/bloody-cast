import styles from "./CardDesktop.module.css"
import { useState, useEffect } from "react";

export function CardDesktop({ id, img, tag, title, text, author }) {
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
            <div className={styles.imgElement}>
                <img src={img} alt="Img" />

                <div className={styles.tag}>
                    <p>{tag}</p>
                </div>
            </div>

            <div className={styles.infoContainer}>
                <h3 className={styles.title}>
                    {title}
                </h3>
                
                <p className={styles.description}>
                    {text}
                </p>

                <div className={styles.author}>
                    <p className={styles.firstPart}>por</p>
                    <p className={styles.secondPart}>{author}</p>
                </div>

                <div className={styles.btn}>
                    <a href={postUrl}>Ler mais</a>
                </div>
            </div>
        </div>
    )
}