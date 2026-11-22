import { ArrowUpRight, Gauge, CalendarDays } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Vehicle } from '../../types/vehicle';
import { WhatsAppButton } from '../contact/WhatsAppButton';

const formatPrice = (price: number) => `${new Intl.NumberFormat('fr-FR').format(price)} FCFA`;
export function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  const name = `${vehicle.brand} ${vehicle.model}`;
  return <article className="vehicle-card"><Link className="card-image" to={`/vehicules/${vehicle.slug}`}><img src={vehicle.mainImage} alt={name} loading="lazy" onError={e => { e.currentTarget.style.display = 'none'; }} /><span className="demo-tag">Visuel démo</span><span className="image-arrow"><ArrowUpRight size={18} /></span></Link><div className="card-content"><div className="card-kicker">{vehicle.category === 'voiture' ? 'AUTOMOBILE' : 'MOTO'} <span>·</span> {vehicle.condition === 'neuf' ? 'NEUF' : 'OCCASION'}</div><Link className="card-title" to={`/vehicules/${vehicle.slug}`}><h3>{name}</h3></Link><div className="card-specs"><span><CalendarDays size={15} /> {vehicle.year}</span><span><Gauge size={15} /> {new Intl.NumberFormat('fr-FR').format(vehicle.mileageKm)} km</span></div><div className="card-bottom"><strong>{formatPrice(vehicle.priceFcfa)}</strong><WhatsAppButton vehicleName={name} /></div><p className="demo-disclaimer">Annonce fictive · prix indicatif</p></div></article>;
}
