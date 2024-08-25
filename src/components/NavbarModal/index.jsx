import styles from "./NavbarModal.module.css"
import { useState } from "react";

import { MenuElements } from "../MenuElements";
import { SearchModal } from "../SearchModal";
import { CgClose } from "react-icons/cg";
// import { IoIosSearch } from "react-icons/io";

export function NavbarModal({ menuOptions, showMenu, setShowMenu }) {
    const [openSeachModal, setOpenSeachModal] = useState(false);

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

                        {/* <div className={styles.seachContainer} onClick={() => setOpenSeachModal(true)}>
                            <p className={styles.seachText}>Pesquisa</p>
                            <IoIosSearch className={styles.seachIcon} />
                        </div> */}
                    </nav>
                </div>

                <SearchModal openSeachModal={openSeachModal} setOpenSeachModal={() => setOpenSeachModal(!openSeachModal)} />
            </div>
        );
    } else {
        return null
    }
}