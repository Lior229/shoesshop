import React, { FC } from 'react';
import styles from './Brand.module.scss';

interface BrandProps {
  name: string;
}

const Brand: FC<BrandProps> = ({name}) => { 
  return(
  <div className={styles.Brand}>
    <span>name: {name} </span>
  </div>
)};

export default Brand;
