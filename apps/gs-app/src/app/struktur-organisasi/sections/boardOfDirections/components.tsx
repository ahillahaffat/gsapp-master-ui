'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { BoardOfDirectionsData, TeamMember } from './data';

interface MemberCardProps {
  member: TeamMember;
  index?: number;
}

function MemberCard({ member, index = 0 }: MemberCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white box-border flex flex-col items-center justify-center"
      style={{
        width: '100%',
        maxWidth: '323px',
        height: '425px',
        border: '1px solid #D1D5DB',
        padding: '40px 35px',
        gap: '20px',
      }}
    >
      <div className="relative w-[241px] h-[277px] flex-shrink-0 rounded-[5px] overflow-hidden bg-gray-100">
        <Image
          src="/images/parker.jpg"
          alt={member.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-col items-start w-[241px] gap-[5px]">
        <h3
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: '18px',
            lineHeight: '23px',
            color: '#000000',
          }}
        >
          {member.name}
        </h3>
        <p
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '20px',
            color: '#6B7280',
          }}
        >
          {member.title}
        </p>
      </div>
    </motion.div>
  );
}

interface BoardOfDirectionsProps {
  data: BoardOfDirectionsData;
}

export function BoardOfDirections({ data }: BoardOfDirectionsProps) {
  return (
    <section className="relative w-full bg-white py-24 px-4 md:px-16 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
          style={{
            fontFamily: "'Nunito Sans', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(32px, 5vw, 40px)',
            lineHeight: '72px',
            letterSpacing: '-0.06em',
            color: '#032972',
          }}
        >
          {data.title}
        </motion.h1>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-[127px] mb-24">
          <div className="flex-shrink-0">
             <MemberCard member={data.ceo} />
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center pt-8 md:pt-16 max-w-[569px]"
          >
            <h2
              className="mb-4"
              style={{
                fontFamily: "'Nunito Sans', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(32px, 4vw, 40px)',
                lineHeight: '1.1',
                color: '#032972',
              }}
            >
              {data.ceo.name} <br />
              <span className="text-[24px] md:text-[30px] font-normal">
                {data.ceo.title}
              </span>
            </h2>

            {data.ceo.description && (
              <p
                style={{
                  fontFamily: "'Nunito Sans', sans-serif",
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '23px',
                  color: '#032972',
                  textAlign: 'justify'
                }}
              >
                {data.ceo.description}
              </p>
            )}
          </motion.div>
        </div>

        <div className="flex flex-wrap justify-center lg:justify-start gap-8 md:gap-[115px]">
          {data.members.map((member, index) => (
            <MemberCard key={member.id} member={member} index={index + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
