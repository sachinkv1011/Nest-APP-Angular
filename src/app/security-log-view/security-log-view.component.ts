import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-security-log-view',
  templateUrl: './security-log-view.component.html',
  styleUrls: ['./security-log-view.component.css']
})
export class SecurityLogViewComponent {

  data:any = []
  constructor(private api:ApiService){
    api.viewLog().subscribe(
      (response) =>{
        this.data = response
        
      }
    )
  }

}
