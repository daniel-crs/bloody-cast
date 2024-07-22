import styles from "./ExtraInfoDropdown.module.css"
import { useState } from "react";

import { IoChevronDown } from "react-icons/io5";
import { IoChevronUp } from "react-icons/io5";

export function ExtraInfoDropDown() {
    const [openDropdown, setOpenDopenDropdown] = useState(false);

    const handleOpen = () => {
        setOpenDopenDropdown(!openDropdown);
      };

    return (
        <div className={styles.container}>
            <h3>
                Informações extras
            </h3>

            <div>
                <div className={styles.infoTitle} onClick={handleOpen}>
                        <p>Por que criamos o bloodcast.</p>
                        {openDropdown ? (
                            <IoChevronUp className={styles.icon} />
                        ) : (
                            <IoChevronDown className={styles.icon} />
                        )} 
                </div>       
                {openDropdown ? (
                        <div className={styles.dropdown}>
                            <p>
                                BloodCast é um blog/podcast criado pela nossa equipe 
                                pelo amor que possuímos pelo gênero de terror e pelo 
                                desejo de compartilhar nossos conhecimentos sobre o 
                                mesmo com as pessoas.
                            </p>
                        </div> 
                ) : null}    
            </div>
            <span className={styles.underBar}></span>
        </div>
    )
}