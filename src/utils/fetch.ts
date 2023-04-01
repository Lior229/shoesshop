import axios from "axios";
import Employee from "../models/Employee";
import { BASE_API_URL } from "../config";

export const getEmployees =async ():Promise<Employee[]> => {
    const request = await axios.get<Employee[]>(`${BASE_API_URL}employees`)
    const employees = request.data;

    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(employees)
        }, 2000);
    })
}