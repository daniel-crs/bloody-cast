import styles from './Home.module.css';

import { Navbar } from '../../components/navbar';

export function Home() {
  return (
    <div>
      <Navbar />

      <div className={styles.container}>
        <h1>Hello world</h1>
      </div>
    </div>
  );
}