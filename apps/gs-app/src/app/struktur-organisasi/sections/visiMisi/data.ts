export interface VisiMisiData {
  visi: {
    title: string;
    statements: string[];
  };
  misi: {
    title: string;
    items: {
      keyword: string;
      description: string;
    }[];
  };
}

export const visiMisiData: VisiMisiData = {
  visi: {
    title: 'VISI',
    statements: [
      'Menjadi pionir solusi digital konstruksi berbasis BIM di Indonesia yang terintegrasi, presisi, dan adaptif terhadap teknologi masa depan',
      'Kami mempunyai tujuan untuk memberikan solusi yang menggabungkan teknologi digital canggih dengan praktek konstruksi yang berkelanjutan',
    ],
  },
  misi: {
    title: 'MISI',
    items: [
      {
        keyword: 'Solusi',
        description:
          'Memberikan solusi desain dan konsultasi berbasis BIM secara efisien dan efektif.',
      },
      {
        keyword: 'Ekosistem',
        description:
          'Membangun ekosistem baru digital construction menghubungkan seluruh stakehoulder melalui teknologi BIM.',
      },
      {
        keyword: 'Kemitraan',
        description:
          'Terpercaya Menjadi mitra independen sesuai dengan kebutuhan klien di lapangan.',
      },
      {
        keyword: 'Akurasi Data',
        description:
          'Menyediakan layanan survey & mapping menggunakan teknologi digital terkini untuk akurasi data yang lebih tinggi.',
      },
      {
        keyword: 'Sumber Daya Manusia',
        description:
          'Menyediakan pelatihan sebagai komitmen mengembangkan kompetensi SDM di bidang konstruksi dan teknologi.',
      },
      {
        keyword: 'Literasi',
        description:
          'Mendukung upaya literasi untuk generasi penerus, khususnya dalam budaya membaca dan pemanfaatan pengetahuan.',
      },
    ],
  },
};
