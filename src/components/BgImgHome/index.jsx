import styles from "./BgImgHome.module.css"
import { useState, useEffect } from "react";

export function BgImgHome({ img }) {
    const [banner, setBanner] = useState([]);

    useEffect(() => {
        fetch("http://localhost:1337/api/wellcome-banners?populate=*")
            .then((res) => res.json())
            .then((banner) => setBanner(banner));
    }, []);

    return (
        <>
            {banner?.data?.map((post) => (
                <div key={post.id} className={styles.imgHeader}>
                    <img src={"http://localhost:1337" + post.attributes.img.data.attributes.url} alt="background-img" />

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