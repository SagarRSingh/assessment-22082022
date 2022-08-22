import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { EditEmployeeComponent } from "./employee-list/edit-employee/edit-employee.component";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { ViewEmployeeComponent } from "./employee-list/view-employee/view-employee.component";

const routes:Routes = [
  {path:'employee-list', component:EmployeeListComponent},
  {path:'employee/view/:id', component:ViewEmployeeComponent},
  {path:'employee/edit/:id', component:EditEmployeeComponent},
  {path:'', redirectTo:'employee-list', pathMatch:'full'}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}