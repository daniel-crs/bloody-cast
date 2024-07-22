import styles from './Home.module.css';

import { Header } from "../../components/Header"
import { Slider } from '../../components/Slider';
import { FeedBackBanner } from '../../components/FeedBackBanner';
import { Footer } from '../../components/Footer';

export function Home() {
  return (
    <div>
      <Header />

      <body className={styles.bodyContainer}>
        <Slider />

        <FeedBackBanner />
      </body>
      
      <Footer />
    </div>
  );
}