import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { BookingsService } from '../services/bookings.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-my-bookings-modal',
  templateUrl: './my-bookings-modal.component.html',
  styleUrls: ['./my-bookings-modal.component.css']
})
export class MyBookingsModalComponent {
   dataSource=[]
  constructor(public dialogRef: DialogRef<string>,private service:BookingsService) {}
  ngOnInit() {
    this.service.getAllBookings().subscribe((response)=>{
      if(response?.status){
        const formattedData=response?.data?.map((item:any,index:number)=>{
          return {
            id:item.bookingId??index,
            car_model:item.car_model??'-',
            no_of_days_booked:item?.booking_duration??'-',
            start_date:item.start_date?formatDate(item.start_date,'short','en'):'-',
            end_date:item.end_date?formatDate(item.end_date,'short','en'):'-',
            car_price :item.car_price??'-',
            price_to_pay:item.total_price??'-',
          }
        })
        this.dataSource=formattedData
      }
    });
  }
  displayedColumns: string[] = ['car-position', 'car-model', 'car-price', 'booking-duration','start-date','end-date','total-price'];
}
