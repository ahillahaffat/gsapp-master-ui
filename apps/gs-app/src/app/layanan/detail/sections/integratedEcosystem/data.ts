export interface IntegratedEcosystemData {
  title: string;
  steps: {
    label: string;
    color: string;
  }[];
  digitalTwinLabel: string;
  qualityControlLabel: string;
}

export const integratedEcosystemData: IntegratedEcosystemData = {
  title: 'Integrated Ecosystem',
  steps: [
    { label: 'Data Acquisition', color: '#10B981' },
    { label: 'Processing & Analysis', color: '#14B8A6' },
    { label: 'Report Data', color: '#3B82F6' },
    { label: 'Input Data in to Modelling', color: '#F97316' },
  ],
  digitalTwinLabel: 'Digital Twin Data',
  qualityControlLabel: 'Quality Control',
};
