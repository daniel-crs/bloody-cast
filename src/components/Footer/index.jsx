import styles from "./Footer.module.css"
import { useState, useEffect } from "react"

import { SiteMap } from "../SiteMap"
import gmail from "../../assets/gmail-icon.svg"
import instagram from "../../assets/instagram.png"
import BloodyCastLogo from "../../assets/logo.png"

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
        
            {data?.map((contact) => (
                <div key={contact.id} className={styles.elements}>
                    <div className={styles.prominence}>
                        <SiteMap />

                        <div className={styles.contact}>
                            <div className={styles.title}>
                                <h3>Contato</h3>
                                <span className={styles.underBar}></span>
                            </div>

                            <div className={styles.info}>
                                <p>E-mail: {contact.attributes.email}</p>
                                <p>Numero: {contact.attributes.instagram}</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.iconsContainer}>
                        <a href={`mailto:${contact.attributes.email}`} className={styles.gmailContainer}>
                            <img src={gmail} alt="Gmail" />
                        </a>

                        <a href="/"className={styles.logo}>
                            <img src={BloodyCastLogo} alt="Logo" />
                        </a>
                        
                        <a href={contact.attributes.instagram} className={styles.instagramContainer}>
                            <img src={instagram} alt="instagram" />
                        </a>
                    </div>

                    <div className={styles.copyright}>
                        <h3>© Bloodcast | todos os direitos reservados.</h3>
                    </div>
                </div>
            ))}

        </div>
    )
}