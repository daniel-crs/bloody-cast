import styles from './Home.module.css';

import { Header } from "../../components/Header"
import { Slider } from '../../components/Slider';

export function Home() {
  return (
    <div>
      <Header />

      <body className={styles.bodyContainer}>
        <Slider />
      </body>
    </div>
  );
}