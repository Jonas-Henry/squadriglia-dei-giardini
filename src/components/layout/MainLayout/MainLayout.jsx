import { Outlet } from 'react-router-dom';
import styles from './MainLayout.module.css';

function MainLayout() {
  return (
    <div className={styles.layout}>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
