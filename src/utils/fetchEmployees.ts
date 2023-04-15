import axios from "axios";
import Employee from "../models/Employee";
import { BASE_API_URL } from "../config";

export const getEmployees =async ():Promise<Employee[]> => {
    const request = await axios.get<Employee[]>(`${BASE_API_URL}employees`)
    const employees = request.data;

    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(employees)
        }, 1000);
    })
}

export const getEmploye =async (id:number):Promise<Employee> => {
    const request = await axios.get<Employee>(`${BASE_API_URL}employees/${id}`)
    const employe = request.data;

    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(employe)
        }, 800);
    })
}

export const AddEmploye = async (employee:Employee):Promise<Employee> => {
    const request = await axios.post<Employee>(`${BASE_API_URL}employees/`, employee)
    const __employee = request.data;

    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(__employee);
        }, 800);
    })
}

export const deleteEmploye =async (id:number):Promise<boolean> => {
    const request = await axios.delete<Employee>(`${BASE_API_URL}employees/${id}`)

    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(true);
        }, 800);
    })
}