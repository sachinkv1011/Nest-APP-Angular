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


  deleteEmployee=(data:any)=>{
    return this.http.post("http://localhost:8080/deleteEmployee",data)
  }

  employeeLogin=(data:any)=>{
    return this.http.post("http://localhost:8080/employeeLogin",data)
  }
  employeeProfile=(data:any)=>{
    return this.http.post("http://localhost:8080/employeeProfile",data)
  }


  addSecurity=(data:any)=>{
    return this.http.post("http://localhost:8080/addSecurity",data)
  }
  securityLogin=(data:any)=>{
    return this.http.post("http://localhost:8080/securityLogin",data)
  }

  viewSecurity=()=>{
    return this.http.get("http://localhost:8080/viewAllSecurity")
  }

  searchSecurity=(data:any)=>{
    return this.http.post("http://localhost:8080/searchSecurity",data)
  }
  deleteSecurity=(data:any)=>{
    return this.http.post("http://localhost:8080/deleteSecurity",data)
  }
  viewLog=()=>{
    return this.http.get("http://localhost:8080/viewAllLogs")
  }
  addLog=(data:any)=>{
    return this.http.post("http://localhost:8080/addlog",data)

  }
  exitLog=(data:any)=>{
    return this.http.post("http://localhost:8080/logout",data)

  }

  leaveDetails=(data:any)=>{
    return this.http.post("http://localhost:8080/getLeaveDetails",data)
  }
  applyLeave=(data:any)=>{
    return this.http.post("http://localhost:8080/addleave",data)
  }
  leaveDetailsId=(data:any)=>{
    return this.http.post("http://localhost:8080/viewLeavesByEmpid",data)
  }

}
