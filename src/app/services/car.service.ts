import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../consts/types';
interface Response{
  status:string,
  data:Car[]
}

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http:HttpClient){
  }
  private backendUrl='https://car-rental-backend-service.onrender.com/cars'

  getCars():Observable<Response> {
    return this.http.get<Response>(this.backendUrl)
  }
}
