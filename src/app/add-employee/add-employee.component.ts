import { Component } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

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
  }

}
