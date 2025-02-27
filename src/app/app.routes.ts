import { Routes } from '@angular/router';
import { EmployeeComponent } from './Components/employee/employee.component';
import { SignupComponent } from './Components/signup/signup.component';

export const routes: Routes = [
    {path:'employee', component:EmployeeComponent},
    {path:'',component:SignupComponent},
    {path:'**',component:SignupComponent}
];
