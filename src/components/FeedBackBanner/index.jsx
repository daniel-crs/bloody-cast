import styles from "./FeedBackBanner.module.css"

import bgImg from "../../assets/pexels-fireberrytech-2848647.jpg"

export function FeedBackBanner() {
    return (
        <div className={styles.container}>
            <img src={bgImg} alt="BannerBackground" />

            <div className={styles.elements}>
                <div className={styles.info}>
                    <h3>Nós de seu feedback</h3>

                    <p>Compartilhe suas opiniões ou histórias com nossa equipe, entre em contato clicando no botão abaixo.</p>
                </div>

                <button className={styles.btn}>
                    Entre em contato
                </button>
            </div>
        </div>
    )
}