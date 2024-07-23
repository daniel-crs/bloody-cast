import styles from "../../Style/StandardContainerStyles.module.css"
import { useLocation } from "react-router-dom"

import { Header } from "../../components/Header"
import { BackGroundImg } from '../../components/BackGroundImg';
import { Filter } from '../../components/Filter';
import { CardRender } from '../../components/CardRender';
import { Footer } from '../../components/Footer';
import bgImg from "../../assets/pexels-lucadross-5976404.jpg"
import cardImg from "../../assets/A-guerra-dos-mundos.webp"

export function Books() {
    const location = useLocation();
  
    const cards = [
        {
        img: cardImg,
        tag: "Livros",
        title: "Como as caixa de águas inspirou a criação dos Tripods de guerra dos mundos.",
        text: "É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. A vantagem de usar Lorem Ipsum é que ele tem uma distribuição normal de letras, ao contrário de.",
        author: "amigo do Zanon"
        },
    ]

    return (
        <div>
            <Header />

            <body>
                <BackGroundImg title={"Livros"} bgImg={bgImg} screenEndPoint={location.pathname} />

                <div className={styles.standardContainer}>
                <Filter />

                {cards.map(function(data) {
                    return (
                    <CardRender
                        img={data.img}
                        tag={data.tag}  
                        title={data.title}
                        text={data.text}
                        author={data.author}
                    />
                    )
                })}
                </div>
            </body>

            <Footer />
        </div>
    )
}