import { Outlet } from 'react-router-dom';
import styles from './MainLayout.module.css';
import Navbar from '@components/layout/Navbar/Navbar';

function MainLayout() {
  return (
    <div className={styles.layout}>
      <Navbar />

      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
