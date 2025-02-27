import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentComponent } from './Components/student/student.component';
import { EmployeeComponent } from './Components/employee/employee.component';
import { SignupComponent } from './Components/signup/signup.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,StudentComponent,EmployeeComponent,SignupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular18Practice';
}
