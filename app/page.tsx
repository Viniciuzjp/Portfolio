import { Container } from '@av-digital/components'
import Header from './Ui/Header/Header';
import { Hero } from './Ui/Hero/Hero';
import { About } from './Ui/About/About';
import Projects from './Ui/Projects/Projects';
import Stack from './Ui/Skills/Skills';
import { Contact } from './Ui/Contact/Contact';

export default function Main() {
  return (
    <main style={{
        fontFamily: "'Onest', sans-serif",
        background: "#070707",
        color: "#e0e0e0",
        minHeight: "100vh",
        scrollBehavior: "smooth",
      }}>
    <Header/>
    <Container size='xl'>
      <Hero/>
      <About/>
      <Projects/>
      <Stack/>
      <Contact/>
    </Container>
    </main>

  );
}
