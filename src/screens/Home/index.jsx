import styles from './Home.module.css';
import { useState, useEffect } from "react";

import { Header } from "../../components/Header"
import { Slider } from '../../components/Slider';
import { CardRender } from '../../components/CardRender';
import { FeedBackBanner } from '../../components/FeedBackBanner';
import { InfoDropdown } from '../../components/InfoDropdown';
import { Footer } from '../../components/Footer';

export function Home() {
  const [extraInfo, setExtraInfo] = useState([]);
  const [movies, setMovies] = useState([]);

    useEffect(() => {
      fetch("http://localhost:1337/api/bloody-cast-infos?populate=*")
        .then((res) => res.json())
        .then((extraInfo) => setExtraInfo(extraInfo));
      }, []);
      
    useEffect(() => {
      fetch("http://localhost:1337/api/filmes?populate=*")
        .then((res) => res.json())
        .then((movies) => setMovies(movies));
    }, []);

  return (
    <div>
      <Header />

      <body className={styles.bodyContainer}>
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