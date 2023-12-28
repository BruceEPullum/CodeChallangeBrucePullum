import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataSharingService } from '../../services/data-sharing.service';
import { Router } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
import { Customer } from 'src/app/entities/customer.model';

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.css'],
})
export class AddRecordComponent implements OnInit {
  recordForm: FormGroup;
  customer: Customer;

  constructor(private customerService: CustomerService, private formBuilder: FormBuilder, private dataSharingService: DataSharingService, private router: Router) {}

  ngOnInit(): void {
    this.recordForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });

    this.customer = {
      id: -1,
      firstname: '',
      lastname: '',
      email: '',
      createddate: '',
      lastupdated: ''
    }
  }

  onSubmit(): void {
    if (this.recordForm.valid) {
      const formValues = this.recordForm.value;
      this.customer.firstname = formValues.firstName;
      this.customer.lastname = formValues.lastName;
      this.customer.email = formValues.email;
      try {
        this.customerService.addCustomer(this.customer).subscribe(
          (response) => {
            console.log('Add successful:', response);
            this.router.navigate(['customers']);
          },
          (error) => {
            console.error('Add failed:', error);
          }
        );
      } catch (error) {
        console.error('An unexpected error occurred:', error);
      }
      const formData = this.recordForm.value;
      console.log('Form Data:', formData); 
    }
  }
}
