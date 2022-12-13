import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-employees',
  templateUrl: './add-employees.component.html',
  styleUrls: ['./add-employees.component.css']
})
export class AddEmployeesComponent {
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
      (response:any)=>{
        console.log(response)
        if(response.status=="success"){
          alert("employee added successfully")
          this.empName=""
          this.empEmail=""
          this.empDesignation=""
          this.empPhone=""
          this.username=""
          this.password=""
        }
        else{
          alert("something has went wrong")
        }
      }
    )
  }


}
