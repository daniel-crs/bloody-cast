import styles from "./StandardPost.module.css"
import standarStyle from "../../Style/StandardContainerStyles.module.css"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

import { Header } from "../../components/Header"
import { BgImgPostPage } from "../../components/BgImgPostPage"
import { TitleForPost } from "../../components/TitleForPost"
import img2 from "../../assets/andras.webp"
import { Score } from "../../components/Score";
import { Footer } from "../../components/Footer"

export function StandardPost() {
    const { tag, id } = useParams();
    const [data, setData] = useState();

    useEffect(() => {
        const url = `http://localhost:1337/api/${tag}/${id}?populate=*`;

        fetch(url)
        .then((res) => res.json())
        .then((post) => {''
            setData(post.data);
        });

    }, [tag, id]);
    
    const content = data?.attributes?.richText;

    return (
        <div>
            <Header />

            <div>
                <BgImgPostPage tag={data?.attributes?.tag} img={"http://localhost:1337" + data?.attributes?.mainImg?.data?.attributes?.url} />

                <TitleForPost title={data?.attributes?.title} author={data?.attributes?.author} data={data?.attributes?.date} />

                <div className={standarStyle.standardContainerForPost}>
                    <div className={styles.content}>
                        <div>
                            <BlocksRenderer content={content} className={styles.imgbody} />
                        </div>
                        
                        <div className={styles.underBody}>
                            <Score score={data?.attributes?.score} />

                            <div className={styles.authorContainer}>
                                <div className={styles.authorImg}>
                                    <img src={img2} alt="" />
                                </div>

                                <div className={styles.authorInfo}>
                                    <div className={styles.author}>
                                        <p className={styles.firstPart}>por</p>
                                        <p className={styles.secondPart}>{data?.attributes?.author}</p>
                                    </div>
                                    
                                    <time className={styles.time} title="11 de Maio as 08:13" dateTime="2022-05-11 08:13:30">Publicado em {data?.attributes?.date}</time>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}