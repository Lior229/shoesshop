import React, { FC, useEffect, useState } from 'react';
import Employee from '../../../models/Employee';
import { NavLink, useParams, useNavigate } from 'react-router-dom';
import styles from './EmployeeData.module.scss';
import { BASE_API_URL } from '../../../config';
import Loader from '../../Loader/Loader';
import { deleteEmploye, getEmploye } from '../../../utils/fetchEmployees';
import EmployeeForm from '../../EmployeeForm/EmployeeForm';

interface EmployeeDataProps {}

const EmployeeData: FC<EmployeeDataProps> = () => {
  const [employee, setEmployee] = useState<Employee>();
  const [isLoading, setIsLoading] = useState(true);
  const param = useParams();
  const navigate = useNavigate();

  
  const handelDeleteEmployee = async () =>  {
    setIsLoading(true);
    if(param.employeeId){
      try {
        const result = await deleteEmploye(+param.employeeId);
        setIsLoading(false);
        navigate('/employees')
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    }

  }

  useEffect(() => {

    if(param.employeeId){

      getEmploye(+param.employeeId).then((employee)=>{
        setEmployee(employee);
      }).catch((err)=>{
        console.log(err);
        
      }).finally(()=>{
        setIsLoading((prevValue)=> !prevValue);
      })

    }
    
  }, []);

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
          <NavLink to={"/employees"}> Back | </NavLink>
          <NavLink to={"/employees/editEmployee"}>Edit | </NavLink>
          <NavLink to={"#"} onClick={handelDeleteEmployee}>Delete</NavLink>
          <EmployeeForm submitEmployeeHandler={function (employee: Employee): void {
            throw new Error('Function not implemented.');
          } } FormTitle={'my '} />
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
