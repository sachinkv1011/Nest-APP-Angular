import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent {
  constructor(private api:ApiService,private route:Router){}

  username=""
  password=""

  readValue=()=>{
    let data:any={
      "username":this.username,
      "password":this.password
    }
    console.log(data)
    this.api.employeeLogin(data).subscribe(
      (response:any)=>{
        let userId=response.userId;
        localStorage.setItem("userId",userId)
        this.route.navigate(['/employeeprofile'])

      }
    )

    
  }

}
