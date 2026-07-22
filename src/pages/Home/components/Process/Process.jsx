import Container from '@components/common/Container';

import styles from './Process.module.css';

const steps = [
  {
    id: 1,
    number: '01',
    title: 'Sopralluogo',
    description: 'Analizziamo attentamente il giardino e ascoltiamo le esigenze del cliente.',
  },
  {
    id: 2,
    number: '02',
    title: 'Preventivo',
    description: 'Prepariamo una proposta trasparente e personalizzata per ogni progetto.',
  },
  {
    id: 3,
    number: '03',
    title: 'Realizzazione',
    description: 'Il nostro team realizza il lavoro con precisione e materiali di qualità.',
  },
  {
    id: 4,
    number: '04',
    title: 'Consegna',
    description: 'Consegniamo un giardino pronto per essere vissuto e apprezzato.',
  },
];

function Process() {
  return (
    <section className={styles.process}>
      <Container>
        <header className={styles.header}>
          <h2>Come lavoriamo</h2>

          <p>Un processo semplice e organizzato per garantire qualità in ogni fase del progetto.</p>
        </header>

        <div className={styles.grid}>
          {steps.map((step) => (
            <article key={step.id} className={styles.card}>
              <span className={styles.number}>{step.number}</span>

              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Process;
