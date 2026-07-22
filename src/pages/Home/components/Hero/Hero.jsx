import Button from '@components/common/Button';
import Container from '@components/common/Container';

import heroImage from '@assets/images/hero/hero-placeholder.jpg';

import styles from './Hero.module.css';

function Hero() {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <span className={styles.subtitle}>Progettazione e manutenzione del verde</span>

            <h1>
              Cura professionale
              <br />
              del tuo giardino
            </h1>

            <p>
              Realizziamo giardini eleganti e funzionali, progettati per valorizzare ogni spazio
              esterno con qualità, precisione e attenzione ai dettagli.
            </p>

            <div className={styles.actions}>
              <Button>Richiedi un preventivo</Button>

              <Button variant="secondary">Scopri i servizi</Button>
            </div>
          </div>

          <div className={styles.imageContainer}>
            <img src={heroImage} alt="Giardino curato" className={styles.image} />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
