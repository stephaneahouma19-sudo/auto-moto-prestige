export type VehicleCategory = 'voiture' | 'moto';
export type VehicleCondition = 'neuf' | 'occasion';
export type VehicleAvailability = 'disponible' | 'vendu';

export interface Vehicle {
  id: string;
  slug: string;
  category: VehicleCategory;
  brand: string;
  model: string;
  priceFcfa: number;
  year: number;
  mileageKm: number;
  condition: VehicleCondition;
  description: string;
  mainImage: string;
  gallery: string[];
  availability: VehicleAvailability;
}
