import Container from '@/components/common/Container';

import garden1 from '@assets/images/gallery/garden1.jpg';
import garden2 from '@assets/images/gallery/garden2.jpg';
import garden3 from '@assets/images/gallery/garden3.jpg';
import garden4 from '@assets/images/gallery/garden4.jpg';
import garden5 from '@assets/images/gallery/garden5.jpg';
import garden6 from '@assets/images/gallery/garden6.jpg';

import styles from './gallery.module.css';

const galleryImages = [
  {
    id: 1,
    image: garden1,
    alt: 'Giardino moderno con prato verde',
  },
  {
    id: 2,
    image: garden2,
    alt: 'Giardino con alberi ornamentali',
  },
  {
    id: 3,
    image: garden3,
    alt: 'Giardino verde con fiori colorati',
  },
  {
    id: 4,
    image: garden4,
    alt: 'Giardino residenziale curato',
  },
  {
    id: 5,
    image: garden5,
    alt: 'Paesaggio con arbusti e prato',
  },
  {
    id: 6,
    image: garden6,
    alt: 'Giardino elegante con vegetazione',
  },
];

function Gallery() {
  return (
    <section className={styles.gallery}>
      <Container>
        <header className={styles.header}>
          <h2>I nostri lavori</h2>

          <p>Alcuni dei progetti realizati dal nostro team con cura, precisione e passione.</p>
        </header>

        <div>
          {galleryImages.map((item) => (
            <article key={item.id} className={styles.card}>
              <img src={item.image} alt={item.alt} className={styles.image} />
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Gallery;
