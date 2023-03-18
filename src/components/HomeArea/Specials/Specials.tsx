import React, { FC } from 'react';
import styles from './Specials.module.scss';

interface SpecialsProps {}

const Specials: FC<SpecialsProps> = () => {

  const FirstDayMonth = ()=>{
    let now = new Date();
    let firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
    
    if (now.setHours(0,0,0,0) === firstDay.setHours(0,0,0,0)) {
      return <span>First Day at Month 25% OFF</span>
    } else {
      return <span>no specials today</span>
    }
}

  return(
  <div className={`Box ${styles.Specials}`}>
    Specials: {FirstDayMonth()}
  </div>
)};

export default Specials;
