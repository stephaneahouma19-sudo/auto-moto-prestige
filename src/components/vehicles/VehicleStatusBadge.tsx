import type { VehicleAvailability } from '../../types/vehicle';

export function VehicleStatusBadge({ status }: { status: VehicleAvailability }) {
  return <span className={`status-badge status-badge--${status}`}>{status === 'vendu' ? 'Vendu' : 'Disponible'}</span>;
}
