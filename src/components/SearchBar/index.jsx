import styles from "./SearchBar.module.css"

import { IoIosSearch } from "react-icons/io";

export function SearchBar() {
    return (
        <div className={styles.Container}>
            <form className={styles.searchBar}>
                <input className={styles.inputSearch} type="search" id="inputSearch" name="search" placeholder="O que voçê procura?" />

                <label className={styles.lebalSearch} htmlFor="inputSearch">
                    <IoIosSearch className={styles.icon} />
                </label>
            </form>
        </div>
    )
}