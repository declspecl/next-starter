import React from 'react';
import styles from './ChessTimeline.module.css';

const TimelineItem = ({ year, event, description }: {
  year: number;
  event: string;
  description: string;
}) => (
  <div className={styles.timelineItem}>
    <div className={styles.timelineYear}>{year}</div>
    <div className={styles.timelineContent}>
      <h3>{event}</h3>
      <p>{description}</p>
    </div>
  </div>
);

const ChessTimeline = () => {
  const timelineData = [
    {
      year: 2005,
      event: 'Learned the Basics',
      description: 'John was introduced to chess by his grandfather at the age of 7. He quickly learned the rules and basic strategies.'
    },
    {
      year: 2010,
      event: 'First Tournament',
      description: 'Participated in his first local chess tournament, gaining valuable experience and sparking his competitive spirit.'
    },
    {
      year: 2015,
      event: 'Regional Champion',
      description: 'Won the regional chess championship, marking a significant milestone in his chess career.'
    },
    {
      year: 2020,
      event: 'National Master Title',
      description: 'Achieved the National Master title, a testament to his dedication and skill in chess.'
    },
    {
      year: 2025,
      event: 'Current Endeavors',
      description: 'Continues to play chess competitively, coaches aspiring players, and contributes to the chess community.'
    },
  ];

  return (
    <div className={styles.timeline}>
      {timelineData.map((item, index) => (
        <TimelineItem key={index} year={item.year} event={item.event} description={item.description} />
      ))}
    </div>
  );
};

export default ChessTimeline;
