import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employe-profile',
  templateUrl: './employe-profile.component.html',
  styleUrls: ['./employe-profile.component.css']
})
export class EmployeProfileComponent {
  data:any={}
  empId:any=""
  constructor(private api:ApiService){
    this.empId=localStorage.getItem("userId")
    let datas:any={
      "id":this.empId
    }
    this.api.employeeProfile(datas).subscribe(
      (response:any)=>{
        console.log(response)
        this.data=response

      }
    )
  }

}
