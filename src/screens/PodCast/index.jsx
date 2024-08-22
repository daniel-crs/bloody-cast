import styles from "../../Style/StandardContainerStyles.module.css"
import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react"

import { Header } from "../../components/Header"
import { BgImgCategoryPage } from '../../components/BgImgCategoryPage';
import { Filter } from "../../components/Filter"
import { CardRender } from "../../components/CardRender";
import { Footer } from "../../components/Footer"
import bgImg from "../../assets/pexels-lucadross-5976404.jpg"

export function PodCast() {
    const location = useLocation();

    const [data, setData] = useState([]);

    useEffect(() => {
        const url = "http://localhost:1337/api/podcasts?populate=*";
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
                <BgImgCategoryPage title={"PodCast"} bgImg={bgImg} screenEndPoint={location.pathname} />

                <div className={styles.standardContainer}>
                    <Filter />

                    {data?.map((post) => (     
                        <CardRender
                            id={post.id}
                            img={"http://localhost:1337" + post.attributes.img.data.attributes.url}
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