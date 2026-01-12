export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const defaultProjects: Project[] = [
  {
    id: 1,
    title: 'Geomatika',
    description:
      'Berfokus pada pengolahan data spasial, memastikan bahwa semua langkah perencanaan dan eksekusi proyek dimulai dengan informasi yang akurat dan terperinci.',
    image: '/images/geo2.jpg',
  },
  {
    id: 2,
    title: 'Geomatika',
    description:
      'Berfokus pada pengolahan data spasial, memastikan bahwa semua langkah perencanaan dan eksekusi proyek dimulai dengan informasi yang akurat dan terperinci.',
    image: '/images/geo1.jpg',
  },
  {
    id: 3,
    title: 'Geomatika',
    description:
      'Berfokus pada pengolahan data spasial, memastikan bahwa semua langkah perencanaan dan eksekusi proyek dimulai dengan informasi yang akurat dan terperinci.',
    image: '/images/geo2.jpg',
  },
];
