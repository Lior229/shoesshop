import React, { FC } from 'react';
import styles from './Main.module.scss';
import Specials from '../../HomeArea/Specials/Specials';
import Brands from '../../HomeArea/Brands/Brands';
import ShoesCard from '../../HomeArea/ShoesCard/ShoesCard';
import RandomBrand from '../../HomeArea/RandomBrand/RandomBrand';

interface MainProps { }

const Main: FC<MainProps> = () => (
    <main className={styles.Main}>
        <Specials/>
        <Brands/>
        <ShoesCard size={10} brand={"nike"} price={200} image={"img1"}></ShoesCard>
        <ShoesCard size={7} brand={"nike"} price={50} image={"img2"}></ShoesCard>
        <ShoesCard size={9} brand={"nike"} price={100} image={"img3"}></ShoesCard>
        <ShoesCard size={12} brand={"nike"} price={150} image={"img4"}></ShoesCard>
        <RandomBrand></RandomBrand>
    </main>
);

export default Main;
