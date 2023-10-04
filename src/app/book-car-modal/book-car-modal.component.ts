import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
interface DialogData{
  carModel:string,
  carPrice:number
}
@Component({
  selector: 'app-book-car-modal',
  templateUrl: './book-car-modal.component.html',
  styleUrls: ['./book-car-modal.component.css']
})
export class BookCarModalComponent {
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  constructor( @Inject(DIALOG_DATA) public data: DialogData,
  public dialogRef: DialogRef<string>
  ) {}
  countDuration(value:any){
   if(value.start && value.end){
     var diffDays:any = Math.floor((value.end - value.start) / (1000 * 60 * 60 * 24));
     return diffDays;
   }
   return ''
  }
  onNoClick(){
    this.dialogRef.close()
  }
}
