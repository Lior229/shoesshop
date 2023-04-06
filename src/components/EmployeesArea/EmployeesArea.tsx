import React, { FC, useEffect, useState } from 'react';
import Employee from '../../models/Employee'
import { getEmployees } from '../../utils/fetchEmployees';
import Employees from './Employees/Employees';
import styles from './EmployeesArea.module.scss';

interface EmployeesAreaProps {}

const EmployeesArea: FC<EmployeesAreaProps> = () =>{
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=>{
    setIsLoading(true);

    getEmployees().then((employees)=>{
      setEmployees(employees)      
    }).catch((err)=>{
      console.log(err);
    }).finally(()=>{
      setIsLoading(false);
    })
  },[])

  if (isLoading) {
    return <p>Loading</p>
  }

  if (employees.length === 0) {
    return <p>no employees</p>
  }

  return (
  <div className={styles.EmployeesArea}>
    <Employees employess={employees}></Employees>
  </div>
)};

export default EmployeesArea;
