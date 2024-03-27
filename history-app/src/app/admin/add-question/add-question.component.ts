import { Component, OnInit } from '@angular/core';
import { OrderQuestion } from 'src/app/model/order-question';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  value: void;

  constructor(private service:ServiceService) { }
  orderquestion: OrderQuestion =new  OrderQuestion();
  ngOnInit(): void 
  {

  }

  add()
  {
    this.value=this.service.postHttpService("",this.orderquestion)
  }

}
