import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import Container from '@components/common/Container/Container';

function Navbar() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.container}>
          <Link to="/" className={styles.logo}>
            Squadriglia dei Giardini
          </Link>

          <nav>
            <ul className={styles.menu}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/services">Servizi</Link>
              </li>
              <li>
                <Link to="/about">Chi siamo</Link>
              </li>
              <li>
                <Link to="/">Galleria</Link>
              </li>
              <li>
                <Link to="/contact">Contatti</Link>
              </li>
            </ul>
          </nav>

          <Link to="/booking" className={styles.button}>
            Richiedi un preventivo
          </Link>
        </div>
      </Container>
    </header>
  );
}

export default Navbar;
