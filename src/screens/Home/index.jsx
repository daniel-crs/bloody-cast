import styles from './Home.module.css';

import { Header } from "../../components/Header"
import { Slider } from '../../components/Slider';
import { FeedBackBanner } from '../../components/FeedBackBanner';
import { InfoDropdown } from '../../components/InfoDropdown';
import { Footer } from '../../components/Footer';

export function Home() {
  const infoOptions = [
    {title: "Por que criamos o bloodcast", description: "BloodCast é um blog/podcast criado pela nossa equipe  pelo amor que possuímos pelo gênero de terror e pelo  desejo de compartilhar nossos conhecimentos sobre o mesmo com as pessoas."}, 
    {title: "Quem são os criadores.", description: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI,"},
    {title: "Data e horároio de lançamento de novos episódios do nosso podcast.", description: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI,"}
  ];

  return (
    <div>
      <Header />

      <body className={styles.bodyContainer}>
        <Slider />

        {/* <FeedBackBanner />

        <div className={styles.cardContainer}>
            <h3>
                Informações extras
            </h3> 
            <div className={styles.dropdownPosition}>
              {infoOptions.map(function(data) {
                return (
                  <InfoDropdown title={data.title} description={data.description} />
                )
              })}
            </div>
        </div> */}
      </body>
      
      {/* <Footer /> */}
    </div>
  );
}