import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
interface Response{
  status:string,
  data:any
}
@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  
  constructor(private http:HttpClient){
  }
  private backendUrl='https://car-rental-backend-service.onrender.com/bookings'

  getAllBookings():Observable<Response> {
    return this.http.get<Response>(this.backendUrl)
  }

  createBooking(req:any):Observable<Response>{
    return this.http.post<Response>(this.backendUrl,req)
  }
}
