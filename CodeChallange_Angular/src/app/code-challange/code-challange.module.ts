import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersRoutingModule } from './customers/customers-routing.module';
import { CustomersComponent } from './customers/customers.component';
import { SortPipe } from '../pipes/sort.pipe';
import { EditRecordComponent } from './edit-record/edit-record.component';
import { AddRecordComponent } from './add-record/add-record.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [CustomersComponent,SortPipe, EditRecordComponent,AddRecordComponent]
})
export class CustomersModule { }