import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

const myRoute:Routes=[
  {
    path:"",component:AdminLoginComponent
  },
  {
    path:"employeeLogin",component:EmployeeLoginComponent
  }




]

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    EmployeeLoginComponent,
    AdminNavbarComponent,
    AddEmployeeComponent
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
