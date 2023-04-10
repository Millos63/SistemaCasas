import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { LandLord } from '../models/LandLord';

import{Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LandLordService {
  API_URI = 'http://localhost:3000/api'
  constructor(private http:HttpClient) {  
  }
  //Metodos
  getLandLords()
  {
    return this.http.get(`${this.API_URI}/LandLords`)
  }
  getLandLord(id: string){
    //${id} interpolación de cadenas
    return this.http.get(`${this.API_URI}/LandLords/${id}`);
  }

  saveLandLord(landLord: LandLord){
    return this.http.post(`${this.API_URI}/LandLords`, landLord);
  }

  deleteLandLord(id:string){
    return this.http.delete(`${this.API_URI}/LandLords/${id}`);
  }

  updateLandlord(id: string, landLord:LandLord):Observable<LandLord>{
    return this.http.put(`${this.API_URI}/LandLords/${id}`, landLord)
  }
}
