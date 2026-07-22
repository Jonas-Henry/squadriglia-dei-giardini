import Container from '@components/common/Container';

import styles from './Services.module.css';

const services = [
  {
    id: 1,
    title: 'Manutenzione del giardino',
    description: 'Interventi professionali per mantenere il tuo giardino sempre curato.',
  },
  {
    id: 2,
    title: 'Potatura professionale',
    description: 'Potature precise per alberi, siepi e arbusti durante tutto l’anno.',
  },
  {
    id: 3,
    title: 'Impianti di irrigazione',
    description: 'Installazione e manutenzione di sistemi di irrigazione efficienti.',
  },
  {
    id: 4,
    title: 'Progettazione paesaggistica',
    description: 'Progetti personalizzati per valorizzare ogni spazio esterno.',
  },
  {
    id: 5,
    title: 'Cura del prato',
    description: 'Taglio, concimazione e trattamenti per un prato sempre impeccabile.',
  },
  {
    id: 6,
    title: 'Pulizia stagionale',
    description: 'Preparazione e manutenzione del giardino durante tutte le stagioni.',
  },
];

function Services() {
  return (
    <section className={styles.services}>
      <Container>
        <header className={styles.header}>
          <h2>I nostri servizi</h2>

          <p>
            Offriamo soluzioni professionali per valorizzare e mantenere ogni spazio verde con
            qualità e attenzione ai dettagli.
          </p>
        </header>

        <div className={styles.grid}>
          {services.map((service) => (
            <article key={service.id} className={styles.card}>
              <h3>{service.title}</h3>

              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Services;
