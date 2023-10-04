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
  private backendUrl='http://localhost:3000/cars'

  getCars():Observable<Response> {
    return this.http.get<Response>(this.backendUrl)
  }
}
