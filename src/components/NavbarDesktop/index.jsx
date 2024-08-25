import styles from "./NavbarDesktop.module.css"

import { MenuElements } from "../MenuElements";
// import { SearchBar } from "../SearchBar";

export function NavbarDesktop({ menuOptions }) {
    return (
        <nav className={styles.menuContainer}>
            {menuOptions.map(function(data) {
                return (
                    <MenuElements key={data.optionName} name={data.optionName} screenUrl={data.optionUrl} />
                )
            })}

            {/* <SearchBar /> */}
        </nav>
    );
}