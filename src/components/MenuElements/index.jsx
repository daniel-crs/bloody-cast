import styles from "./MenuElements.module.css"

import { useLocation } from "react-router-dom"

export function MenuElements({ name, screenUrl }) {
    const location = useLocation();
    const activeUrl = location.pathname === screenUrl;

    if(activeUrl) {
        return (
            <div className={styles.activeContainer}>
                <a href={screenUrl}>{name}</a>
            </div>
        )
    } else if (!activeUrl) {
        return <a href={screenUrl}>{name}</a>
    }
}