import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { EmployeeServices } from "../services/empolyee.service";

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  providers:[EmployeeServices]
})
export class EmployeeListComponent implements OnInit{
  dataSource:any = [];
  displayedColumns:string[] = ['Sr No', 'Full Name', 'Email', 'Contact Number', 'Actions'];

  constructor(private _router:Router, private _employeeService:EmployeeServices){}

  ngOnInit(){
    this._employeeService.getEmployeeList().subscribe(list=> this.dataSource = list);
  }  
  navigateToView(id:string){
    this._router.navigate(['/employee/view',id])
  }
  navigateToEdit(id:string){
    this._router.navigate(['/employee/edit',id])
  }
}