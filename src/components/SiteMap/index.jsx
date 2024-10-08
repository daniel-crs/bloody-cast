import styles from "./SiteMap.module.css"
import { useLocation } from "react-router-dom"

export function SiteMap() {
    const menuOptions = [
        {optionName: "Home", optionUrl: "/"}, {optionName: "Podcast", optionUrl: "/Podcast"}, {optionName: "Cinema", optionUrl: "/Cinema"},
        {optionName: "Livros", optionUrl: "/Livros"}, {optionName: "Músicas", optionUrl: "/Musicas"}, {optionName: "Games", optionUrl: "/Games"}
    ];

    function ShowActivePage({ name, url }) {
    const location = useLocation();
    const activeUrl = location.pathname === url;

        if(activeUrl) {
            return (
                <div className={styles.active}>
                    <a href={url}>{name}</a>
                </div>
            )
        } else if (!activeUrl) {
            return <a href={url}>{name}</a>
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h3>SiteMap</h3>
                <span className={styles.underBar}></span>
            </div>

            <div className={styles.elements}>
                {menuOptions.map(function(data) {
                    return (
                        <ShowActivePage key={data.optionName} name={data.optionName} url={data.optionUrl} />
                    )
                })}
            </div>
        </div>
    )
}