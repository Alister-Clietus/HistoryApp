import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddQuestionComponent } from './add-question/add-question.component';
import { SidebarComponent } from './sidebar/sidebar.component';


const routes: Routes = 
[
  {
    path:"addquestion",component:AddQuestionComponent
  },
  {
    path:"sidebar",component:SidebarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
