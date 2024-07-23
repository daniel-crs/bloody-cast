import styles from "./CardRender.module.css"
import { useState, useEffect } from "react";

import { CardMobile } from '../../components/CardMobile'
import { CardDesktop } from '../../components/CardDesktop';

export function CardRender({ tag, title, text, author }) {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const addScreenWidth = () => {
        setScreenWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', addScreenWidth);

        return() => {
            window.removeEventListener('resize', addScreenWidth)
        }
    }, [screenWidth]);

    const ScreenRender = () => {
        if (screenWidth < 1024) {
            return (
                <CardMobile tag={tag} title={title} author={author} />
            )
        } else {
            return (
                <CardDesktop tag={tag} title={title} text={text} author={author} />
            )
        }
    } 

    return (
        <div className={styles.cardsContainer}>
            <ScreenRender />
        </div>
    )
}