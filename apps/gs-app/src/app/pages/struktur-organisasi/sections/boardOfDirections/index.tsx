'use client';

import React, { useEffect, useState } from 'react';
import { BoardOfDirections } from './components';
import { boardOfDirectionsData, BoardOfDirectionsData } from './data';
import { allTeamMembersQuery, TeamMemberSource } from '@/lib/sanity.queries';
import { client } from '@/lib/sanity.client';

export default function BoardOfDirectionsSection() {
  const [data, setData] = useState<BoardOfDirectionsData>(boardOfDirectionsData);

  useEffect(() => {
    async function fetchData() {
      try {
        const result: TeamMemberSource[] = await client.fetch(allTeamMembersQuery);

        if (result && result.length > 0) {

          const ceoMember = result[0];
          const otherMembers = result.slice(1);

          const newData: BoardOfDirectionsData = {
            title: boardOfDirectionsData.title,
            ceo: {
              id: 1,
              name: ceoMember.name,
              title: ceoMember.position,
              description: ceoMember.bio || boardOfDirectionsData.ceo.description,
            },
            members: otherMembers.map((m, index) => ({
              id: index + 2,
              name: m.name,
              title: m.position,
              description: m.bio
            })),
          };

          setData(newData);
        }
      } catch (error) {
        console.error('Error fetching Team data:', error);
      }
    }
    fetchData();
  }, []);

  return <BoardOfDirections data={data} />;
}
