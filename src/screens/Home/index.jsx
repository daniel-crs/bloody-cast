import styles from './Home.module.css';
import { useState, useEffect } from "react";


import { Header } from "../../components/Header"
import { Slider } from '../../components/Slider';
import { MovieSlider } from '../../components/MovieSlider';
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
        <MovieSlider screenWidth={screenWidth} />

        {/* {movies?.data?.map((post) => (
            <CardRender
                id={post.id}
                img={"http://localhost:1337" + post.attributes.mainImg.data.attributes.url}
                tag={post.attributes.tag}  
                title={post.attributes.title}
                text={post.attributes.description}
                author={post.attributes.author}
            />
        ))} */}

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