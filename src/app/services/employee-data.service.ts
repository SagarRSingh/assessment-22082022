import { InMemoryDbService, RequestInfo } from "angular-in-memory-web-api";
import { Observable } from "rxjs";

export class EmployeeDataSevice implements InMemoryDbService{
  createDb(reqInfo?: RequestInfo | undefined): {} | Observable<{}> | Promise<{}> {
    return {
      employees:[
        {Id:'1', FirstName:'Ramesh', MiddleName:'Kishor',LastName:' Kumar',Email:'Hello@gmail.com',ContactNumber:'9999993434',Gender:'male',DateOfBirth:'01/02/2004',EmployeeType:'Permanent',Address:'This is a random Address',Pincode: 123456},
        {Id:'2', FirstName:'Ramesh', MiddleName:'Kishor',LastName:' Kumar',Email:'Hello@gmail.com',ContactNumber:'9999993434',Gender:'male',DateOfBirth:'01/02/2004',EmployeeType:'Permanent',Address:'This is a random Address',Pincode: 123456},
        {Id:'3', FirstName:'Ramesh', MiddleName:'Kishor',LastName:' Kumar',Email:'Hello@gmail.com',ContactNumber:'9999993434',Gender:'male',DateOfBirth:'01/02/2004',EmployeeType:'Permanent',Address:'This is a random Address',Pincode: 123456},
        {Id:'4', FirstName:'Ramesh', MiddleName:'Kishor',LastName:' Kumar',Email:'Hello@gmail.com',ContactNumber:'9999993434',Gender:'male',DateOfBirth:'01/02/2004',EmployeeType:'Permanent',Address:'This is a random Address',Pincode: 123456},
        {Id:'5', FirstName:'Ramesh', MiddleName:'Kishor',LastName:' Kumar',Email:'Hello@gmail.com',ContactNumber:'9999993434',Gender:'male',DateOfBirth:'01/02/2004',EmployeeType:'Permanent',Address:'This is a random Address',Pincode: 123456},
        {Id:'6', FirstName:'Ramesh', MiddleName:'Kishor',LastName:' Kumar',Email:'Hello@gmail.com',ContactNumber:'9999993434',Gender:'male',DateOfBirth:'01/02/2004',EmployeeType:'Permanent',Address:'This is a random Address',Pincode: 123456},
        {Id:'7', FirstName:'Ramesh', MiddleName:'Kishor',LastName:' Kumar',Email:'Hello@gmail.com',ContactNumber:'9999993434',Gender:'male',DateOfBirth:'01/02/2004',EmployeeType:'Permanent',Address:'This is a random Address',Pincode: 123456},
        {Id:'8', FirstName:'Ramesh', MiddleName:'Kishor',LastName:' Kumar',Email:'Hello@gmail.com',ContactNumber:'9999993434',Gender:'male',DateOfBirth:'01/02/2004',EmployeeType:'Permanent',Address:'This is a random Address',Pincode: 123456},
        {Id:'9', FirstName:'Ramesh', MiddleName:'Kishor',LastName:' Kumar',Email:'Hello@gmail.com',ContactNumber:'9999993434',Gender:'male',DateOfBirth:'01/02/2004',EmployeeType:'Permanent',Address:'This is a random Address',Pincode: 123456},
        {Id:'10', FirstName:'Ramesh', MiddleName:'Kishor',LastName:' Kumar',Email:'Hello@gmail.com',ContactNumber:'9999993434',Gender:'male',DateOfBirth:'01/02/2004',EmployeeType:'Permanent',Address:'This is a random Address',Pincode: 123456},
      ]
    }
  }
}