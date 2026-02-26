export type LayananDetailType = 'geomatika' | 'geometry';

export type GeometrySubtype = 'structure' | 'highway' | 'drainage';

export interface DetailParams {
  type: LayananDetailType;
  idx?: number;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface Discipline {
  title: string;
  items: string[];
}

export interface SoftwareCollaboration {
  id: number;
  name: string;
  logo: string;
}

export interface HeroDetailData {
  title: string;
  description: string;
  backgroundImage: string;
}

export interface ProjectsSectionData {
  title: string;
  projects: Project[];
}

export interface DisciplinesSectionData {
  title: string;
  leftColumn: Discipline[];
  rightColumn: Discipline[];
}

export interface SoftwareCollaborationsData {
  title: string;
  collaborations: SoftwareCollaboration[];
}

export interface DetailPageData {
  hero: HeroDetailData;
  projects: ProjectsSectionData;
  disciplines: DisciplinesSectionData;
  software: SoftwareCollaborationsData;
}
