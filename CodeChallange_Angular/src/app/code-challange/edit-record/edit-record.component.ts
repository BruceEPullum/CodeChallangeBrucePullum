import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataSharingService } from '../../services/data-sharing.service';
import { Router } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
import { Customer } from 'src/app/entities/customer.model';

@Component({
  selector: 'app-edit-record',
  templateUrl: './edit-record.component.html',
  styleUrls: ['./edit-record.component.css']
})
export class EditRecordComponent implements OnInit {
  recordForm: FormGroup;
  formData: any;
  customer: Customer;

  constructor(private customerService: CustomerService, private formBuilder: FormBuilder, private dataSharingService: DataSharingService, private router: Router) {}

  ngOnInit(): void {
     this.dataSharingService.formData$.subscribe((data) => {
      this.formData = data;
    });

    this.recordForm = this.formBuilder.group({
      firstName: [this.formData.firstname, Validators.required],
      lastName: [this.formData.lastname, Validators.required],
      email: [this.formData.email, [Validators.required, Validators.email]],
    });
    this.customer = {
      id: this.formData.id,
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
        this.customerService.updateCustomer(this.customer).subscribe(
          (response) => {
            console.log('Update successful:', response);
            this.router.navigate(['customers']);
          },
          (error) => {
            console.error('Update failed:', error);
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
