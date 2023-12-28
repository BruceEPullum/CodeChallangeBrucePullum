import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRecordComponent } from '../add-record/add-record.component';
import { CustomersComponent } from './customers.component';
import { EditRecordComponent } from '../edit-record/edit-record.component';

const routes: Routes = [
  { path: '', component: CustomersComponent},
  { path: 'add-record', component: AddRecordComponent },
  { path: 'edit-record', component: EditRecordComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }