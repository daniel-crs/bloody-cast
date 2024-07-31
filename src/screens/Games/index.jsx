import styles from "../../Style/StandardContainerStyles.module.css"
import { useLocation } from "react-router-dom"

import { Header } from "../../components/Header"
import { BgImgCategoryPage } from '../../components/BgImgCategoryPage';
import { Filter } from '../../components/Filter';
import { CardRender } from '../../components/CardRender';
import { Footer } from '../../components/Footer';
import bgImg from "../../assets/pexels-lucadross-5976404.jpg"
import cardImg from "../../assets/Beetle-juice.webp"

export function Games() {
    const location = useLocation();
  
    const cards = [
        {
        img: cardImg,
        tag: "Jogos",
        title: "Jogo bizarro de Beetlejuice no set de filmagem lança no que vem.",
        text: "É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. A vantagem de usar Lorem Ipsum é que ele tem uma distribuição normal de letras, ao contrário de.",
        author: "Gabriel Zanon"
        },
    ]

    return (
        <div>
            <Header />

            <body>
                <BgImgCategoryPage title={"Jogos"} bgImg={bgImg} screenEndPoint={location.pathname} />

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