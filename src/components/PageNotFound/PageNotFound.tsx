import React, { FC } from 'react';
import styles from './PageNotFound.module.scss';

interface PageNotFoundProps {}

const PageNotFound: FC<PageNotFoundProps> = () => (
  <div className={styles.PageNotFound}>
    PageNotFound Component
  </div>
);

export default PageNotFound;
