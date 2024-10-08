import styles from './Home.module.css';
import { useState, useEffect } from "react";

import { Header } from "../../components/Header"
import { BgImgHome } from '../../components/BgImgHome';
import { Slider } from '../../components/Slider';
import { PodCastSlider } from '../../components/CategorySliders/PodCastSlider';
import { MovieSlider } from '../../components/CategorySliders/MovieSlider';
import { BookSlider } from '../../components/CategorySliders/BookSlider';
import { MusicSlider } from '../../components/CategorySliders/MusicSlider';
import { GamesSlider } from '../../components/CategorySliders/GamesSlider';
import { FeedBackBanner } from '../../components/FeedBackBanner';
import { InfoDropdown } from '../../components/InfoDropdown';
import { Footer } from '../../components/Footer';

export function Home() {
  const [extraInfo, setExtraInfo] = useState([]);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const api_url = process.env.REACT_APP_API_URL;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const addScreenWidth = () => {
      setScreenWidth(window.innerWidth);
  }

  useEffect(() => {
      window.addEventListener('resize', addScreenWidth);
          return() => {
              window.removeEventListener('resize', addScreenWidth)
          }
  }, [screenWidth]);

    useEffect(() => {
      fetch(`${api_url}/bloody-cast-infos?populate=*`)
        .then((res) => res.json())
        .then((extraInfo) => setExtraInfo(extraInfo));
      }, []);
    
  return (
    <div>
      <Header />

      <div className={styles.bodyContainer}>
        <BgImgHome />

        <PodCastSlider screenWidth={screenWidth} />

        <MovieSlider screenWidth={screenWidth} />

        <BookSlider screenWidth={screenWidth} />

        <MusicSlider screenWidth={screenWidth} />

        <GamesSlider screenWidth={screenWidth} />

       <FeedBackBanner />

        <div className={styles.cardContainer}>
            <h3>
                Informações extras
            </h3> 
            <div className={styles.dropdownPosition}>
              {extraInfo?.data?.map((post) => (
                <InfoDropdown key={post.id} title={post.attributes.title} description={post.attributes.description} />
              ))}
            </div>
        </div>
      </div>
      
     <Footer />
    </div>
  );
}