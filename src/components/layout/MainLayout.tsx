import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';
import { WhatsAppButton } from '../contact/WhatsAppButton';

export function MainLayout() {
  return (
    <>
      <Header />
      <main id="contenu"><Outlet /></main>
      <Footer />
      <WhatsAppButton floating />
    </>
  );
}
