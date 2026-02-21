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
      className="bg-white box-border flex flex-col items-center justify-center w-full max-w-[280px] sm:max-w-[300px] md:max-w-[323px] h-auto min-h-[350px] sm:min-h-[380px] md:min-h-[425px] border border-gray-300 p-6 sm:p-8 md:p-[40px] gap-4 sm:gap-5 md:gap-[20px]"
    >
      <div className="relative w-full max-w-[200px] sm:max-w-[220px] md:max-w-[241px] h-[220px] sm:h-[250px] md:h-[277px] flex-shrink-0 rounded-[5px] overflow-hidden bg-gray-100">
        <Image
          src="/images/parker.jpg"
          alt={member.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-col items-start w-full max-w-[200px] sm:max-w-[220px] md:max-w-[241px] gap-1 sm:gap-[5px]">
        <h3
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(16px, 2vw, 18px)',
            lineHeight: 'clamp(20px, 2.5vw, 23px)',
            color: '#000000',
          }}
        >
          {member.name}
        </h3>
        <p
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 400,
            fontSize: 'clamp(12px, 1.5vw, 14px)',
            lineHeight: 'clamp(18px, 2vw, 20px)',
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
    <section className="relative w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24"
          style={{
            fontFamily: "'Nunito Sans', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(28px, 4vw, 40px)',
            lineHeight: 'clamp(36px, 5vw, 72px)',
            letterSpacing: '-0.06em',
            color: '#032972',
          }}
        >
          {data.title}
        </motion.h1>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-[127px] mb-16 sm:mb-20 md:mb-24">
          <div className="flex-shrink-0 w-full max-w-[280px] sm:max-w-[300px] md:max-w-[323px]">
             <MemberCard member={data.ceo} />
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center pt-6 sm:pt-8 md:pt-12 lg:pt-16 max-w-[569px] px-4 sm:px-0"
          >
            <h2
              className="mb-3 sm:mb-4"
              style={{
                fontFamily: "'Nunito Sans', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(24px, 3.5vw, 40px)',
                lineHeight: '1.1',
                color: '#032972',
              }}
            >
              {data.ceo.name} <br />
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[30px] font-normal">
                {data.ceo.title}
              </span>
            </h2>

            {data.ceo.description && (
              <p
                style={{
                  fontFamily: "'Nunito Sans', sans-serif",
                  fontWeight: 400,
                  fontSize: 'clamp(12px, 1.5vw, 14px)',
                  lineHeight: 'clamp(18px, 2.5vw, 23px)',
                  color: '#032972',
                  textAlign: 'justify'
                }}
              >
                {data.ceo.description}
              </p>
            )}
          </motion.div>
        </div>

        <div className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-[115px]">
          {data.members.map((member, index) => (
            <MemberCard key={member.id} member={member} index={index + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
