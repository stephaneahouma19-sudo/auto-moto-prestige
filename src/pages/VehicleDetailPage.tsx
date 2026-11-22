import { ArrowLeft, ArrowUpRight, CalendarDays, Gauge, ShieldCheck } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { PageMeta } from '../components/seo/PageMeta';
import { VehicleGallery } from '../components/vehicles/VehicleGallery';
import { WhatsAppButton } from '../components/contact/WhatsAppButton';
import { vehicles } from '../data/vehicles';

export function VehicleDetailPage() {
  const { slug } = useParams();
  const vehicle = vehicles.find(item => item.slug === slug);
  if (!vehicle) return <><PageMeta title="Véhicule introuvable" /><section className="not-found"><span className="eyebrow">FICHE INTROUVABLE</span><h1>Ce véhicule a pris<br /><em>une autre route.</em></h1><p>Cette fiche n’existe pas ou n’est plus disponible.</p><Link className="button button-gold" to="/catalogue">Retour au catalogue <ArrowUpRight size={17} /></Link></section></>;
  const name = `${vehicle.brand} ${vehicle.model}`;
  return <><PageMeta title={name} description={vehicle.description} image={vehicle.mainImage} /><section className="detail-page"><Link to="/catalogue" className="back-link"><ArrowLeft size={16} /> Retour au catalogue</Link><div className="detail-heading"><div><span className="eyebrow">{vehicle.category === 'voiture' ? 'AUTOMOBILE' : 'MOTO'} · FICHE DE DÉMONSTRATION</span><h1>{vehicle.brand}<br /><em>{vehicle.model}</em></h1></div><div className="detail-price"><span>PRIX INDICATIF</span><strong>{new Intl.NumberFormat('fr-FR').format(vehicle.priceFcfa)} <small>FCFA</small></strong></div></div><VehicleGallery images={vehicle.gallery} alt={name} /><div className="detail-columns"><div className="detail-description"><div className="demo-notice"><span>ANNONCE FICTIVE</span> Cette fiche illustre le futur catalogue et ne correspond pas à un véhicule réellement proposé à la vente.</div><h2>L’essentiel, en <em>détail.</em></h2><p>{vehicle.description}</p><div className="detail-specs"><div><CalendarDays /><span>Année<b>{vehicle.year}</b></span></div><div><Gauge /><span>Kilométrage<b>{new Intl.NumberFormat('fr-FR').format(vehicle.mileageKm)} km</b></span></div><div><ShieldCheck /><span>État<b>{vehicle.condition === 'neuf' ? 'Neuf' : 'Occasion'}</b></span></div></div></div><aside className="detail-contact"><span className="eyebrow">UN PROJET EN TÊTE ?</span><h3>Échangeons<br /><em>à ce sujet.</em></h3><p>Contactez-nous pour nous parler de votre recherche.</p><WhatsAppButton vehicleName={name} /><p className="small-note">Les annonces et tarifs affichés sont fictifs et donnés à titre de démonstration.</p></aside></div></section></>;
}
