import React, { FC, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import Employee from '../../models/Employee';
import Loader from '../Loader/Loader';
 import  { useNavigate, useParams  } from 'react-router-dom'
import styles from './EmployeeForm.module.scss';

interface EmployeeFormProps {
  employee?: Employee;
  submitEmployeeHandler: (employee:Employee)=> void;
  FormTitle: string;
}

const EmployeeForm: FC<EmployeeFormProps> = ({employee, submitEmployeeHandler, FormTitle}) => {
  const { register, handleSubmit, formState: { errors } } = useForm<Employee>();
  const [isLoading, setIsLoading] = useState(true);
  // const [employee, setEmployee] = useState<Employee>();
  const navigate = useNavigate();
  // const param = useParams();

  useEffect(() => {

    console.log(employee);
    
  }, []);


  if (isLoading) {
    return <Loader/>
  }

  return(
  <div className={`Box ${styles.EmployeeForm}`}>
    <div className={styles.EmployeeForm__formTitle}>
      <h1>{FormTitle}</h1>
    </div>
    <form onSubmit={handleSubmit(submitEmployeeHandler)}>
      <div>
        <label>First Name: </label>
        <input type="text" value={employee?.firstName} {...register("firstName",  {required: true, minLength:2})}/>
        {errors.firstName && <span className={styles.AddEmployee__error}>Please check the First Name</span>}
      </div>

    <div>
        <label>Last Name</label>
        <input type="text"{...register("lastName",  { required: true, minLength: 2 })}/>
        {errors.lastName && <p className={styles.AddEmployee__error}>Please check the Last Name</p>}
    </div>

    <div>
      <label>Title</label>
      <input type="text"{...register("title",  { required: true, minLength: 5, maxLength: 20})}/>
      {errors.title && <p className={styles.AddEmployee__error}>Please check the title</p>}
    </div>

    <div>
      <label>Country</label>
      <input type="text"{...register("country",  { required: true, minLength: 3, maxLength: 30 })}/>
      {errors.country && <p className={styles.AddEmployee__error}>Please check the country</p>}
    </div>

    <div>
      <label>City</label>
      <input type="text"{...register("city",  { required: true, minLength: 2, maxLength: 30  })}/>
      {errors.city && <p className={styles.AddEmployee__error}>Please check the city</p>}
    </div>

    <div>
      <label>BirthDate</label>
      <input type="date"{...register("birthDate",  { required: true })}/>
      {errors.birthDate && <p className={styles.AddEmployee__error}>Please enter birthDate</p>}
    </div>

    {/* <div>
      <label>image</label>
      <input type="file"{...register("image")}/>
    </div> */}

    <button type="submit" >add</button>

    </form>

  </div>
)};

export default EmployeeForm;
