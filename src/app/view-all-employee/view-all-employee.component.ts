import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-all-employee',
  templateUrl: './view-all-employee.component.html',
  styleUrls: ['./view-all-employee.component.css']
})
export class ViewAllEmployeeComponent {
  data:any = []
    constructor(private api:ApiService){
      this.api.viewAllEmployee().subscribe(
        (response) => {
          this.data = response;
        }
      )
    }
  
  }
