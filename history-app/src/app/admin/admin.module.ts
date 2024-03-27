import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddQuestionComponent } from './add-question/add-question.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AddQuestionComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
