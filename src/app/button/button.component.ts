import { Component, Input } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { BookCarModalComponent } from '../book-car-modal/book-car-modal.component';
import { Car } from '../consts/types';
import { BookingsService } from '../services/bookings.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
 @Input() car:Car;
  constructor(private dialog: MatDialog,private service:BookingsService) {}

  openDialog() {
    const dialogRef = this.dialog.open(BookCarModalComponent, {
      width: '500px',
      height:'450px',
      data:{
        carModel:this.car.car_model_name,
        carPrice:this.car.car_rental_price
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      const {start,end}=result._model.selection
      if(start && end){
        var diffDays:any = Math.floor((end - start) / (1000 * 60 * 60 * 24));
        var value=(diffDays+1)*this.car.car_rental_price
        this.service.createBooking({
          car_model:this.car.car_model_name,
          no_of_days_booked:diffDays,
          start_date:start,
          end_date:end,
          car_price :this.car.car_rental_price,
          price_to_pay:value
        }).subscribe((response)=>{
          if(response.status){
            window.alert('Successfully made a booking.')
          }
        })
      }
    });
  }

}
