export interface Brand {
  name: string;
  color: string;
}

export const baseBrands: Brand[] = [
  { name: 'Uber', color: '#000000' },
  { name: 'Apple', color: '#000000' },
  { name: 'Meta', color: '#1877F3' },
  { name: 'Airbnb', color: '#FF5A5F' },
  { name: 'Google', color: '#4285F4' },
];

export const clientsList: Brand[] = [...baseBrands, baseBrands[0]];

export const partnersList: Brand[] = [...baseBrands];
