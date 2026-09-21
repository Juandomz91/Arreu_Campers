import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import { QueFem, QuiSom, ComTreballem, PerQue } from './components/Sections.jsx';
import ContactForm from './components/ContactForm.jsx';
import { colors } from './theme.js';

export default function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', maxWidth: '100%', overflowX: 'clip', background: colors.bg }}>
      <Nav />
      <Hero />
      <QueFem />
      <QuiSom />
      <ComTreballem />
      <PerQue />
      <ContactForm />
    </div>
  );
}
