import { client, urlFor } from '../../lib/sanity.client';
import { allTeamMembersQuery, TeamMemberSource } from '../../lib/sanity.queries';
import BoardDirections from '../components/struktur-organisasi/board-directions';

export const revalidate = 60;

export default async function StrukturOrganisasiPage() {
  const teamMembers = await client.fetch<TeamMemberSource[]>(allTeamMembersQuery);

  // Map CMS data to the format expected by BoardDirections
  const members = teamMembers?.map((m, index) => ({
    id: index + 1,
    name: m.name,
    role: m.position,
    image: m.photo ? urlFor(m.photo).width(400).height(534).url() : '/images/parker.jpg',
  })) || [];

  return (
    <>
      <BoardDirections members={members.length > 0 ? members : undefined} />
    </>
  );
}