import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../entities/customer.model'; 

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiUrl = 'https://localhost:7142'; 

  constructor(private http: HttpClient) {}

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.apiUrl}/Customers`);
  }

  getCustomerById(id: number): Observable<Customer> {
    return this.http.get<Customer>(`${this.apiUrl}/Customers/${id}`);
  }

  addCustomer(customer: Customer): Observable<any> {
    const headers = { 'Content-Type': 'application/json' };
    const options = { headers: headers };
    return this.http.post(`${this.apiUrl}/Customers`, customer, options);
  }

  updateCustomer(customer: Customer): Observable<any> {
    const headers = { 'Content-Type': 'application/json' };
    const options = { headers: headers };
    return this.http.put(`${this.apiUrl}/Customers`, customer, options);
  }

  deleteCustomer(id: number): Observable<any> {
    const headers = { 'Content-Type': 'application/json' };
    const options = { headers: headers };
    return this.http.delete(`${this.apiUrl}/Customers/${id}`, options);
  }
}
