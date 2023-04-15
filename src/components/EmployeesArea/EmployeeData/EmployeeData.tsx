import React, { FC, useEffect, useState } from 'react';
import Employee from '../../../models/Employee';
import { NavLink, useParams, useNavigate } from 'react-router-dom';
import styles from './EmployeeData.module.scss';
import { BASE_API_URL } from '../../../config';
import Loader from '../../Loader/Loader';
import { getEmploye } from '../../../utils/fetchEmployees';

interface EmployeeDataProps {}

const EmployeeData: FC<EmployeeDataProps> = () => {
  const [employee, setEmployee] = useState<Employee>();
  const [isLoading, setIsLoading] = useState(true);
  const param = useParams();

  useEffect(() => {

    if(param.employeeId){

      getEmploye(+param.employeeId).then((employee)=>{
        setEmployee(employee);
      }).catch((err)=>{
        console.log(err);
        
      }).finally(()=>{
        setIsLoading((prevValue)=> !prevValue);
      })

    }else{

    }
    
  }, [])

  const handelDeleteEmployee = (id:number)=>void{

  }

  if (isLoading){
    return <Loader/>
  }
  

  const renderEmployee = () =>{
    if (employee){
      const {id, firstName, lastName, title, imageName, city, country, birthDate} = employee;
      const imgSrc = `${BASE_API_URL}employees/images/${imageName}`;
    
      return (
        <>
          <img className={styles.EmployeeData__img} src={imgSrc} alt={id.toString()} />
          <h5>{firstName} {lastName}</h5>
          <p>title: {title}</p>
          <p>addres: {city}, {country}</p>
          <p>birthDate: {birthDate}</p>
          <NavLink to={"/employees"}>Back</NavLink>
          <NavLink to={"#"}>Edit</NavLink>
          <NavLink to={"#"} onClick={handelDeleteEmployee(id)}>Delete</NavLink>
        </>
      )
    } 
  }
  
  return (
      <div className={styles.EmployeeData}>
                {renderEmployee()}
      </div>
  )
};


export default EmployeeData;
