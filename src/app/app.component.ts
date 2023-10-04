import { Component } from '@angular/core';
import { Car } from './consts/types';
import { CarService } from './services/car.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'car-rental-client';
  cars: Car[] = [];
  errorMessage!: string;
  showBookings:boolean;
  constructor(private service:CarService){
    this.showBookings=false
  }
  toggleShowBookings(){
    this.showBookings=this.showBookings===true?false:true
  }
  ngOnInit() {
    this.service.getCars().subscribe((response)=>{
      if(response?.status){
        this.cars=response?.data
      }
    });
  }
  
}
