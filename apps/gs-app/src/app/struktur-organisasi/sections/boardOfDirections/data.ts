export interface TeamMember {
  id: number;
  name: string;
  title: string;
  description?: string;
}

export interface BoardOfDirectionsData {
  title: string;
  ceo: TeamMember;
  members: TeamMember[];
}

export const boardOfDirectionsData: BoardOfDirectionsData = {
  title: 'Board of Directions',
  ceo: {
    id: 1,
    name: 'John Doe',
    title: 'ceo of geometrika',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat',
  },
  members: [
    { id: 2, name: 'John Doe', title: 'CEO' },
    { id: 3, name: 'Annisyah', title: 'Copy Writer' },
    { id: 4, name: 'Tamara', title: 'Senior UX Researcher' },
    { id: 5, name: 'Annisyah', title: 'Copy Writer' },
    { id: 6, name: 'Annisyah', title: 'Copy Writer' },
  ],
};
