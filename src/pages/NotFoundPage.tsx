import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageMeta } from '../components/seo/PageMeta';
export function NotFoundPage() { return <><PageMeta title="Page introuvable" description="Cette page n’a pas été trouvée." /><section className="not-found"><span className="eyebrow">ERREUR 404</span><h1>Cette route<br /><em>n’existe pas.</em></h1><p>La page recherchée est peut-être ailleurs. Reprenons la route ensemble.</p><div className="hero-actions"><Link className="button button-gold" to="/">Retour à l’accueil <ArrowUpRight size={17} /></Link><Link className="button button-light" to="/catalogue"><ArrowLeft size={16} /> Explorer le catalogue</Link></div></section></>; }
