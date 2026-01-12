'use client';

import React from 'react';
import { BoardOfDirections } from './components';
import { boardOfDirectionsData } from './data';

export default function BoardOfDirectionsSection() {
  return <BoardOfDirections data={boardOfDirectionsData} />;
}
