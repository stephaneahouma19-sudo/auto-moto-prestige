import type { Vehicle, VehicleCategory } from '../types/vehicle';

export interface VehicleFilterOptions {
  query?: string;
  category?: VehicleCategory | 'toutes';
  brand?: string | 'toutes';
  minPrice?: number;
  maxPrice?: number;
}

export function filterVehicles(vehicles: Vehicle[], filters: VehicleFilterOptions): Vehicle[] {
  const query = filters.query?.trim().toLocaleLowerCase('fr') ?? '';
  return vehicles.filter((vehicle) => {
    const searchable = `${vehicle.brand} ${vehicle.model} ${vehicle.category}`.toLocaleLowerCase('fr');
    return (!query || searchable.includes(query))
      && (!filters.category || filters.category === 'toutes' || vehicle.category === filters.category)
      && (!filters.brand || filters.brand === 'toutes' || vehicle.brand === filters.brand)
      && (filters.minPrice === undefined || vehicle.priceFcfa >= filters.minPrice)
      && (filters.maxPrice === undefined || vehicle.priceFcfa <= filters.maxPrice);
  });
}
