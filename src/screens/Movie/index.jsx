import styles from './Movie.module.css';
import { useState, useEffect } from "react";

import { Header } from "../../components/Header"
import { FilterModal } from "../../components/FilterModal";
import { CardMobile } from '../../components/CardMobile'
import { CardDesktop } from '../../components/CardDesktop';
import { RiMovie2Fill } from "react-icons/ri";
import { IoFilter } from "react-icons/io5";

export function Movie() {
  const [showFilter, setShowFilter] = useState(false);
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
        <div className={styles.titleContainer}>
            <h3>Cinema</h3>
            <RiMovie2Fill className={styles.icon} />
        </div>

        <div className={styles.container}>
          <div className={styles.elements}>
              <div className={styles.title}>
                  <h3>Mais Recentes</h3>
                  <span className={styles.underBar}></span>
              </div>

              <button className={styles.filter} onClick={() => setShowFilter(true)}>
                  <p>Filtro</p>
                  <IoFilter className={styles.icon} />
              </button>
          </div>

          <div className={styles.cardsContainer}>
            <ScreenRender />
          </div>
        </div>
      </body>

      <FilterModal 
          showFilter={showFilter} 
          setShowFilter={() => setShowFilter(!showFilter)} 
      />
    </div>
  );
}