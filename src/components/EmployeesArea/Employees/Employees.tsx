import React, { FC } from 'react';
import Employee from '../../../models/Employee';
import { employeeSlice } from '../employeesSlice';
import EmployeeItem from './Employee/Employee';
import styles from './Employees.module.scss';

interface EmployeesProps {
  employess: Employee[];
}

const Employees: FC<EmployeesProps> = ({employess}) => {
  
  const renderEmployees = () =>{
    return employess.map((employee)=>{
      const {id} = employee;
      return <EmployeeItem key={id} employee={employee}/>
    })
  }

  return(
  <ul className={styles.Employees}>
    {renderEmployees()}
  </ul>
)};

export default Employees;
