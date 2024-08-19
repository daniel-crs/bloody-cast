import styles from "./Footer.module.css"
import { useState, useEffect } from "react"

import bgImg from "../../assets/pexels-fireberrytech-2848647.jpg"
import { SiteMap } from "../SiteMap"
import gmail from "../../assets/gmail-icon.svg"
import { FaWhatsapp } from "react-icons/fa";

export function Footer() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const url = "http://localhost:1337/api/contacts";
        fetch(url)
        .then((res) => res.json())
        .then((contact) => {
            setData(contact.data);
        });
    }, []);
    
    return (
        <div className={styles.container}>
            <img src={bgImg} alt="Background" />
        
            <div className={styles.elements}>
                <div className={styles.prominence}>
                    <SiteMap />

                    <div className={styles.contact}>
                        <div className={styles.title}>
                            <h3>Contato</h3>
                            <span className={styles.underBar}></span>
                        </div>

                        {data?.map((contact) => (
                            <div className={styles.info}>
                                <p>E-mail: {contact.attributes.email}</p>
                                <p>Numero: {contact.attributes.number}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.iconsContainer}>
                    <a href="#" className={styles.gmailContainer}>
                        <img src={gmail} alt="Gmail" />
                    </a>
                    <a href="#" ><FaWhatsapp className={styles.whatsappIcon} /></a>
                </div>

                <div className={styles.copyright}>
                    <h3>© Bloodcast | todos os direitos reservados.</h3>
                </div>
            </div>

        </div>
    )
}