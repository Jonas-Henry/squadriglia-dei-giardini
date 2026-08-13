import Container from '@components/common/Container';

import { Star } from 'lucide-react';

import styles from './Testimonials.module.css';

const testimonials = [
  {
    id: 1,
    name: 'Marco Rossi',
    city: 'Milano',
    comment:
      'Servizio impeccabile. Il nostro giardino è completamente rinato grazie alla professionalità del team.',
  },
  {
    id: 2,
    name: 'Giulia Bianchi',
    city: 'Torino',
    comment:
      'Personale puntuale, disponibile e molto competente. Consiglio vivamente questa azienda.',
  },
  {
    id: 3,
    name: 'Luca Ferrari',
    city: 'Bologna',
    comment:
      'Lavoro eseguito con grande precisione e attenzione ai dettagli. Risultato oltre le aspettative.',
  },
];

function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <Container>
        <header className={styles.header}>
          <h2>Cosa dicono i nostri clienti</h2>

          <p>La soddisfazione dei nostri clienti è il miglior risultato del nostro lavoro.</p>
        </header>

        <div className={styles.grid}>
          {testimonials.map((testimonial) => (
            <article key={testimonial.id} className={styles.card}>
              <div className={styles.stars}>
                {[...Array(5)].map((_, index) => (
                  <Star key={index} size={18} fill="currentColor" strokeWidth={1.8} />
                ))}
              </div>

              <p className={styles.comment}>"{testimonial.comment}"</p>

              <footer className={styles.footer}>
                <strong>{testimonial.name}</strong>

                <span>{testimonial.city}</span>
              </footer>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Testimonials;
