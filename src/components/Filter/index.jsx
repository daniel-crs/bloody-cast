import styles from './Filter.module.css';
import { useState } from 'react';

import { FilterModal } from "../../components/FilterModal";
import { IoFilter } from "react-icons/io5";

export function Filter() {
    const [showFilter, setShowFilter] = useState(false);

    return (
        <>
            <div className={styles.elements}>
                <div className={styles.title}>
                    <h3>Mais Recentes</h3>
                    <span className={styles.underBar}></span>
                </div>

                <button className={styles.filter} onClick={() => setShowFilter(true)}>
                    <p>Filtro</p>
                    <IoFilter className={styles.icon} />
                </button>
            </div>

            <FilterModal 
                showFilter={showFilter} 
                setShowFilter={() => setShowFilter(!showFilter)} 
            />
        </>
    )
}