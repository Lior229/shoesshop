import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Employee from '../../models/Employee';

interface EmployeeStat {
    employees: Employee[],
    employee?: Employee
}

const initialState: EmployeeStat = {
    employees: []
}

export const employeeSlice = createSlice({
    name: 'employess',
    initialState: initialState,
    reducers: {
        setEmployees: (state, action: PayloadAction<Employee[]>) => {
            state.employees = action.payload;
        },
        setEmployee: (state, action: PayloadAction<Employee>) => {
            state.employee = action.payload;
        }
    }
})

export const {setEmployees} = employeeSlice.actions;
export default employeeSlice.reducer;