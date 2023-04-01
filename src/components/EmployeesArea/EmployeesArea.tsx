import React, { FC, useEffect, useState } from 'react';
import Employee from '../../models/Employee'
import { getEmployees } from '../../utils/fetch';
import Employees from './Employees/Employees';
import styles from './EmployeesArea.module.scss';

interface EmployeesAreaProps {}

const EmployeesArea: FC<EmployeesAreaProps> = () =>{
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(()=>{
    getEmployees().then((employees)=>{
      setEmployees(employees)      
    }).catch((err)=>{
      console.log(err);
    }).finally()
  },[])

  if (employees.length === 0) {
    return <p>no employees</p>
  }

  return (
  <div className={styles.EmployeesArea}>
    <Employees employess={employees}></Employees>
  </div>
)};

export default EmployeesArea;
