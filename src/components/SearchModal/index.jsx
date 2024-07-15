import styles from "./SearchModal.module.css"

import { CgClose } from "react-icons/cg";
import { IoIosSearch } from "react-icons/io";

export function SearchModal({ openSeachModal, setOpenSeachModal }) {
    if(openSeachModal) {
        return (
            <div className={styles.bg}>
                <div className={styles.modalContainer}>
                    <div className={styles.iconPosition}>
                        <CgClose className={styles.icon} onClick={setOpenSeachModal} />
                    </div>

                    <div className={styles.elementsContainer}>
                        <div className={styles.textContainer}>
                            <p className={styles.text}>Pesquisa</p>
                            <IoIosSearch className={styles.seachIcon} />
                        </div>

                        <div className={styles.searchBarContainer}>
                            <form className={styles.searchBar}>
                                <input className={styles.inputSearch} type="search" id="inputSearch" name="search" placeholder="O que voçê procura?" />
                            </form>
                            
                            <span className={styles.test}></span>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return null
    }
}