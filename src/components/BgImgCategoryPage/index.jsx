import styles from "./BgImgCategoryPage.module.css"

import { FaMicrophone } from "react-icons/fa";
import { RiMovie2Fill } from "react-icons/ri";
import { FaBookSkull } from "react-icons/fa6";
import { IoMusicalNotesSharp } from "react-icons/io5";
import { MdGames } from "react-icons/md";

export function BgImgCategoryPage({ title, bgImg, screenEndPoint }) {
    
    const RenderIcon = () => {
        if(screenEndPoint === "/PodCast") {
            return (
                <FaMicrophone className={styles.icon} />
            )
        } else if(screenEndPoint === "/Filmes") {
            return (
                <RiMovie2Fill className={styles.icon} />
            )
        } else if(screenEndPoint === "/Livros") {
            return (
                <FaBookSkull className={styles.icon} />
            )
        } else if(screenEndPoint === "/Musicas") {
            return (
                <IoMusicalNotesSharp className={styles.icon} />
            )
        } else if(screenEndPoint === "/Jogos") {
            return (
                <MdGames className={styles.icon} />
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