import styles from './Slider.module.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'

import img1 from "../../assets/invocacao-do-mal-4.jpg"
import img2 from "../../assets/A-guerra-dos-mundos.webp"
import img3 from "../../assets/it-how.webp"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

export function Slider() {
  const sliderOptions = [
    {imgURL: img1, tag: "Crítica", title: "Invocação do mal 4"},
    {imgURL: img2, tag: "Podcast", title: "A Guerra dos mundos"},
    {imgURL: img3, tag: "Livros", title: "It a coisa e sua analogia a musíca classica"}
];

    return (
        <Swiper 
          pagination={true}
          Autoplay={true}
          modules={[Pagination, Autoplay]}
          className={styles.sliderContainer}
          style={{
            "--swiper-pagination-color": "var(--red)",
            "--swiper-pagination-bullet-inactive-color": "var(--white)",
            "--swiper-pagination-bullet-size": "8px",
            "--swiper-pagination-bullet-horizontal-gap": "5px"
          }}
        >
          {sliderOptions.map(function(data){
            return(
              <SwiperSlide className={styles.container}>
                  <div className={styles.imgElement}>
                      <img src={data.imgURL} alt="Img" />

                      <div className={styles.info}>
                        <div className={styles.tag}>
                            <p>{data.tag}s</p>
                        </div>

                        <h3>
                          {data.title}
                        </h3>
                      </div>
                  </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
    )
}