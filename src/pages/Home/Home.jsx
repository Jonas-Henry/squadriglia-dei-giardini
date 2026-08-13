import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import Process from './components/Process/Process';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Process />
      <Gallery />
      <Testimonials />
    </>
  );
}

export default Home;
