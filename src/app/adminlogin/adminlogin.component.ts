import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  constructor(private api:ApiService,private route:Router){}

  username=""
  password=""

  readValue=()=>{
    let data:any={
      "username":this.username,
      "password":this.password
    }
    console.log(data)
    if (this.username=="admin" && this.password=="12345") {
      alert("valid login")
      this.route.navigate(['/addEmployee'])
      
    } else {
      alert("Invalid login")
      
    }
  
  }

}
