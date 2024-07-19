import styles from "./Footer.module.css"

import { SiteMap } from "../SiteMap"

export function Footer() {
    return (
        <div className={styles.container}>
            <SiteMap />
        </div>
    )
}