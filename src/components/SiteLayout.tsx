import type { ReactNode } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import { MobileTabBar } from './MobileTabBar';
import { WhatsAppFab } from './WhatsAppFab';

interface SiteLayoutProps {
  children: ReactNode;
  showWhatsAppFab?: boolean;
}

export function SiteLayout({ children, showWhatsAppFab = true }: SiteLayoutProps) {
  return (
    <>
      <Header />
      <main id="main">{children}</main>
      <Footer />
      <MobileTabBar />
      {showWhatsAppFab && <WhatsAppFab />}
    </>
  );
}
