import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-leave-status',
  templateUrl: './leave-status.component.html',
  styleUrls: ['./leave-status.component.css']
})
export class LeaveStatusComponent { 

  constructor(private api:ApiService){
    let data:any = {
      "id": localStorage.getItem("userInfo")
    }
    console.log(data)
    api.leaveDetailsId(data).subscribe(
      (response:any)=>{
        console.log(response)
        this.leaves=response
      }
    )
  }
  leaves:any = []
  loading:boolean = true
  
  }
