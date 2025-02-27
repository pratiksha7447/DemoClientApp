import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
      exist:boolean=false;
      step:number=2;
      users:any[]=[];
      firstName=signal("Pratiksha Thorat")
      lastName:string="kharare"
      ChangeValue(){
        this.firstName.set("Mahesh Thorat")
        this.lastName="thorat"
      }
      constructor(){
        setTimeout(() => {
          this.firstName.set("nita")
          this.lastName="thorat"

        }, 1000);
      }
}
