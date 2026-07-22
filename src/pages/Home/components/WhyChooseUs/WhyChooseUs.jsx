import Container from '@components/common/Container';

import { Award, ShieldCheck, Clock3 } from 'lucide-react';

import styles from './WhyChooseUs.module.css';

const advantages = [
  {
    id: 1,
    icon: Award,
    title: 'Esperienza',
    description: 'Anni di esperienza nella progettazione e manutenzione di spazi verdi.',
  },
  {
    id: 2,
    icon: ShieldCheck,
    title: 'Cura dei dettagli',
    description: 'Ogni progetto viene realizzato con precisione e attenzione ai particolari.',
  },
  {
    id: 3,
    icon: Clock3,
    title: 'Puntualità',
    description: 'Rispettiamo tempi e impegni, garantendo un servizio affidabile.',
  },
];

function WhyChooseUs() {
  return (
    <section className={styles.whyChooseUs}>
      <Container>
        <header className={styles.header}>
          <h2>Perché scegliere noi</h2>

          <p>
            Ogni giardino racconta una storia. Il nostro obiettivo è valorizzare ogni spazio con
            professionalità, qualità e passione.
          </p>
        </header>

        <div className={styles.grid}>
          {advantages.map((advantage) => {
            const Icon = advantage.icon;

            return (
              <article key={advantage.id} className={styles.card}>
                <div>
                  <Icon size={34} strokeWidth={2} />
                </div>

                <h3>{advantage.title}</h3>

                <p>{advantage.description}</p>
              </article>
            );
          })}
          )
        </div>
      </Container>
    </section>
  );
}

export default WhyChooseUs;
