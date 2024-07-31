import styles from "./StandardPost.module.css"
import standarStyle from "../../Style/StandardContainerStyles.module.css"

import { Header } from "../../components/Header"
import { BgImgPostPage } from "../../components/BgImgPostPage"
import img from "../../assets/Enigma-de-outro-mundo-2.jpg"
import img2 from "../../assets/andras.webp"
import { Score } from "../../components/Score";
import { Footer } from "../../components/Footer"

export function StandardPost() {

    return (
        <div>
            <Header />

            <div>
                <BgImgPostPage />

                <div className={standarStyle.standardContainer}>
                    <div className={styles.titleContainer}>
                        <h3 className={styles.title}>
                            O enigma de outro mundo.
                        </h3>

                        <div className={styles.titleContent}>
                            <div className={styles.author}>
                                <p className={styles.firstPart}>por</p>
                                <p className={styles.secondPart}>Gabriel Zanon</p>
                            </div>
                             
                            <time className={styles.time} title="11 de Maio as 08:13" dateTime="2022-05-11 08:13:30">Publicado em 12/04/2023</time>
                        </div>
                    </div>
                </div>

                <div className={standarStyle.standardContainer}>
                    <div className={styles.content}>
                        <div>
                            <p>
                                É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver 
                                examinando sua diagramação. A vantagem de usar Lorem Ipsum é que ele tem uma distribuição normal de letras, ao contrário 
                                de "Conteúdo aqui, conteúdo aqui", fazendo com que ele tenha uma aparência similar a de um texto legível. Muitos softwares 
                                de publicação e editores de páginas na internet agora usam Lorem Ipsum como texto-modelo padrão,
                            </p>
                        </div>

                        <div className={styles.imgbody}>
                            <img src={img} alt="" />
                        </div>

                        <div>
                            <p>
                                É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver 
                                examinando sua diagramação. A vantagem de usar Lorem Ipsum é que ele tem uma distribuição normal de letras, ao contrário 
                                de "Conteúdo aqui, conteúdo aqui", fazendo com que ele tenha uma aparência similar a de um texto legível. Muitos softwares 
                                de publicação e editores de páginas na internet agora usam Lorem Ipsum como texto-modelo padrão,
                            </p>
                        </div>

                        <div>
                            <p>
                                É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver 
                                examinando sua diagramação. A vantagem de usar Lorem Ipsum é que ele tem uma distribuição normal de letras, ao contrário 
                                de "Conteúdo aqui, conteúdo aqui", fazendo com que ele tenha uma aparência similar a de um texto legível. Muitos softwares 
                                de publicação e editores de páginas na internet agora usam Lorem Ipsum como texto-modelo padrão,
                            </p>
                        </div>

                        <div className={styles.imgbody}>
                            <img src={img} alt="" />
                        </div>

                        <div>
                            <p>
                                É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver 
                                examinando sua diagramação. A vantagem de usar Lorem Ipsum é que ele tem uma distribuição normal de letras, ao contrário 
                                de "Conteúdo aqui, conteúdo aqui", fazendo com que ele tenha uma aparência similar a de um texto legível. Muitos softwares 
                                de publicação e editores de páginas na internet agora usam Lorem Ipsum como texto-modelo padrão,
                            </p>
                        </div>
                        
                        <Score />

                        <div className={styles.authorContainer}>
                            <div className={styles.authorImg}>
                                <img src={img2} alt="" />
                            </div>

                            <div className={styles.authorInfo}>
                                <div className={styles.author}>
                                    <p className={styles.firstPart}>por</p>
                                    <p className={styles.secondPart}>Gabriel Zanon</p>
                                </div>
                                
                                <time className={styles.time} title="11 de Maio as 08:13" dateTime="2022-05-11 08:13:30">Publicado em 12/04/2023</time>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}