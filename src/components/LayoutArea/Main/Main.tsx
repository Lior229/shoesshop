import React, { FC } from 'react';
import styles from './Main.module.scss';
import Specials from '../../HomeArea/Specials/Specials';
import Brands from '../../HomeArea/Brands/Brands';

interface MainProps { }

const Main: FC<MainProps> = () => (
    <main className={styles.Main}>
        <Specials/>
        <Brands/>
    </main>
);

export default Main;
