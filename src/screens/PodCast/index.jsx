import styles from "../../Style/StandardContainerStyles.module.css"
import { useLocation } from "react-router-dom"

import { Header } from "../../components/Header"
import { BgImgCategoryPage } from '../../components/BgImgCategoryPage';
import { Filter } from "../../components/Filter"
import { CardRender } from "../../components/CardRender";
import { Footer } from "../../components/Footer"
import bgImg from "../../assets/pexels-lucadross-5976404.jpg"
import cardImg from "../../assets/Mad-God.png"

export function PodCast() {
    const location = useLocation();

    return (
        <div>
            <Header />

            <body>
                <BgImgCategoryPage title={"PodCast"} bgImg={bgImg} screenEndPoint={location.pathname} />

                <div className={styles.standardContainer}>
                    <Filter />

                    <CardRender
                        img={cardImg}
                        tag={"PodCast"}  
                        title={"O vale da estranheza presente em mad god."}
                        text={"É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. A vantagem de usar Lorem Ipsum é que ele tem uma distribuição normal de letras, ao contrário de."}
                        author={"Gabriel Zanon"}
                    />
                </div>
            </body>
            
            <Footer />
        </div>
    )
}