import styles from "../SliderStyles.module.css"
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import { SliderCardMobile } from '../../../components/SliderCardMobile';
import { SliderCardDesktop } from '../../../components/SliderCardDesktop';

export function PodCastSlider({ screenWidth }) {
  const [podcastData, setPodcastData] = useState([]);
  const api_url = process.env.REACT_APP_API_URL;
  const img_url = process.env.REACT_APP_API_IMG_URL;

  useEffect(() => {
      fetch(`${api_url}/podcasts?populate=*`)
        .then((res) => res.json())
        .then((podcastData) => setPodcastData(podcastData));
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
            {podcastData?.data?.filter(post => post.attributes.destaque === true).map((post) => (
              <SwiperSlide key={post.id} className={styles.swiperSlider}>
                <SliderCardMobile
                  id={post.id}
                  img={img_url + post.attributes.img.data.attributes.url}
                  tag={post.attributes.tag}  
                  title={post.attributes.title}
                  text={post.attributes.description}
                  author={post.attributes.author}
                />
              </SwiperSlide>
            ))}
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
            {podcastData?.data?.filter(post => post.attributes.destaque === true).map((post) => (
              <SwiperSlide className={styles.swiperSlider}>
                <SliderCardDesktop
                  id={post.id}
                  img={img_url + post.attributes.img.data.attributes.url}
                  tag={post.attributes.tag}  
                  title={post.attributes.title}
                  text={post.attributes.description}
                  author={post.attributes.author}
                />
              </SwiperSlide>
            ))}
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
              {podcastData?.data?.filter(post => post.attributes.destaque === true).map((post) => (
                <SwiperSlide className={styles.swiperSlider}>
                  <SliderCardDesktop
                    id={post.id}
                    img={img_url + post.attributes.img.data.attributes.url}
                    tag={post.attributes.tag}  
                    title={post.attributes.title}
                    text={post.attributes.description}
                    author={post.attributes.author}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )
        }
    }

    return (
        <div className={styles.swiperContainer}>
            <div className={styles.title}>
                <h3>Podcast</h3>
                <span className={styles.underBar}></span>
            </div>

          <ScreenRender />
        </div>
    )
}