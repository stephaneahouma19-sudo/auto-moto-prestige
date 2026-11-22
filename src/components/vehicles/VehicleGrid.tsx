import type { Vehicle } from '../../types/vehicle';
import { VehicleCard } from './VehicleCard';
export function VehicleGrid({ vehicles }: { vehicles: Vehicle[] }) {
  if (!vehicles.length) return <div className="empty-state"><span className="eyebrow">AUCUN RÉSULTAT</span><h3>Essayons autrement.</h3><p>Aucun véhicule ne correspond à ces critères. Modifiez vos filtres pour explorer la sélection.</p></div>;
  return <div className="vehicle-grid">{vehicles.map(vehicle => <VehicleCard key={vehicle.id} vehicle={vehicle} />)}</div>;
}
