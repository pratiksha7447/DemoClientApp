import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from '../../Services/shared-service.service';
import { FormsModule } from '@angular/forms';
import { Route, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule,RouterModule ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {
  username:string="";
  password:string="";
  loginData:any;
  constructor(private _sharedService:SharedServiceService,private router:Router){

  }
  ngOnInit():void{

  }
  Login(){
    if(this.username!=null || this.username!='' || this.password!=null || this.password!=''){
      this.loginData={
        username:this.username,
        password:this.password,
        email:"pratiksha@gmail.com"
      };
      this._sharedService.Login(this.loginData).subscribe(
        data =>{
        console.log(data)
        if(data.token){
          alert("login Successufully");
          this.router.navigate(['/employee']);
          if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
            localStorage.setItem('token', data.token);
          }
          
          //localStorage.setItem('token', data.token); // Store after login
        }},
        error => {
          console.log(error)

          alert(error)
        }
      )}
       }
}
