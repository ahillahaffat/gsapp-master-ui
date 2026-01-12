export interface GeometryService {
  id: number;
  title: string;
  image: string;
}

export interface GeometryData {
  title: string;
  services: GeometryService[];
  buttonText: string;
}

export const geometryData: GeometryData = {
  title: 'GEOMETRY',
  services: [
    { id: 1, title: 'Highway', image: '/images/geo1.jpg' },
    { id: 2, title: 'Structure', image: '/images/geo2.jpg' },
    { id: 3, title: 'Drainage', image: '/images/geo1.jpg' },
  ],
  buttonText: 'See Details',
};
