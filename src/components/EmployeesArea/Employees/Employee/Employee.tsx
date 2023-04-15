import React, { FC } from 'react';
import Employee from '../../../../models/Employee';
import { BASE_API_URL } from "../../../../config";
import styles from './Employee.module.scss';
import { NavLink } from 'react-router-dom';

interface EmployeeItemProps {
  employee: Employee;
}

const EmployeeItem: FC<EmployeeItemProps> = ({employee}) => {
  const {id, firstName, lastName, title, imageName} = employee;
  const imgSrc = `${BASE_API_URL}employees/images/${imageName}`;
  
  return (
  <li className={`Box ${styles.Employee}`}>
    <NavLink to={`/employees/${id}`} className={styles.Employee__imgContiner}>
        <img className={styles.Employee__img} src={imgSrc} alt={id.toString()} />
    </NavLink>
    <h5>{firstName} {lastName}</h5>
    <p>{title}</p>
  </li>
)};

export default EmployeeItem;
