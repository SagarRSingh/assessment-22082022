import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeServices } from 'src/app/services/empolyee.service';

@Component({
  selector: 'edit-employee',
  templateUrl: './edit-employee.component.html',
  providers: [EmployeeServices]
})
export class EditEmployeeComponent implements OnInit{
  employee:any = {}
  constructor(private _route:ActivatedRoute, private _router:Router,
     private _employeeService:EmployeeServices) { }

  ngOnInit(): void {
    let id = this._route.snapshot.paramMap.get('id')!;
    if(NaN === +id ) this._router.navigate(['/employee-list']);
    else this.employee = this._employeeService.getEmployee(id).subscribe(data=>this.employee=data)
  }  

  goBack(){
    this._router.navigate(['/employee-list']);
  }
  updateDetails(fomr:NgForm){
    
  }

}
