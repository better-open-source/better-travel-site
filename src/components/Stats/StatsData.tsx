import React from 'react';
import { GiEarthAmerica } from 'react-icons/gi';
import { MdAirplanemodeActive, MdTimer } from 'react-icons/md';
import { FaMoneyCheck } from 'react-icons/fa';

interface StatsDataProps {
  icon: JSX.Element,
  title: string,
  desc: string,
  id: number
}

export const StatsData: Array<StatsDataProps> = [
  {
    icon: (
      <GiEarthAmerica
        style={{
          color: '#047bf1'
        }}
      />
    ),
    title: 'Over 100 Destinations',
    desc: 'Travel to over 100 unique places',
    id: 1
  },
  {
    icon: (
      <MdAirplanemodeActive
        style={{
          color: '#f3a82e'
        }}
      />
    ),
    title: '1 Million Trips Made',
    desc: 'Over 1 million trips completed last year',
    id: 2
  },
  {
    icon: (
      <MdTimer
        style={{
          color: '#f34f2e'
        }}
      />
    ),
    title: 'Fastest Support',
    desc: 'Access our support team 24/7',
    id: 3
  },
  {
    icon: (
      <FaMoneyCheck
        style={{
          color: '#3af576'
        }}
      />
    ),
    title: 'Best Deals',
    desc: 'We offer the best prices',
    id: 4
  },
];
