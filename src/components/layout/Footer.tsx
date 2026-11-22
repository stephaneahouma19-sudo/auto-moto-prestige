import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return <footer className="site-footer"><div className="footer-main"><div className="footer-brand"><Link className="brand" to="/"><span className="brand-mark">A<span>·</span>P</span><span className="brand-name">AUTO MOTO <b>PRESTIGE</b></span></Link><p>Une autre idée de l’automobile.<br />Le goût des belles mécaniques.</p></div><div className="footer-links"><span className="eyebrow">EXPLORER</span><Link to="/catalogue">Le catalogue</Link><Link to="/a-propos">Notre maison</Link><Link to="/contact">Nous contacter</Link></div><div className="footer-contact"><span className="eyebrow">À VOTRE ÉCOUTE</span><p>Notre équipe est disponible<br />pour vous accompagner.</p><Link to="/contact" className="footer-cta">Écrivez-nous <ArrowUpRight size={16} /></Link></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} AUTO MOTO PRESTIGE</span><span>Les annonces présentées sur ce site sont des visuels de démonstration.</span><a href="#top">Retour en haut ↑</a></div></footer>;
}
