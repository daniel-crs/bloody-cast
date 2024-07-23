import styles from './Movie.module.css';

import { Header } from "../../components/Header"
import { BackGroundImg } from '../../components/BackGroundImg';
import { Filter } from '../../components/Filter';
import { CardRender } from '../../components/CardRender';
import { Footer } from '../../components/Footer';
import bgImg from "../../assets/pexels-lucadross-5976404.jpg"

export function Movie() {
  return (
    <div>
      <Header />

      <body>
        <BackGroundImg title={"Cinema"} bgImg={bgImg} />

        <div className={styles.container}>
          <Filter />

          <CardRender 
            tag={"Cinema"}  
            title={"Jogos mortais e suas referenciasa batman na feira da fruta."}
            text={"É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. A vantagem de usar Lorem Ipsum é que ele tem uma distribuição normal de letras, ao contrário de."}
            author={"Gabriel Zanon"}
          />
        </div>
      </body>

      <Footer />
    </div>
  );
}