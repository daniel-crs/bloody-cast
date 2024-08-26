import styles from "./NotFound.module.css";

import { Link } from "react-router-dom";

export function NotFound() {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <h2>404</h2>
                <h3>OOPS... Esta página não foi encontrada</h3>
                <p>
                    Retorne para a página inicial do site clicando neste botão a baixo
                </p>
            </div>
  
            <Link to={"/"}>
                <div className={styles.btnContainer}>
                    <p>Clique aqui</p> 
                </div>
            </Link>
      </div>
    )
}