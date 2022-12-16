import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-admin-leave',
  templateUrl: './admin-leave.component.html',
  styleUrls: ['./admin-leave.component.css']
})
export class AdminLeaveComponent  {

  constructor(private api:ApiService){
    let data:any = {
      "id": localStorage.getItem("userId")
    }
    console.log(data)
    this.api.leaveDetailsId(data).subscribe(
      (response:any)=>{
        console.log(response)
        this.leave=response
        // this.leave=localStorage.getItem("userId")
      }
    )
  }
  leave:any = []
  loading:boolean = true
  

}
