import React, { FC } from 'react';
import styles from './Aside.module.scss';
import { NavLink } from 'react-router-dom';

interface AsideProps { }

const Aside: FC<AsideProps> = () => (
    <aside className={styles.Aside}>
        <nav>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/employees">Employees</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/story">Our Story</NavLink>
        </nav>
    </aside>
);

export default Aside;
