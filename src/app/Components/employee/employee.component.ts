import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from '../../Services/shared-service.service';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {
   data:any=[];
  constructor(private _sharedService:SharedServiceService){

  }
  ngOnInit():void{

  this.getEmpData();
 
  }

  getEmpData(){
    this._sharedService.getEmployeeList().subscribe(res=>{
      this.data = res;
      console.log("employee", this.data)
    });
  }

  redirect(){
    var token = localStorage.getItem('token');
    if (token) {
      const app2RedirectUrl = `https://localhost:44356/api/Auth/sso-login?token=${token}`;
      window.location.href = app2RedirectUrl; // Redirect to App2 with the token
    } else {
      console.error('Token not found in localStorage.');
      alert('You must be logged in to continue.');
    }
  }
}
