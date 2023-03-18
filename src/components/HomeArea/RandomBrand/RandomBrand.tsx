import React, { FC } from 'react';
import styles from './RandomBrand.module.scss';

interface RandomBrandProps { }

const RandomBrand: FC<RandomBrandProps> = () => {

    const brands = ["adidas","nike","puma","vans", "brand5"];

    let brand = setInterval(() => {
        const randomIndex = Math.floor(Math.floor(Math.random() * brands.length));
        console.log(brands[randomIndex]);

    }, 1000);
    
    return (
        <div className={`Box ${styles.RandomBrand}`}>
            <span> RandomBrand</span> <br />
        </div>
    )
}


export default RandomBrand;
