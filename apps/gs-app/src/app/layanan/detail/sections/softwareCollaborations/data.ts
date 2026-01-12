export interface SoftwareCollaboration {
  id: number;
  name: string;
  logo: string;
}

export interface SoftwareCollaborationsData {
  title: string;
  collaborations: SoftwareCollaboration[];
}

export const softwareCollaborationsData: SoftwareCollaborationsData = {
  title: 'Software Collaborations',
  collaborations: [
    {
      id: 1,
      name: 'TEKNIK SURVEY & PEMETAAN',
      logo: '/images/logo.png',
    },
    {
      id: 2,
      name: 'UNIVERSITAS KADIRI',
      logo: '/images/logo.png',
    },
    {
      id: 3,
      name: 'HIMPUNAN MAHASISWA JURUSAN TEKNIK SIPIL',
      logo: '/images/logo.png',
    },
    {
      id: 4,
      name: 'STIKES NEGERI 3 JOMBANG',
      logo: '/images/logo.png',
    },
    {
      id: 5,
      name: 'TEKNIK GEOMATIKA',
      logo: '/images/logo.png',
    },
    {
      id: 6,
      name: 'Partner',
      logo: '/images/aset.png',
    },
  ],
};
