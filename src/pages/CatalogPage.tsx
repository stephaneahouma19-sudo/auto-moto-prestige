import { useMemo, useState } from 'react';
import { PageMeta } from '../components/seo/PageMeta';
import { VehicleFilters, type FilterValues } from '../components/vehicles/VehicleFilters';
import { VehicleGrid } from '../components/vehicles/VehicleGrid';
import { vehicles } from '../data/vehicles';
import { filterVehicles } from '../utils/vehicleFilters';

export function CatalogPage() {
  const [filters, setFilters] = useState<FilterValues>({ query: '', category: 'toutes', brand: 'toutes', maxPrice: '' });
  const brands = useMemo(() => [...new Set(vehicles.map(v => v.brand))].sort(), []);
  const filtered = useMemo(() => filterVehicles(vehicles, { ...filters, maxPrice: filters.maxPrice ? Number(filters.maxPrice) : undefined }), [filters]);
  return <><PageMeta title="Le catalogue" description="Explorez les fiches de démonstration AUTO MOTO PRESTIGE." /><section className="catalog-hero"><span className="eyebrow">LA SÉLECTION AMP <i /></span><h1>Des lignes qui<br /><em>ne laissent pas indifférent.</em></h1><p>Automobiles et motos de caractère, réunies dans une sélection pensée pour le plaisir.</p><div className="catalog-count"><b>{filtered.length.toString().padStart(2, '0')}</b><span>FICHES DE DÉMONSTRATION</span></div></section><section className="catalog-section"><div className="catalog-intro"><div><span className="eyebrow">PRENEZ LE TEMPS DE CHOISIR</span><h2>Notre catalogue</h2></div><p>Affinez votre recherche selon vos envies.</p></div><VehicleFilters values={filters} brands={brands} onChange={setFilters} /><div className="results-line"><span>{filtered.length} résultat{filtered.length > 1 ? 's' : ''}</span><span>PRIX INDICATIFS · ANNONCES FICTIVES</span></div><VehicleGrid vehicles={filtered} /></section></>;
}
