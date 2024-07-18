import styles from "./FilterModal.module.css"

import { CgClose } from "react-icons/cg";

export function FilterModal({ showFilter, setShowFilter }) {
    if(showFilter) {
        return (
            <div className={styles.bg}>
                <div className={styles.modalContainer}>
                    <div className={styles.iconPosition}>
                        <CgClose className={styles.icon} onClick={setShowFilter} />
                    </div>

                    <div>
                        <h3>Filtros</h3>
                    </div>
                </div>
            </div>
        )
    } else {
        return null
    }
}