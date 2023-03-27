import React, { FC, useState, useEffect } from 'react';
import styles from './RandomBrand.module.scss';

interface RandomBrandProps { }

const RandomBrand: FC<RandomBrandProps> = () => {

    const [curentBrand, setCurentBrand] = useState("");
    const [brands, setBrands] = useState(["adidas","nike","puma","vans", "brand5"]);

    useEffect(()=>{
        
    const brandIndex = setInterval(() => {
        const randomIndex = Math.floor(Math.floor(Math.random() * brands.length));
        setCurentBrand(brands[randomIndex]);
    }, 5000);

        return () => {
            clearInterval(brandIndex);
        }
    }, [])

    useEffect( () => {
        console.log('OMG LOOK AT THE N EW BRANDDDD');
    }, [curentBrand])
    

    return (
        <div className={`Box ${styles.RandomBrand}`}>
            <span>RandomBrand: {curentBrand}</span>
        </div>
    )
}


export default RandomBrand;
