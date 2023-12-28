import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeScreenComponent} from './home-screen/home-screen.component'

const routes: Routes = [  {
  path: 'customers',
  loadChildren: () => import('../app/code-challange/code-challange.module').then(m => m.CustomersModule)
},
{
  path: 'home',
  component: HomeScreenComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
