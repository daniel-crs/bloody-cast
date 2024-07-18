import styles from './Movie.module.css';
import { useState, useEffect } from "react";

import { Header } from "../../components/Header"
import { BackGroundImg } from '../../components/BackGroundImg';
import { Filter } from '../../components/Filter';
import { CardMobile } from '../../components/CardMobile'
import { CardDesktop } from '../../components/CardDesktop';
import bgImg from "../../assets/pexels-lucadross-5976404.jpg"

export function Movie() {
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

  const ScreenRender = () => {
    if (screenWidth < 1024) {
        return (
            <CardMobile />
        )
    } else {
        return (
             <CardDesktop />
        )
    }
  } 

  return (
    <div>
      <Header />

      <body>
        <BackGroundImg title={"Cinema"} bgImg={bgImg} />

        <div className={styles.container}>
          <Filter />

          <div className={styles.cardsContainer}>
            <ScreenRender />
          </div>
        </div>
      </body>
    </div>
  );
}