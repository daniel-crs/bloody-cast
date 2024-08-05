import styles from "./StandardPodcastPost.module.css"
import standarStyle from "../../Style/StandardContainerStyles.module.css"

import { Header } from "../../components/Header"
import { BgImgPostPage } from "../../components/BgImgPostPage"
import { TitleForPost } from "../../components/TitleForPost"

export function StandardPodcastPost() {
    return (
        <div>
            <Header />
            <div>
                <BgImgPostPage />

                <TitleForPost />
            </div>
        </div>
    )
}