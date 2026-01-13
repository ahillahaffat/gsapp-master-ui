export interface Solution {
  title: string;
  description: string;
  color: string;
  image: string;
}

export const solutions: Solution[] = [
  {
    title: 'Geometry',
    description:
      'Berperan sebagai dasar dalam membangun solusi konstruksi dengan teknologi terbaru, yang memfasilitasi pembuatan model bangunan yang lebih efisien dan presisi.',
    color: 'var(--color-primary)',
    image: '/images/geo1.jpg',
  },
  {
    title: 'Geometrika',
    description:
      'Berfokus pada pengolahan data spasial, memastikan bahwa semua langkah perencanaan dan eksekusi proyek dimulai dengan informasi yang akurat dan terperinci.',
    color: 'var(--color-primary-dark)',
    image: '/images/geo2.jpg',
  },
];
