import { PRIVACY_POLICY_URL } from './config';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Method } from './components/Method';
import { Services } from './components/Services';
import { StrategyBand } from './components/StrategyBand';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { PrivacyPolicy } from './pages/PrivacyPolicy';

/**
 * Ruteo mínimo: el sitio son dos vistas y no justifica una dependencia de
 * router. Los enlaces son <a> normales, así que cada navegación recarga la
 * página y basta con leer el pathname al montar — no hay estado que sincronizar.
 *
 * Ojo al desplegar: en producción el host tiene que reescribir las rutas
 * desconocidas a index.html. `vite dev` y `vite preview` ya lo hacen solos.
 */
function normalizePath(pathname: string): string {
  return pathname.replace(/\/+$/, '') || '/';
}

export default function App() {
  if (normalizePath(window.location.pathname) === normalizePath(PRIVACY_POLICY_URL)) {
    return <PrivacyPolicy />;
  }

  return <Landing />;
}

/**
 * Mapa de la landing según el brief §06.
 *
 * Fuera por falta de datos (acordado con la dueña del proyecto):
 * - "Prueba" (logos de clientes, resultados o mockup de la marca siendo citada).
 * - "Sobre mí" (bio de la consultora).
 * Cuando lleguen esos contenidos, van entre <Services /> y <Contact />.
 */
function Landing() {
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
