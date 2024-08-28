import styles from "../../Style/StandardContainerStyles.module.css"
import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react";

import { Header } from "../../components/Header"
import { BgImgCategoryPage } from '../../components/BgImgCategoryPage';
import { Filter } from '../../components/Filter';
import { CardRender } from '../../components/CardRender';
import { Footer } from '../../components/Footer';
import bgImg from "../../assets/pexels-lucadross-5976404.jpg"

export function Books() {
    const location = useLocation();
    const [data, setData] = useState([]);
    const api_url = process.env.REACT_APP_API_URL;
    const img_url = process.env.REACT_APP_API_IMG_URL;

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    useEffect(() => {
        const url = `${api_url}/livros?populate=*`;
        fetch(url)
        .then((res) => res.json())
        .then((post) => {
            setData(post.data);
        });
    }, []);

    return (
        <div>
            <Header />

            <body>
                <BgImgCategoryPage title={"Livros"} bgImg={bgImg} screenEndPoint={location.pathname} />

                <div className={styles.standardContainer}>
                <Filter />

                {data?.map((post) => (
                    <CardRender
                        key={post.id}
                        id={post.id}
                        img={img_url + post.attributes.mainImg.data.attributes.url}
                        tag={post.attributes.tag}  
                        title={post.attributes.title}
                        text={post.attributes.description}
                        author={post.attributes.author}
                    />
                ))}
                </div>
            </body>

            <Footer />
        </div>
    )
}