import React, { FC, useState } from 'react';
import { useForm } from "react-hook-form";
import Employee from '../../../models/Employee';
import Loader from '../../Loader/Loader';
 import  { useNavigate  } from 'react-router-dom'
import styles from './EditEmployee.module.scss';

interface EditEmployeeProps {}

const EditEmployee: FC<EditEmployeeProps> = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Employee>();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const [employee, setEmployee] = useState<Employee>();

  const onSubmit = (employee:Employee)=>{
    setIsLoading((prevValue)=> !prevValue);
    console.log("handleSubmit");
    navigate('/employees')
};

  if (isLoading) {
    return <Loader/>
  }

  return(
  <div className={`Box ${styles.EditEmployee}`}>
    <div className={styles.EditEmployee__formTitle}>
      <h1>Edit New Employee</h1>
    </div>
    <form onSubmit={handleSubmit(onSubmit)} >
      <div>
        <label>First Name: </label>
        <input type="text" {...register("firstName",  {required: true, minLength:2})}/>
        {errors.firstName && <span className={styles.EditEmployee__error}>Please check the First Name</span>}
      </div>

    <div>
        <label>Last Name</label>
        <input type="text"{...register("lastName",  { required: true, minLength: 2 })}/>
        {errors.lastName && <p className={styles.EditEmployee__error}>Please check the Last Name</p>}
    </div>

    <div>
      <label>Title</label>
      <input type="text"{...register("title",  { required: true, minLength: 5, maxLength: 20})}/>
      {errors.title && <p className={styles.EditEmployee__error}>Please check the title</p>}
    </div>

    <div>
      <label>Country</label>
      <input type="text"{...register("country",  { required: true, minLength: 3, maxLength: 30 })}/>
      {errors.country && <p className={styles.EditEmployee__error}>Please check the country</p>}
    </div>

    <div>
      <label>City</label>
      <input type="text"{...register("city",  { required: true, minLength: 2, maxLength: 30  })}/>
      {errors.city && <p className={styles.EditEmployee__error}>Please check the city</p>}
    </div>

    <div>
      <label>BirthDate</label>
      <input type="date"{...register("birthDate",  { required: true })}/>
      {errors.birthDate && <p className={styles.EditEmployee__error}>Please enter birthDate</p>}
    </div>

    {/* <div>
      <label>image</label>
      <input type="file"{...register("image")}/>
    </div> */}

    <button type="submit" >Edit</button>

    </form>

  </div>
)};

export default EditEmployee;
