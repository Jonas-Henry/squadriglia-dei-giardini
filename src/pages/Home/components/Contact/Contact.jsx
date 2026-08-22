import Container from '@components/common/Container';
import Button from '@components/common/Button';

import { MapPin, Phone, Mail, CalendarDays } from 'lucide-react';

import styles from './Contact.module.css';

const contactInfo = [
  {
    id: 1,
    icon: MapPin,
    title: 'Dove siamo',
    text: 'Mogliano Veneto, Treviso',
  },
  {
    id: 2,
    icon: Phone,
    title: 'Telefono',
    text: '+39 000 000 0000',
  },
  {
    id: 3,
    icon: Mail,
    title: 'Email',
    text: 'info@squadrigliadeigiardini.it',
  },
];

function Contact() {
  return (
    <section className={styles.contact}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <span className={styles.subtitle}>Contattaci</span>

            <h2>
              Pronto a trasformare
              <br />
              il tuo spazio verde?
            </h2>

            <p>
              Raccontaci le tue esigenze. Saremo felici di ascoltare le tue idee e trovare insieme
              la soluzione migliore per il tuo giardino.
            </p>

            <div className={styles.info}>
              {contactInfo.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.id} className={styles.infoItem}>
                    <div className={styles.icon}>
                      <Icon size={22} />
                    </div>

                    <div>
                      <strong>{item.title}</strong>

                      <span>{item.text}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={styles.cta}>
            <CalendarDays size={42} strokeWidth={1.5} />

            <h3>Richiedi un preventivo</h3>

            <p>Contattaci per ricevere una proposta personalizzata per il tuo spazio verde.</p>

            <Button>Richiedi un preventivo</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Contact;
