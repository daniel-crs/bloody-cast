import styles from './Movie.module.css';

import { Header } from "../../components/Header"
import { StandardCards } from '../../components/StandardCard';
import { RiMovie2Fill } from "react-icons/ri";

export function Movie() {
  return (
    <div>
      <Header />

      <body>
        <div className={styles.titleContainer}>
            <h3>Cinema</h3>
            <RiMovie2Fill className={styles.icon} />
        </div>

        <StandardCards />
      </body>
    </div>
  );
}