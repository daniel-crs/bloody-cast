import styles from './Home.module.css';
import { useState, useEffect } from "react";

import { Header } from "../../components/Header"
import { Slider } from '../../components/Slider';
import { FeedBackBanner } from '../../components/FeedBackBanner';
import { InfoDropdown } from '../../components/InfoDropdown';
import { Footer } from '../../components/Footer';

export function Home() {
  const [data, setData] = useState([]);

    useEffect(() => {
        const url = "http://localhost:1337/api/bloody-cast-infos?populate=*";
        fetch(url)
        .then((res) => res.json())
        .then((post) => {
            setData(post.data);
        });
    }, []);

  return (
    <div>
      <Header />

      <body className={styles.bodyContainer}>

       <FeedBackBanner />

        <div className={styles.cardContainer}>
            <h3>
                Informações extras
            </h3> 
            <div className={styles.dropdownPosition}>
              {data?.map((post) => (
                <InfoDropdown title={post.attributes.title} description={post.attributes.description} />
              ))}
            </div>
        </div>
      </body>
      
     <Footer />
    </div>
  );
}