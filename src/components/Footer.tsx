import { useLanguage } from '../i18n/LanguageContext';
import { LogoMark } from './BrandIcons';
import './Footer.css';

/** Footer sobre Tinta (brief §03), con el logo horizontal (§02). */
export function Footer() {
  const { copy } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <p className="footer__wordmark">
            <LogoMark size={18} className="footer__logo-mark" />
            {copy.brand.name}
          </p>
          <p className="footer__descriptor">{copy.footer.descriptor}</p>
        </div>
        <p className="footer__rights">
          © {year} {copy.brand.name}. {copy.footer.rights}
        </p>
      </div>
    </footer>
  );
}
