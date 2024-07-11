import styles from "./NavbarMobile.module.css"
import { useState } from "react";

import { MenuElements } from "../MenuElements";
import { SearchBar } from "../SearchBar";

export function NavbarMobile() {
    const [showMenu, setShowMenu] = useState(false);
    const menuOptions = [
        {optionName: "Home", optionUrl: "/"}, {optionName: "PodCast", optionUrl: "/PodCast"}, {optionName: "Cinema", optionUrl: "#"},
        {optionName: "Livros", optionUrl: "#"}, {optionName: "Musícas", optionUrl: "#"}, {optionName: "Jogos", optionUrl: "#"}
    ];

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <>
            <nav className={`${styles.menuSandwich} ${ showMenu ? styles.show : '' }`}>
                {menuOptions.map(function(data) {
                    return (
                        <MenuElements name={data.optionName} screenUrl={data.optionUrl} />
                    )
                })}

                <SearchBar />
            </nav>

            <div className={styles.menuButton} onClick={toggleMenu}>
                <span className={styles.linha}></span>
                <span className={styles.linha}></span>
                <span className={styles.linha}></span>
            </div>
        </>
    );
}