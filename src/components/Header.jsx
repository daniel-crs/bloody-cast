import styles from "./Header.module.css"
import { useEffect, useState } from "react";

import BloodyCastLogo from "../assets/logo.png"
import { NavbarDesktop } from "./NavbarDesktop";
import { NavbarMobile } from "./NavbarMobile";

export function Header() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const addScreenWidth = () => {
        setScreenWidth(window.innerWidth);
    }
    
    useEffect(() => {
        window.addEventListener('resize', addScreenWidth);

        return() => {
            window.removeEventListener('resize', addScreenWidth)
        }
    }, [screenWidth]);

    const ScreenRender = () => {
        if (screenWidth < 1024) {
            return (
                <NavbarMobile />
            )
        } else {
            return (
                 <NavbarDesktop />
            )
        }
    }

    return (
        <header className={styles.container}>
            <div>
                <img className={styles.bloodyLogo} src={BloodyCastLogo} />
            </div>

            <ScreenRender />
        </header>
    )
}