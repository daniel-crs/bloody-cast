import styles from "./CardDesktop.module.css"

import img1 from "../../assets/invocacao-do-mal-4.jpg"

export function CardDesktop() {
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
                
                <p className={styles.description}>
                    É um fato conhecido de todos que um leitor se 
                    distrairá com o conteúdo de texto legível de 
                    uma página quando estiver examinando sua diagramação. 
                    A vantagem de usar Lorem Ipsum é que ele tem uma 
                    distribuição normal de letras, ao contrário de 
                    "Conteúdo aqui, conteúdo aqui.
                </p>

                <div className={styles.author}>
                    <p className={styles.firstPart}>por</p>
                    <p className={styles.secondPart}>Gabriel Zanon</p>
                </div>

                <div className={styles.btn}>
                    <a href="#">Ler mais</a>
                </div>
            </div>
        </div>
    )
}