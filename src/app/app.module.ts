import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialsModule } from './materials/materials.module';
import { ViewEmployeeComponent } from './employee-list/view-employee/view-employee.component';
import { EditEmployeeComponent } from './employee-list/edit-employee/edit-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDataSevice } from './services/employee-data.service';
import { EmployeeServices } from './services/empolyee.service';


@NgModule({
  declarations: [
    AppComponent, EmployeeListComponent, ViewEmployeeComponent, EditEmployeeComponent,
    
  ],
  imports: [
    AppRoutingModule, BrowserModule, FormsModule, 
    BrowserAnimationsModule, HttpClientModule,
    MaterialsModule,
    HttpClientInMemoryWebApiModule.forRoot(EmployeeDataSevice)
    
  ],
  providers: [EmployeeServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
