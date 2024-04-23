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
  showCongratulationAnimation: boolean = false;

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
    console.log("Dropped Item:");
    console.log(droppedItem);
  
    // Check if the dropped item already exists in droppedItems array
    if (this.droppedItems.includes(droppedItem)) {
      // If the item already exists, show a message and return without adding it again
      Swal.fire({
        toast: true,
        position: "center",
        showConfirmButton: false,
        timer: 1000,
        icon: "error",
        title: "Item already exists in the list",
      });
      return;
    }
  
    // Add the dropped item to the droppedItems array
    this.droppedItems.push(droppedItem);
    console.log("Dropped Items full:");
    console.log(this.droppedItems);
  
    // Optionally, you can remove the item from the original arraydata
    // this.arraydata.splice(fromIndex, 1);
  
    if (this.areArraysEqual()) {
      this.showCongratulationAnimation = true;
      setTimeout(() => {
        this.showCongratulationAnimation = false;
      }, 3000); 
    } else {
      Swal.fire({
        toast: true,
        position: "center",
        showConfirmButton: false,
        timer: 1000,
        icon: "error",
        title: "Not in order",
      });
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
