import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { ListEmployeesComponent } from './employee/list-employees.component';
import { CreateEmployeeComponent} from './employee/create-employee.component';

const appRoutes: Routes = [
  { path: 'list', component: ListEmployeesComponent },
  { path: 'create', component: CreateEmployeeComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
