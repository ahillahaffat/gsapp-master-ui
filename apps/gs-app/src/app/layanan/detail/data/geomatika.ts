import type {
  ProjectsSectionData,
  DisciplinesSectionData,
  SoftwareCollaborationsData,
} from '../types';

export const geomatikaProjects: ProjectsSectionData = {
  title: 'Beberapa Projek Kami\nDalam Sektor Geospatial',
  projects: [
    {
      id: 1,
      title: 'YOUR DESCRIBE',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend magna vitae pharetra finibus. Integer hendrerit vehicula magna, quis ultrices sapien efficitur vel. Curabitur ornare pellentesque dolor, ac sagittis enim. Vivamus eget leo vel nibh sollicitudin faucibus fringilla cursus nibh. Maecenas ut arcu congue, tempus quam in, tincidunt mauris. Ut ornare orci cursus tincidunt dignissim. Maecenas ullamcorper justo in porta mollis. Duis sit amet tincidunt sapien. Sed varius quam ligula, interdum scelerisque ipsum sodales id. Nam consectetur nisi ac finibus commodo. Nullam quis accumsan justo, sed iaculis tellus. Integer purus neque, porttitor ut nulla ac, semper malesuada tellus.',
      image: '/images/geo1.jpg',
    },
    {
      id: 2,
      title: 'YOUR DESCRIBE',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend magna vitae pharetra finibus. Integer hendrerit vehicula magna, quis ultrices sapien efficitur vel. Curabitur ornare pellentesque dolor, ac sagittis enim. Vivamus eget leo vel nibh sollicitudin faucibus fringilla cursus nibh. Maecenas ut arcu congue, tempus quam in, tincidunt mauris. Ut ornare orci cursus tincidunt dignissim. Maecenas ullamcorper justo in porta mollis. Duis sit amet tincidunt sapien. Sed varius quam ligula, interdum scelerisque ipsum sodales id. Nam consectetur nisi ac finibus commodo. Nullam quis accumsan justo, sed iaculis tellus. Integer purus neque, porttitor ut nulla ac, semper malesuada tellus.',
      image: '/images/geo2.jpg',
    },
    {
      id: 3,
      title: 'YOUR DESCRIBE',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend magna vitae pharetra finibus. Integer hendrerit vehicula magna, quis ultrices sapien efficitur vel. Curabitur ornare pellentesque dolor, ac sagittis enim. Vivamus eget leo vel nibh sollicitudin faucibus fringilla cursus nibh. Maecenas ut arcu congue, tempus quam in, tincidunt mauris. Ut ornare orci cursus tincidunt dignissim. Maecenas ullamcorper justo in porta mollis. Duis sit amet tincidunt sapien. Sed varius quam ligula, interdum scelerisque ipsum sodales id. Nam consectetur nisi ac finibus commodo. Nullam quis accumsan justo, sed iaculis tellus. Integer purus neque, porttitor ut nulla ac, semper malesuada tellus.',
      image: '/images/geo1.jpg',
    },
  ],
};

export const geomatikaDisciplines: DisciplinesSectionData = {
  title: 'Our Geospatial Disciplines',
  leftColumn: [
    {
      title: 'Digital Survey',
      items: [
        'GNSS - Data Acquisition',
        'Foto Udara / Fotogrammetry',
        '3D Mesh & Inspeksi Visual',
        'Progress Control Monitoring',
        'Pengukuran Deformasi',
      ],
    },
    {
      title: 'Bathymetry Survey',
      items: [
        'Underwater 3D Modelling',
        'Pemetaan Dasar Air',
        'Pengukuran Sedimentasi',
        'Monitoring Kapasitas Tampung Air',
        'Simulasi Pergerakan Air ke Daratan',
      ],
    },
  ],
  rightColumn: [
    {
      title: 'Terrestrial Survey',
      items: [
        'Pengukuran Polygon',
        'Kerangka Dasar Horizontal (KDH)',
        'Kerangka Dasar Vertical (KDV)',
        'Survei Kadastral, Topografi & Situasi',
        'Stake-Out Point',
      ],
    },
    {
      title: 'Bathymetry Survey',
      items: [
        'Underwater 3D Modelling',
        'Pemetaan Dasar Air',
        'Pengukuran Sedimentasi',
        'Monitoring Kapasitas Tampung Air',
        'Simulasi Pergerakan Air ke Daratan',
      ],
    },
  ],
};

export const geomatikaSoftware: SoftwareCollaborationsData = {
  title: 'Software Collaborations',
  collaborations: [
    { id: 1, name: 'TEKNIK SURVEY & PEMETAAN', logo: '/images/logo.png' },
    { id: 2, name: 'UNIVERSITAS KADIRI', logo: '/images/logo.png' },
    { id: 3, name: 'HIMPUNAN MAHASISWA JURUSAN TEKNIK SIPIL', logo: '/images/logo.png' },
    { id: 4, name: 'STIKES NEGERI 3 JOMBANG', logo: '/images/logo.png' },
    { id: 5, name: 'TEKNIK GEOMATIKA', logo: '/images/logo.png' },
    { id: 6, name: 'Partner', logo: '/images/aset.png' },
  ],
};
