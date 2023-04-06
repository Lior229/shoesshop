import {configureStore} from '@reduxjs/toolkit';
import employeesReducre from '../components/EmployeesArea/employeesSlice';

const store = configureStore({
    reducer: {
        employeesState: employeesReducre
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export default store;