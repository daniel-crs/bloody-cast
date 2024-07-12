import styles from "./NavbarMobile.module.css"
import { useState } from "react";

import { NavbarModal } from "../NavbarModal";

export function NavbarMobile() {
    const [showMenu, setShowMenu] = useState(false);
    
    return (
        <>
            <div className={styles.menuButton} onClick={() => setShowMenu(true)}>
                <span className={styles.linha}></span>
                <span className={styles.linha}></span>
                <span className={styles.linha}></span>
            </div>

            <NavbarModal showMenu={showMenu} setShowMenu={() => setShowMenu(!showMenu)} />
        </>
    );
}