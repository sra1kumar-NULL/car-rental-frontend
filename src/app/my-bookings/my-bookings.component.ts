import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MyBookingsModalComponent } from '../my-bookings-modal/my-bookings-modal.component';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.css']
})
export class MyBookingsComponent {
  constructor(private dialog:MatDialog){

  }
  openDialog() {
    const dialogRef = this.dialog.open(MyBookingsModalComponent, {
      width: '1500px',
      height:'700px',
      
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('closed my bookings')
    });
  }
}
