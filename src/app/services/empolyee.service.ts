import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, ReplaySubject } from "rxjs";

interface IEmployee{
  Id:string;
  FirstName:string;
  MiddlgeName:string;
  LastName:string;
  Email:string;
  ContactNumber:string;
  Gender:string;
  DateOfBirth:string;
  EmployeeType:string;
  Address:string;
  Pincode:number;
}

@Injectable()
export class EmployeeServices {
  apiUrl:string='api/employees'

  constructor(private _http:HttpClient){}

  getEmployeeList():Observable<IEmployee[]>{
    return this._http.get<IEmployee[]>(this.apiUrl)
  }
  getEmployee(id:string){
    const temp = new ReplaySubject()    
    this._http.get<IEmployee[]>(this.apiUrl).subscribe((employees)=>{
      temp.next(employees.find(employee=>id===employee.Id))
      temp.complete()
    })

    return temp;
  }
}