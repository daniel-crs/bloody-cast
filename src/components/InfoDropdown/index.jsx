import styles from "./InfoDropdown.module.css"
import { useState } from "react";

import { IoChevronDown } from "react-icons/io5";
import { IoChevronUp } from "react-icons/io5";

export function InfoDropdown({title, description}) {
    const [openDropdown, setOpenDopenDropdown] = useState(false);

    const handleOpen = () => {
        setOpenDopenDropdown(!openDropdown);
    };

    return (
        <>
            <div>
                <div className={styles.infoTitle} onClick={handleOpen}>
                        <p>{title}</p>
                        {openDropdown ? (
                            <IoChevronUp className={styles.icon} />
                        ) : (
                            <IoChevronDown className={styles.icon} />
                        )} 
                </div>       
                {openDropdown ? (
                        <div className={styles.dropdown}>
                            <p>
                                {description}
                            </p>
                        </div> 
                ) : null}    
            </div>
            <span className={styles.underBar}></span>
        </>
    )
}