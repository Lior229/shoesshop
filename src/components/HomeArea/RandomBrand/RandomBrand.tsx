import React, { FC, useState, useEffect } from 'react';
import styles from './RandomBrand.module.scss';

interface RandomBrandProps { }

const RandomBrand: FC<RandomBrandProps> = () => {

    const [randomBrand, setRandomBrand] = useState("");

    const brands = ["adidas","nike","puma","vans", "brand5"];
    const brandIndex = setInterval(() => {
        const randomIndex = Math.floor(Math.floor(Math.random() * brands.length));
        console.log(randomIndex);
        setRandomBrand(brands[randomIndex]);
        }, 2000);
        
    useEffect(()=>{
    clearInterval(brandIndex);
    },[])
    
    return (
        <div className={`Box ${styles.RandomBrand}`}>
            <span>RandomBrand: {randomBrand}</span>
        </div>
    )
}


export default RandomBrand;
