import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderOptionsComponent } from './order-options/order-options.component';


const routes: Routes = 
[
  {
    path:"orderquestion",component:OrderOptionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
