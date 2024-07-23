import styles from "./BackGroundImg.module.css"

import { FaMicrophone } from "react-icons/fa";
import { RiMovie2Fill } from "react-icons/ri";

export function BackGroundImg({ title, bgImg, screenEndPoint }) {
    
    const RenderIcon = () => {
        if(screenEndPoint === "/PodCast") {
            return (
                <FaMicrophone className={styles.icon} />
            )
        } else if(screenEndPoint === "/Movie") {
            return (
                <RiMovie2Fill className={styles.icon} />
            )
        }
    }

    return (
        <div className={styles.container}>
            <img src={bgImg} alt="" />

            <div className={styles.info}>
              <h3>{title}</h3>
              <RenderIcon />
            </div>
        </div>
    )
}