import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeCreateComponent } from './emp-profile/components/employee-create/employee-create.component';
// import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
// import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { AddTutorialComponent } from './modules/tutorials/components/create/add-tutorial.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    EmployeeCreateComponent,
    // EmployeeEditComponent,
    // EmployeeListComponent
    AddTutorialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
