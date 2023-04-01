import React, { FC } from 'react';
import Employee from '../../../../models/Employee';
import styles from './Employee.module.scss';

interface EmployeeDataProps {
  employee: Employee;
}

const EmployeeData: FC<EmployeeDataProps> = ({employee}) => {
  const {id, firstName, lastName, title, country, city, birthDate, imageName} = employee;

  return (
  <li className={`Box ${styles.Employee}`}>
    <p>id: {id}</p>
    <p>firstName: {firstName}</p>
    <p>lastName: {lastName}</p>
    <p>title: {title}</p>
    <p>country: {country}</p>
    <p>city: {city}</p>
    <p>birthDate: {birthDate}</p>
    <p>image: {imageName}</p>
  </li>
)};

export default EmployeeData;
