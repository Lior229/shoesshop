import React, { FC } from 'react';
import Brand from '../Brand/Brand';
import styles from './Brands.module.scss';

interface BrandsProps {}

const Brands: FC<BrandsProps> = () => { 

  const brands = [
    {id:1, name:"adidas"},
    {id:2, name:"nike"},
    {id:3, name:"vans"},
    {id:4, name:"puma"},
    {id:5, name:"dc.martin"}
  ];

  const brandsJSX = brands.map((brand)=>{
    const {id, name} = brand;
    return(
      <Brand name={name} key={id}></Brand>
    )
  })

  return(
  <div className={`Box ${styles.Brands}`}>
    {brandsJSX}
  </div>
)};

export default Brands;
