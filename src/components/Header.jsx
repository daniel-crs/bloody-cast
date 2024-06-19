import styles from "./Header.module.css"

import BloodyCastLogo from "../assets/logo.png"
import { IoIosSearch } from "react-icons/io";

export function Header() {
    return (
        <header className={styles.container}>
            <div>
                <img className={styles.bloodyLogo} src={BloodyCastLogo} />
            </div>

            <div className={styles.menuContainer}>
                <h2>Home</h2>
                <h2>PodCast</h2>
                <h2>Cinema</h2>
                <h2>Livros</h2>
                <h2>Musícas</h2>
                <h2>Jogos</h2>
                <button className={styles.iconContainer}>
                    <IoIosSearch size={35} color={"#000"} />
                </button>
            </div>
        </header>
    )
}