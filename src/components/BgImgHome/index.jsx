import styles from "./BgImgHome.module.css"
import { useState, useEffect } from "react";

export function BgImgHome() {
    const api_url = process.env.REACT_APP_API_URL;
    const img_url = process.env.REACT_APP_API_IMG_URL;
    const [banner, setBanner] = useState([]);

    useEffect(() => {
        fetch(`${api_url}/wellcome-banners?populate=*`)
            .then((res) => res.json())
            .then((banner) => setBanner(banner));
    }, []);

    return (
        <>
            {banner?.data?.map((post) => (
                <div key={post.id} className={styles.imgHeader}>
                    <img src={img_url + post.attributes.img.data.attributes.url} alt="background-img" />

                    <div className={styles.info}>
                        <h3>{post.attributes.Title}</h3>

                        <p>
                            {post.attributes.description}
                        </p>
                    </div>
                </div>
            ))}
        </>
    )
}