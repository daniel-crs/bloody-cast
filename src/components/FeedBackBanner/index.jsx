import styles from "./FeedBackBanner.module.css"
import { useState, useEffect } from "react"

import bgImg from "../../assets/pexels-fireberrytech-2848647.jpg"

export function FeedBackBanner() {
    const api_url = process.env.REACT_APP_API_URL;
    const [data, setData] = useState([]);

    useEffect(() => {
        const url = `${api_url}/contacts`;
        fetch(url)
        .then((res) => res.json())
        .then((contact) => {
            setData(contact.data);
        });
    }, []);

    return (
        <div className={styles.container}>
            <img src={bgImg} alt="BannerBackground" />

            <div className={styles.elements}>
                <div className={styles.info}>
                    <h3>Nos dê seu feedback</h3>

                    <p>Compartilhe suas opiniões ou histórias com nossa equipe, entre em contato clicando no botão abaixo.</p>
                </div>

                {data?.map((contact) => (
                    <a key={contact.id} href={`mailto:${contact.attributes.email}`} className={styles.btn}>
                        Entre em contato
                    </a>
                ))}
            </div>
        </div>
    )
}