import styles from "./Footer.module.css"

import bgImg from "../../assets/pexels-fireberrytech-2848647.jpg"
import { SiteMap } from "../SiteMap"
import gmail from "../../assets/gmail-icon.svg"
import { FaWhatsapp } from "react-icons/fa";

export function Footer() {
    return (
        <div className={styles.container}>
            <img src={bgImg} alt="" />
        
            <div className={styles.elements}>
                <div className={styles.test}>
                    <SiteMap />

                    <div className={styles.contact}>
                        <div className={styles.title}>
                            <h3>Contato</h3>
                            <span className={styles.underBar}></span>
                        </div>

                        <div className={styles.info}>
                            <p>Email: bloodycast2024@gmail.com</p>
                            <p>Telefone: 99999-9999</p>
                        </div>
                    </div>
                </div>

                <div className={styles.iconsContainer}>
                    <a href="#" className={styles.gmailContainer}>
                        <img src={gmail} alt="Gmail" />
                    </a>
                    <a href="#" className={styles.whatsappIcon}><FaWhatsapp /></a>
                </div>

                <div className={styles.copyright}>
                    <h3>© Bloodcast | todos os direitos reservados.</h3>
                </div>
            </div>

        </div>
    )
}