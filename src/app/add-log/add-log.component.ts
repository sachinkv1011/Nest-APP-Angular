import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-log',
  templateUrl: './add-log.component.html',
  styleUrls: ['./add-log.component.css']
})
export class AddLogComponent{

  emp_id =""
  constructor(private api:ApiService){}

  addEntry = ()=>{
    let data:any = {
      "emp_id":this.emp_id
    }
    this.api.addLog(data).subscribe(
      (response:any)=>{
        if(response.status == "success"){
          alert("success")
        }
        
      }
    )
  }

  addExit=()=>{
    let data:any = {
      "emp_id":this.emp_id
    }
    this.api.exitLog(data).subscribe(
      (response:any)=>{
        if(response.status == "success"){
          alert("success")
        }else{
          alert("Employee entry not found")
        }
      }
    )
  }


}
