import styles from "./NavbarDesktop.module.css"

import { MenuElements } from "../MenuElements";
import { SearchBar } from "../SearchBar";

export function NavbarDesktop() {
    const menuOptions = [
        {optionName: "Home", optionUrl: "/"}, {optionName: "PodCast", optionUrl: "/PodCast"}, {optionName: "Cinema", optionUrl: "#"},
        {optionName: "Livros", optionUrl: "#"}, {optionName: "Musícas", optionUrl: "#"}, {optionName: "Jogos", optionUrl: "#"}
    ];

    return (
        <nav className={styles.menuContainer}>
            {menuOptions.map(function(data) {
                return (
                    <MenuElements name={data.optionName} screenUrl={data.optionUrl} />
                )
            })}

            <SearchBar />
        </nav>
    );
}