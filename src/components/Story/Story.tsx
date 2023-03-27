import React, { FC } from 'react';
import styles from './Story.module.scss';

interface StoryProps {}

const Story: FC<StoryProps> = () => (
  <div className={styles.Story}>
    Story Component
  </div>
);

export default Story;
