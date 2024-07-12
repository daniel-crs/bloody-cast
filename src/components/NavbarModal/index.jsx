import styles from "./NavbarModal.module.css"

import { CgClose } from "react-icons/cg";
import { MenuElements } from "../MenuElements";
import { SearchBar } from "../SearchBar";

export function NavbarModal({ showMenu, setShowMenu }) {
    const menuOptions = [
        {optionName: "Home", optionUrl: "/"}, {optionName: "PodCast", optionUrl: "/PodCast"}, {optionName: "Cinema", optionUrl: "#"},
        {optionName: "Livros", optionUrl: "#"}, {optionName: "Musícas", optionUrl: "#"}, {optionName: "Jogos", optionUrl: "#"}
    ];

    if(showMenu) {
        return (
            <div className={styles.bg}>
                <div className={styles.modalContainer}>
                    <div className={styles.iconPosition}>
                        <CgClose className={styles.icon} onClick={setShowMenu} />
                    </div>

                    <nav className={styles.menuContainer}>
                        {menuOptions.map(function(data) {
                            return (
                                <MenuElements name={data.optionName} screenUrl={data.optionUrl} />
                            )
                        })}

                        <SearchBar />
                    </nav>
                </div>
            </div>
        );
    } else {
        return null
    }
}