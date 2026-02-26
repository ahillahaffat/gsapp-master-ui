export interface Discipline {
  title: string;
  items: string[];
}

export interface DisciplinesSectionData {
  title: string;
  leftColumn: Discipline[];
  rightColumn: Discipline[];
}

export const disciplinesSectionData: DisciplinesSectionData = {
  title: 'Our Geospastial Disciplines',
  leftColumn: [
    {
      title: 'Digital Survey',
      items: [
        'GNSS - Data Acquisition',
        'Foto Udara / Fotogrammetry',
        '3D Mesh & Inspeksi Visual',
        'Progress Controll Monitoring',
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
      title: 'Terestrial Survey',
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
