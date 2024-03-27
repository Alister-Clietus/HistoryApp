import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-order-options',
  templateUrl: './order-options.component.html',
  styleUrls: ['./order-options.component.css']
})
export class OrderOptionsComponent implements OnInit {
  data: any;
  arraydata: string[] = [];
  droppedItems: string[] = [];

  constructor(private httpservice:ServiceService) { }

  ngOnInit(): void 
  {
    this.getData()
  }

  public loaddata()
  {
    this.data=this.httpservice.getdata("http://localhost:8099/question/get")
    console.log("hello")
    console.log(this.data)
  }

  getData(): void {
    this.httpservice.getdata("http://localhost:8099/question/get").subscribe(
      (response) => {
        // Store the data in a variable
        this.data = response;
        this.arraydata=this.data.object.JSONARRAY
        console.log('Data retrieved successfully!', this.data);
      },
      (error) => {
        console.error('Failed to retrieve data.', error);
      }
    );
  }

  onDragStart(event: DragEvent, index: number): void {
    event.dataTransfer?.setData('text/plain', index.toString());
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    if(this.areArraysEqual())
    {
      Swal.fire({
        toast: true,
        position: "center",
        showConfirmButton: false,
        timer: 1000,
        icon: "success",
        title: "In order",
      });    }
    else
    {
      console.log("False")
    }
    console.log("First Array is")
    console.log(this.arraydata)
    console.log("Second Array is")
    console.log(this.droppedItems)
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    const fromIndex = +event.dataTransfer?.getData('text/plain');
    
    // Get the dropped item from the arraydata
    const droppedItem = this.arraydata[fromIndex];

    // Add the dropped item to the droppedItems array
    this.droppedItems.push(droppedItem);

    // Optionally, you can remove the item from the original arraydata
    // this.arraydata.splice(fromIndex, 1);
    if(this.areArraysEqual())
    {
      Swal.fire({
        toast: true,
        position: "center",
        showConfirmButton: false,
        timer: 1000,
        icon: "success",
        title: "In order",
      });    }
    else
    {
      console.log("False")
    }
  }

  areArraysEqual(): boolean {
    if (this.arraydata.length !== this.droppedItems.length) {
      return false;
    }
  
    for (let i = 0; i < this.arraydata.length; i++) {
      if (this.arraydata[i] !== this.droppedItems[i]) {
        return false;
      }
    }
  
    return true;
  }


}
