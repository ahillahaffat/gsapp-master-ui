export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface ProjectsSectionData {
  title: string;
  projects: Project[];
}

export const projectsSectionData: ProjectsSectionData = {
  title: 'Beberapa Projek Kami\nDalam Sektor Geospastial',
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
