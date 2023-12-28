import { Component, OnInit } from '@angular/core';
import { Customer } from '../../entities/customer.model';
import { Router } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
import { DataSharingService } from '../../services/data-sharing.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: Customer[] = [];
  sortBy: string = 'id';
  sortOrder: number = 1; // 1 for ascending, -1 for descending

  constructor(private customerService: CustomerService, private dataSharingService: DataSharingService, private router: Router) { }


  sort(property: string) {
    if (property === this.sortBy) {
      this.sortOrder = -this.sortOrder;
    } else {
      this.sortBy = property;
      this.sortOrder = 1;
    }
  }

  editCustomer(customer: Customer) {
    this.dataSharingService.setFormData(customer);
    this.router.navigate(['customers/edit-record']);
    console.log('Editing customer:', customer);
  }

  deleteCustomer(customer: Customer) {
    const isConfirmed = window.confirm(`Are you sure you want to delete ${customer.firstname + ' ' + customer.lastname}?`);
    if (isConfirmed) {
      try {
        this.customerService.deleteCustomer(customer.id).subscribe(
          (response) => {
            console.log('Delete successful:', response);
            this.customerService.getCustomers().subscribe((customers) => {
              this.customers = customers;
            });
          },
          (error) => {
            console.error('Delete failed:', error);
          }
        );
      } catch (error) {
        console.error('An unexpected error occurred:', error);
      }
    }
    console.log('Deleted customer:', customer);
  }

  ngOnInit() {
    
    this.customerService.getCustomers().subscribe((customers) => {
      this.customers = customers;
    });


  }
}