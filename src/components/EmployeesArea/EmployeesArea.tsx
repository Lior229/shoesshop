import React, { FC, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Employee from '../../models/Employee'
import { getEmployees } from '../../utils/fetchEmployees';
import Loader from '../Loader/Loader';
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
    return <Loader/>
  }

  if (employees.length === 0) {
    return <p>no employees</p>
  }

  return (
  <div className={styles.EmployeesArea}>
    <NavLink to={"/employees/addEmployee"} className={`Box ${styles.EmployeesArea__add}`}>Add Employee</NavLink>
    <Employees employess={employees}></Employees>
  </div>
)};

export default EmployeesArea;
