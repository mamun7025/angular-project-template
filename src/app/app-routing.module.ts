import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { EmployeeCreateComponent } from './modules/employee/components/employee-create/employee-create.component';
import { AddTutorialComponent } from './modules/tutorials/components/create/add-tutorial.component';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'employee/create', component: EmployeeCreateComponent },
  { path: 'tutorials/add', component: AddTutorialComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
