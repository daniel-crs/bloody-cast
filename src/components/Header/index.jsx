import styles from "./Header.module.css"
import { useEffect, useState } from "react";

import BloodyCastLogo from "../../assets/logo.png"
import { NavbarDesktop } from "../NavbarDesktop";
import { NavbarMobile } from "../NavbarMobile";

export function Header() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const menuOptions = [
        {optionName: "Home", optionUrl: "/"}, {optionName: "Podcast", optionUrl: "/Podcast"}, {optionName: "Filmes", optionUrl: "/Filmes"},
        {optionName: "Livros", optionUrl: "/Livros"}, {optionName: "Músicas", optionUrl: "/Musicas"}, {optionName: "Games", optionUrl: "/Games"}
    ];

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
                <NavbarMobile menuOptions={menuOptions} />
            )
        } else {
            return (
                 <NavbarDesktop menuOptions={menuOptions} />
            )
        }
    }

    return (
        <header className={styles.container}>
            <a href="/">
                <img className={styles.bloodyLogo} src={BloodyCastLogo} />
            </a>
            
            <ScreenRender />
        </header>
    )
}