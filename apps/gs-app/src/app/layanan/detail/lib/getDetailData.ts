import { client, urlFor } from '@/lib/sanity.client';
import {
  layananGeomatikaDetailQuery,
  layananGeometryDetailQuery,
  type GeomatikaDetailSource,
  type GeometryDetailSource,
  type GeometryFeatureSource,
} from '@/lib/sanity.queries';
import type {
  DetailPageData,
  DetailParams,
  DisciplinesSectionData,
  GeometrySubtype,
  ProjectsSectionData,
  SoftwareCollaborationsData,
} from '../types';
import { geomatikaProjects, geomatikaDisciplines, geomatikaSoftware } from '../data/geomatika';
import { geometryContent } from '../data/geometry';

const GEOMETRY_IDX_TO_SUBTYPE: GeometrySubtype[] = ['highway', 'structure', 'drainage'];

function getGeometrySubtype(idx: number): GeometrySubtype | null {
  if (idx >= 0 && idx < GEOMETRY_IDX_TO_SUBTYPE.length) {
    return GEOMETRY_IDX_TO_SUBTYPE[idx];
  }
  return null;
}

function mapCmsProjects(
  source: GeomatikaDetailSource['detailProjects'] | GeometryFeatureSource['detailProjects'],
  fallback: ProjectsSectionData
): ProjectsSectionData {
  const projects = source?.projects;
  if (!projects || projects.length === 0) return fallback;
  return {
    title: source?.title || fallback.title,
    projects: projects.map((p, i) => ({
      id: i + 1,
      title: p.title || '',
      description: p.description || '',
      image: p.image ? urlFor(p.image).url() : '/images/geo1.jpg',
    })),
  };
}

function mapCmsDisciplines(
  source:
    | GeomatikaDetailSource['detailDisciplines']
    | GeometryFeatureSource['detailDisciplines'],
  fallback: DisciplinesSectionData
): DisciplinesSectionData {
  const left = source?.leftColumn;
  const right = source?.rightColumn;
  if ((!left || left.length === 0) && (!right || right.length === 0)) return fallback;
  return {
    title: source?.title || fallback.title,
    leftColumn: (left ?? []).map((d) => ({
      title: d.title || '',
      items: d.items ?? [],
    })),
    rightColumn: (right ?? []).map((d) => ({
      title: d.title || '',
      items: d.items ?? [],
    })),
  };
}

function mapCmsCollaborations(
  source:
    | GeomatikaDetailSource['detailCollaborations']
    | GeometryFeatureSource['detailCollaborations'],
  fallback: SoftwareCollaborationsData
): SoftwareCollaborationsData {
  const collabs = source?.collaborations;
  if (!collabs || collabs.length === 0) return fallback;
  return {
    title: source?.title || fallback.title,
    collaborations: collabs.map((c, i) => ({
      id: i + 1,
      name: c.name || '',
      logo: c.logo ? urlFor(c.logo).url() : '/images/logo.png',
    })),
  };
}

export async function getDetailData(params: DetailParams): Promise<DetailPageData | null> {
  const { type, idx } = params;

  if (type !== 'geomatika' && type !== 'geometry') {
    return null;
  }

  if (type === 'geometry') {
    const parsedIdx = typeof idx === 'string' ? parseInt(idx, 10) : idx;
    if (typeof parsedIdx !== 'number' || isNaN(parsedIdx) || parsedIdx < 0) {
      return null;
    }
    const subtype = getGeometrySubtype(parsedIdx);
    if (!subtype) {
      return null;
    }
  }

  const [geomatikaData, geometryData] = await Promise.all([
    client.fetch<GeomatikaDetailSource | null>(layananGeomatikaDetailQuery),
    client.fetch<GeometryDetailSource | null>(layananGeometryDetailQuery),
  ]);

  if (type === 'geomatika') {
    const description =
      geomatikaData?.description ||
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.';
    const backgroundImage = geomatikaData?.image
      ? urlFor(geomatikaData.image).url()
      : '/images/hero.jpg';

    return {
      hero: {
        title: geomatikaData?.title || 'Geospatial',
        description,
        backgroundImage,
      },
      projects: mapCmsProjects(geomatikaData?.detailProjects, geomatikaProjects),
      disciplines: mapCmsDisciplines(geomatikaData?.detailDisciplines, geomatikaDisciplines),
      software: mapCmsCollaborations(
        geomatikaData?.detailCollaborations,
        geomatikaSoftware
      ),
    };
  }

  const parsedIdx = typeof idx === 'string' ? parseInt(idx, 10) : (idx ?? 0);
  const subtype = getGeometrySubtype(parsedIdx)!;
  const staticContent = geometryContent[subtype];

  const features = geometryData?.features ?? [];
  const feature = features[parsedIdx];
  const title = feature?.title || (subtype.charAt(0).toUpperCase() + subtype.slice(1));
  const description =
    feature?.description ||
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.';
  const backgroundImage = feature?.image
    ? urlFor(feature.image).url()
    : '/images/hero.jpg';

  return {
    hero: {
      title,
      description,
      backgroundImage,
    },
    projects: mapCmsProjects(feature?.detailProjects, staticContent.projects),
    disciplines: mapCmsDisciplines(feature?.detailDisciplines, staticContent.disciplines),
    software: mapCmsCollaborations(
      feature?.detailCollaborations,
      staticContent.software
    ),
  };
}
