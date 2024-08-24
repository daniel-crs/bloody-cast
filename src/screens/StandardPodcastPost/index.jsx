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

export function StandardPodcastPost() {
    const { id } = useParams();
    const [data, setData] = useState();
    const [participantsData, setParticipantsData] = useState([])

    useEffect(() => {
        const url = "http://localhost:1337/api/podcasts/" + id + "?populate=*";

        fetch(url)
        .then((res) => res.json())
        .then((post) => {
            post.data.attributes.participants.data.map((content) => {
                fetch(`http://localhost:1337/api/participants/${content.id}?populate=*`)
                .then((res) => res.json())
                .then((participantContent) => {
                    setParticipantsData(participantsData => [ ...participantsData, participantContent ]);
                })
            })

            setData(post.data);
        });

    }, [id]);

    return (
        <div>
            <Header />
            <div>
                <BgImgPostPage tag={data?.attributes?.tag} img={"http://localhost:1337" + data?.attributes?.img?.data?.attributes?.url} />

                <TitleForPost title={data?.attributes?.title} author={data?.attributes?.author} data={data?.attributes?.date} />

                <div className={standarStyle.standardContainerForPost}>
                    <div className={styles.content}>
                        <div className={styles.elements}>
                            <PodcastPlayer audio={"http://localhost:1337" + data?.attributes?.audio?.data?.attributes?.url} />
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
                            {participantsData.map((participant) => (
                                <Participants key={participant?.data?.id} profile={"http://localhost:1337" + participant?.data?.attributes?.profile?.data?.attributes?.url} name={participant?.data?.attributes?.name} />  
                            ))}  
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}