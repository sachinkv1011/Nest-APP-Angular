import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-security-add',
  templateUrl: './security-add.component.html',
  styleUrls: ['./security-add.component.css']
})
export class SecurityAddComponent {
constructor(private api:ApiService){}

  name=""
  address=""
  username=""
  password=""

  readValue=()=>{
    let data:any={
      "name":this.name,
      "address":this.address,
      "username":this.username,
      "password":this.password
    }
    console.log(data)
    this.api.addSecurity(data).subscribe(
      (response:any)=>{
        console.log(response)
        if(response.status=="success"){
          alert("Security added successfully")
          this.name=""
          this.address=""
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
