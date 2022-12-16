import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-security',
  templateUrl: './search-security.component.html',
  styleUrls: ['./search-security.component.css']
})
export class SearchSecurityComponent {
  
  name=""
  constructor(private api:ApiService){}

  searchResult:any =[]
  readValue = () =>
  {
    let data:any = {"name":this.name}
    console.log(data)
    this.api.searchSecurity(data).subscribe(
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
    this.api.deleteSecurity(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status == "success") {
          alert("Deleted Successfully")
          window.location.reload()
        } else {
          alert("Invalid")
        }

      }
    )
  }



}
