import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent {

  empName=""
  constructor(private api:ApiService){}

  searchResult:any =[]
  readValue = () =>
  {
    let data:any = {"empName":this.empName}
    console.log(data)
    this.api.searchEmployee(data).subscribe(
      (response:any)=>{
        console.log(response)
        if(response.length ==0){
          alert("invalid user ")
        }
        else{
          this.searchResult = response
        }
      }
    )
  }
  
  deleteBtnClick= (id:any)=>{
    let data:any = {"id":id}
    this.api.deleteEmployee(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status == "success") {
          alert("Deleted Successfully")
        } else {
          alert("Invalid")
        }

      }
    )
  }

}
