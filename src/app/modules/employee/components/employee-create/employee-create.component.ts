import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  @Input() employeeDetails = {id: '', name: '', email: '', phone: '' }
  productForm!:  FormGroup;

  constructor(
    public restApi: EmployeeService, 
    public router: Router,
    public fb: FormBuilder,
  ) { }

  ngOnInit(): void {

    this.productForm = this.fb.group({
      name: [''],
      email: [''],
      phone: [''],
    })

  }

  addEmployee() {
    this.restApi.createEmployee(this.employeeDetails).subscribe((data: {}) => {
      this.router.navigate(['/employees-list'])
    })
  }


  submitForm2() {
    this.restApi.createEmployee(this.productForm.value).subscribe((data: {}) => {
      console.log('Product created!')
      this.router.navigate(['/employees-list'])
    })
     
  }

  submitForm() {
    this.restApi.createEmployee(this.productForm.value).subscribe( res => {
      console.log('Product created!')
      this.router.navigate(['/employees-list'])
    })
     
  }

  addEmployee2() {
    this.restApi.createEmployee(this.productForm.value).subscribe( res => {
      console.log('Product created!')
      this.router.navigate(['/employees-list'])
    })
     
  }



}
