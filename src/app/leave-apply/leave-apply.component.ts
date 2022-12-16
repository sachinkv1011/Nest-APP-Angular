import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-leave-apply',
  templateUrl: './leave-apply.component.html',
  styleUrls: ['./leave-apply.component.css']
})
export class LeaveApplyComponent {
  empId:any = ""
  type = ""
  description = ""
  leaveDate = ""
  leaveDetails:any = []
  constructor(private api:ApiService, private router:Router){
      localStorage.getItem("userId")
    this.empId = localStorage.getItem("userId")
    console.log(this.empId)
    api.leaveDetails(this.empId).subscribe(
      (response:any)=>{
        this.leaveDetails = response
      }
    )
  }

  readValue = ()=>{
    let data:any = {"empId":this.empId,"type":this.type,"description":this.description,"leaveDate":this.leaveDate}
    console.log(data)
    this.api.applyLeave(data).subscribe(
      (response:any)=>{
        if(response.status=="success"){
          alert("Leave Request Submitted Successfully")
        
          
        }else{
          alert("You don't have enough leaves")
        }
      }
    )
  }

  

}
