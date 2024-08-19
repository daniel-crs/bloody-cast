import styles from "./StandardPodcastPost.module.css"
import standarStyle from "../../Style/StandardContainerStyles.module.css"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

import { Header } from "../../components/Header"
import { BgImgPostPage } from "../../components/BgImgPostPage"
import { TitleForPost } from "../../components/TitleForPost"
import { PodcastPlayer } from "../../components/PodcastPlayer"
import { Participants } from "../../components/Participants"
import { Footer } from "../../components/Footer"

import img2 from "../../assets/andras.webp"

export function StandardPodcastPost() {
    const { id } = useParams();
    const [data, setData] = useState();
    const [img, setImg] = useState();

    useEffect(() => {
        const url = "http://localhost:1337/api/podcasts/" + id + "?populate=*";
        fetch(url)
        .then((res) => res.json())
        .then((post) => {
            const vetorImgs = post.data.attributes.img.data.map(
                (img) => "http://localhost:1337" + img.attributes.url
              );
            setData(post.data);
            setImg(vetorImgs);
        });
    }, [id]);

    console.log(data);

    const participante = [
        {
          img: img2,
          name: "Gabriel Zanon"
        },
        {
          img: img2,
          name: "Gabriel Zanon"
        },
        {
          img: img2,
          name: "Gabriel Zanon"
        }
      ]

    return (
        <div>
            <Header />
            <div>
                <BgImgPostPage tag={data?.attributes?.tag} img={img} />

                <TitleForPost title={data?.attributes?.title} author={data?.attributes?.author} data={data?.attributes?.data} />

                <div className={standarStyle.standardContainerForPost}>
                    <div className={styles.content}>
                        <div className={styles.elements}>
                            <PodcastPlayer />
                        </div>

                        <div className={styles.description}>
                            <p>
                                {data?.attributes?.description}
                            </p>
                        </div>

                        <div>
                            <div className={styles.participantsTitle}>
                                <h3>Mais Recentes</h3>
                                <span className={styles.underBar}></span>
                            </div>

                            <div className={styles.participantsContainer}>
                                {participante.map(function(data) {
                                    return (
                                        <Participants img={data.img} name={data.name} />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}