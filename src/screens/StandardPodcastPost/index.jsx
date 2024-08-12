import styles from "./StandardPodcastPost.module.css"
import standarStyle from "../../Style/StandardContainerStyles.module.css"

import { Header } from "../../components/Header"
import { BgImgPostPage } from "../../components/BgImgPostPage"
import { TitleForPost } from "../../components/TitleForPost"
import { PodcastPlayer } from "../../components/PodcastPlayer"
import { Participants } from "../../components/Participants"
import { Footer } from "../../components/Footer"

import img2 from "../../assets/andras.webp"

export function StandardPodcastPost() {
    const participante = [
        {
          img: img2,
          name: "Gabriel Zanon"
        },
        {
          img: img2,
          name: "Gabriel Zanon"
        },
        {
          img: img2,
          name: "Gabriel Zanon"
        }
      ]

    return (
        <div>
            <Header />
            <div>
                <BgImgPostPage />

                <TitleForPost />

                <div className={standarStyle.standardContainerForPost}>
                    <div className={styles.content}>
                        <div className={styles.elements}>
                            <PodcastPlayer />
                        </div>

                        <div className={styles.description}>
                            <p>
                                É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver 
                                examinando sua diagramação. A vantagem de usar Lorem Ipsum é que ele tem uma distribuição normal de letras, ao contrário 
                                de "Conteúdo aqui, conteúdo aqui", fazendo com que ele tenha uma aparência similar a de um texto legível. Muitos softwares 
                                de publicação e editores de páginas na internet agora usam Lorem Ipsum como texto-modelo padrão,
                            </p>
                        </div>

                        <div>
                            <div className={styles.participantsTitle}>
                                <h3>Mais Recentes</h3>
                                <span className={styles.underBar}></span>
                            </div>

                            <div className={styles.participantsContainer}>
                                {participante.map(function(data) {
                                    return (
                                        <Participants img={data.img} name={data.name} />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}