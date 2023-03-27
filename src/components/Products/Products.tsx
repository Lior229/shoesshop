import React, { FC } from 'react';
import styles from './Products.module.scss';

interface ProductsProps {}

const Products: FC<ProductsProps> = () => (
  <div className={styles.Products}>
    Products Component
  </div>
);

export default Products;
