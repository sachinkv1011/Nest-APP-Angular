import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  constructor(private api:ApiService){}

  empName=""
  empEmail=""
  empDesignation=""
  empPhone=""
  username=""
  password=""

  readValue=()=>{
    let data:any={ 
      "empName":this.empName,
      "empEmail":this.empEmail,
      "empDesignation":this.empDesignation,
      "empPhone":this.empPhone,
      "username":this.username,
      "password":this.password
    }
    console.log(data)
    this.api.addEmployee(data).subscribe(
      (response)=>{
        console.log(response)
        if(response=="success"){
          alert("employee added successfully")
        }
      }
    )
  }

}
