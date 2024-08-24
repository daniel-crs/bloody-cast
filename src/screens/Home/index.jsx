import styles from './Home.module.css';
import { useState, useEffect } from "react";


import { Header } from "../../components/Header"
import { Slider } from '../../components/Slider';
import { MovieSlider } from '../../components/CategorySliders/MovieSlider';
import { BookSlider } from '../../components/CategorySliders/BookSlider';
import { FeedBackBanner } from '../../components/FeedBackBanner';
import { InfoDropdown } from '../../components/InfoDropdown';
import { Footer } from '../../components/Footer';

export function Home() {
  const [extraInfo, setExtraInfo] = useState([]);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

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
      fetch("http://localhost:1337/api/bloody-cast-infos?populate=*")
        .then((res) => res.json())
        .then((extraInfo) => setExtraInfo(extraInfo));
      }, []);

    
  return (
    <div>
      <Header />

      <body className={styles.bodyContainer}>
        <Slider />

        <MovieSlider screenWidth={screenWidth} />

        {/* <BookSlider screenWidth={screenWidth} /> */}

       <FeedBackBanner />

        <div className={styles.cardContainer}>
            <h3>
                Informações extras
            </h3> 
            <div className={styles.dropdownPosition}>
              {extraInfo?.data?.map((post) => (
                <InfoDropdown title={post.attributes.title} description={post.attributes.description} />
              ))}
            </div>
        </div>
      </body>
      
     <Footer />
    </div>
  );
}