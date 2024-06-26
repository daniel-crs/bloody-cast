import styles from "./Header.module.css"

import BloodyCastLogo from "../assets/logo.png"
import { MenuElements } from "./MenuElements";
import { SearchBar } from "./SearchBar";

export function Header() {
    const menuOptions = [
        {optionName: "Home", optionUrl: "/"}, {optionName: "PodCast", optionUrl: "/PodCast"}, {optionName: "Cinema", optionUrl: "#"},
        {optionName: "Livros", optionUrl: "#"}, {optionName: "Musícas", optionUrl: "#"}, {optionName: "Jogos", optionUrl: "#"}
    ];
    
    return (
        <header className={styles.container}>
            <div>
                <img className={styles.bloodyLogo} src={BloodyCastLogo} />
            </div>

            <div className={styles.menuContainer}>
                {menuOptions.map(function(data) {
                    return (
                        <MenuElements name={data.optionName} screenUrl={data.optionUrl} />
                    )
                })}

                <SearchBar />
            </div>
        </header>
    )
}