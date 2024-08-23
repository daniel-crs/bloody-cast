import styles from "./MovieSlider.module.css"
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import { SliderCardMobile } from '../../components/SliderCardMobile';
import { SliderCardDesktop } from '../../components/SliderCardDesktop';

export function MovieSlider({ screenWidth }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch("http://localhost:1337/api/filmes?populate=*")
          .then((res) => res.json())
          .then((movies) => setMovies(movies));
      }, []);

    const ScreenRender = () => {
        if (screenWidth < 768) {
            return (
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                style={{
                    "--swiper-pagination-color": "var(--red)",
                    "--swiper-pagination-bullet-inactive-color": "var(--white)",
                    "--swiper-pagination-bullet-size": "8px",
                    "--swiper-pagination-bullet-horizontal-gap": "5px"
                }}
                className={styles.swiper}
              >
                <SwiperSlide className={styles.swiperSlider}>
                  <SliderCardMobile/>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlider}>
                  <SliderCardMobile/>
                </SwiperSlide>
              </Swiper>
            )
        } else if (screenWidth < 1280) {
            return (
              <Swiper
                slidesPerView={2}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                style={{
                    "--swiper-pagination-color": "var(--red)",
                    "--swiper-pagination-bullet-inactive-color": "var(--white)",
                    "--swiper-pagination-bullet-size": "8px",
                    "--swiper-pagination-bullet-horizontal-gap": "5px"
                }}
                className={styles.swiper}
              >
                <SwiperSlide className={styles.swiperSlider}>
                  <SliderCardDesktop />
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlider}>
                  <SliderCardDesktop />
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlider}>
                  <SliderCardDesktop />
                </SwiperSlide>
              </Swiper>
            )
        } else {
            return (
                <Swiper
                  slidesPerView={3}
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  style={{
                    "--swiper-pagination-color": "var(--red)",
                    "--swiper-pagination-bullet-inactive-color": "var(--white)",
                    "--swiper-pagination-bullet-size": "8px",
                    "--swiper-pagination-bullet-horizontal-gap": "5px"
                }}
                  className={styles.swiper}
                >
                  <SwiperSlide className={styles.swiperSlider}>
                    <SliderCardDesktop />
                  </SwiperSlide>
                  <SwiperSlide className={styles.swiperSlider}>
                    <SliderCardDesktop />
                  </SwiperSlide>
                  <SwiperSlide className={styles.swiperSlider}>
                    <SliderCardDesktop />
                  </SwiperSlide>
                  <SwiperSlide className={styles.swiperSlider}>
                    <SliderCardDesktop />
                  </SwiperSlide>
                  <SwiperSlide className={styles.swiperSlider}>
                    <SliderCardDesktop />
                  </SwiperSlide>
                  <SwiperSlide className={styles.swiperSlider}>
                    <SliderCardDesktop />
                  </SwiperSlide>
                </Swiper>
              )
        }
    }

    return (
        <div className={styles.swiperContainer}>
            <div className={styles.title}>
                <h3>Filmes</h3>
                <span className={styles.underBar}></span>
            </div>

          <ScreenRender />
        </div>
    )
}