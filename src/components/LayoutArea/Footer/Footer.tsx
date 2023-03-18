import React, { FC } from 'react';
import styles from './Footer.module.scss';

interface FooterProps { }

const Footer: FC<FooterProps> = () => { 
    
    let year =  new Date().getFullYear();

    return(
    <footer className={styles.Footer}>
        <p onClick={() => {alert("lior")}}> All rights Reserved &copy; {year}</p>
    </footer>
    );
}

export default Footer;
