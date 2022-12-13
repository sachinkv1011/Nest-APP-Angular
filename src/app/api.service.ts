import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {  }    
  
  addEmployee=(data:any)=>{
    return this.http.post("http://localhost:8080/addEmployee",data)
  }
  searchEmployee=(data:any)=>{
    return this.http.post("http://localhost:8080/searchEmployee",data)
  }
  viewAllEmployee=()=>{
    return this.http.get("http://localhost:8080/viewAllEmployee")
  }
  empLogin=(data:any)=>{
    return this.http.post("http://localhost:8080/empLogin",data)
  }
  deleteEmployee=(data:any)=>{
    return this.http.post("http://localhost:8080/deleteEmployee",data)
  }
  employeeLogin=(data:any)=>{
    return this.http.post("http://localhost:8080/employeeLogin",data)
  }

}
