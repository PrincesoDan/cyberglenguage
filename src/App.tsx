import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Method } from './components/Method';
import { Services } from './components/Services';
import { StrategyBand } from './components/StrategyBand';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

/**
 * Mapa de la landing según el brief §06.
 *
 * Fuera por falta de datos (acordado con la dueña del proyecto):
 * - "Prueba" (logos de clientes, resultados o mockup de la marca siendo citada).
 * - "Sobre mí" (bio de la consultora).
 * Cuando lleguen esos contenidos, van entre <Services /> y <Contact />.
 */
export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Method />
        <Services />
        <StrategyBand />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
