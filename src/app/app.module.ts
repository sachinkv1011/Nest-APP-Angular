import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';

import { SecurityAddComponent } from './security-add/security-add.component';
import { AddEmployeesComponent } from './add-employees/add-employees.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { ViewAllEmployeeComponent } from './view-all-employee/view-all-employee.component';
import { ViewSecurityComponent } from './view-security/view-security.component';
import { SearchSecurityComponent } from './search-security/search-security.component';
import { EmployeProfileComponent } from './employe-profile/employe-profile.component';
import { UserNavComponent } from './user-nav/user-nav.component';
import { SecurityLoginComponent } from './security-login/security-login.component';
import { SecurityLogViewComponent } from './security-log-view/security-log-view.component';
import { AddLogComponent } from './add-log/add-log.component';
import { SecurityNavComponent } from './security-nav/security-nav.component';

const myRoute:Routes=[
  {
    path:"",component:AdminloginComponent
  },
  {
    path:"employeeLogin",component:EmployeeLoginComponent
  },
  {
    path:"addEmployee",component:AddEmployeesComponent
  },
  {
    path:"addSecurity" ,component:SecurityAddComponent
  },
  {
    path:"searchEmployee",component:SearchEmployeeComponent
  },
  {
    path:"viewAllEmployee",component:ViewAllEmployeeComponent
  },
  {
    path:"viewAllSecurity",component:ViewSecurityComponent
  },
  {
  path:"searchSecurity",component:SearchSecurityComponent
  },
  {
    path:"employeeProfile",component:EmployeProfileComponent
  },
  {
    path:"securityLog",component:SecurityLogViewComponent
  },
  {
    path:"securityLogin",component:SecurityLoginComponent
  },
  {
    path:"addLog",component:AddLogComponent
  }




]

@NgModule({
  declarations: [
    AppComponent,
    EmployeeLoginComponent,
    AdminNavbarComponent,
  
    SecurityAddComponent,
    AddEmployeesComponent,
    AdminloginComponent,
    SearchEmployeeComponent,
    ViewAllEmployeeComponent,
    ViewSecurityComponent,
    SearchSecurityComponent,
    EmployeProfileComponent,
    UserNavComponent,
    SecurityLoginComponent,
    SecurityLogViewComponent,
    AddLogComponent,
    SecurityNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(myRoute),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]   
})
export class AppModule { }
