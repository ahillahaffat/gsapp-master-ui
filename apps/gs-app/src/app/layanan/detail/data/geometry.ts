import type { GeometrySubtype } from '../types';
import type {
  ProjectsSectionData,
  DisciplinesSectionData,
  SoftwareCollaborationsData,
} from '../types';

const baseProjectDescription =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend magna vitae pharetra finibus. Integer hendrerit vehicula magna, quis ultrices sapien efficitur vel. Curabitur ornare pellentesque dolor, ac sagittis enim. Vivamus eget leo vel nibh sollicitudin faucibus fringilla cursus nibh. Maecenas ut arcu congue, tempus quam in, tincidunt mauris. Ut ornare orci cursus tincidunt dignissim. Maecenas ullamcorper justo in porta mollis. Duis sit amet tincidunt sapien. Sed varius quam ligula, interdum scelerisque ipsum sodales id. Nam consectetur nisi ac finibus commodo. Nullam quis accumsan justo, sed iaculis tellus. Integer purus neque, porttitor ut nulla ac, semper malesuada tellus.';

const structureDisciplines: DisciplinesSectionData = {
  title: 'Our Structure Disciplines',
  leftColumn: [
    {
      title: 'Structural Analysis',
      items: [
        'Analisis Statik & Dinamik',
        'Perhitungan Beban & Kombinasi',
        'Detil Konstruksi Beton & Baja',
        'Quality Control Material',
      ],
    },
    {
      title: 'Design & Engineering',
      items: [
        'Rancang Bangun Gedung',
        'Struktur Jembatan',
        'Rehabilitasi Struktur',
      ],
    },
  ],
  rightColumn: [
    {
      title: 'Construction Management',
      items: [
        'Monitoring Pelaksanaan',
        'Pengawasan Mutu Konstruksi',
        'Laporan Progress Proyek',
      ],
    },
  ],
};

const highwayDisciplines: DisciplinesSectionData = {
  title: 'Our Highway Disciplines',
  leftColumn: [
    {
      title: 'Road Design',
      items: [
        'Geometrik Jalan',
        'Perkerasan Jalan',
        'Drainase Jalan',
        'Marka & Rambu',
      ],
    },
    {
      title: 'Traffic Engineering',
      items: [
        'Survei Lalu Lintas',
        'Analisis Kapasitas',
        'Simulasi Lalu Lintas',
      ],
    },
  ],
  rightColumn: [
    {
      title: 'Highway Construction',
      items: [
        'Pengawasan Lapangan',
        'Quality Control Perkerasan',
        'Handling Material',
      ],
    },
  ],
};

const drainageDisciplines: DisciplinesSectionData = {
  title: 'Our Drainage Disciplines',
  leftColumn: [
    {
      title: 'Drainage Design',
      items: [
        'Perencanaan Sistem Drainase',
        'Analisis Debit Banjir',
        'Dimensi Saluran',
      ],
    },
    {
      title: 'Water Management',
      items: [
        'Pengelolaan Air Hujan',
        'Retensi & Detensi',
        'Drainase Perkotaan',
      ],
    },
  ],
  rightColumn: [
    {
      title: 'Construction & Maintenance',
      items: [
        'Konstruksi Saluran',
        'Pemeliharaan Drainase',
        'Monitoring Debit',
      ],
    },
  ],
};

const sharedSoftware: SoftwareCollaborationsData = {
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

const projectsTemplate = (sectorTitle: string): ProjectsSectionData => ({
  title: `Beberapa Projek Kami\nDalam Sektor ${sectorTitle}`,
  projects: [
    { id: 1, title: 'YOUR DESCRIBE', description: baseProjectDescription, image: '/images/geo1.jpg' },
    { id: 2, title: 'YOUR DESCRIBE', description: baseProjectDescription, image: '/images/geo2.jpg' },
    { id: 3, title: 'YOUR DESCRIBE', description: baseProjectDescription, image: '/images/geo1.jpg' },
  ],
});

export const geometryContent: Record<
  GeometrySubtype,
  { projects: ProjectsSectionData; disciplines: DisciplinesSectionData; software: SoftwareCollaborationsData }
> = {
  structure: {
    projects: projectsTemplate('Structure'),
    disciplines: structureDisciplines,
    software: sharedSoftware,
  },
  highway: {
    projects: projectsTemplate('Highway'),
    disciplines: highwayDisciplines,
    software: sharedSoftware,
  },
  drainage: {
    projects: projectsTemplate('Drainage'),
    disciplines: drainageDisciplines,
    software: sharedSoftware,
  },
};
