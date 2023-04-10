import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { LandLordProperty } from '../models/LLP'; 


import { Observable } from 'rxjs'; 
@Injectable({
  providedIn: 'root'
})
export class LlpService {

  API_URI = 'http://localhost:3000/api'
  constructor(private http:HttpClient){
  }
  //Metodo 
  getLandLordsProperties()
  {
    return this.http.get(`${this.API_URI}/LandLordsProperties`); 
  }
  getLandLordProperty(idLandLord: string, idProperty: string){
    return this.http.get(`${this.API_URI}/LandLordsProperties/${idLandLord}/${idProperty}`);
  }


  saveLandLordProperty(landLordProperty: LandLordProperty){
    return this.http.post(`${this.API_URI}/LandLordsProperties`, landLordProperty);
  }

  deleteLandLordProperty(idLandLord: string, idProperty: string){
    return this.http.delete(`${this.API_URI}/LandLordsProperties/${idLandLord}/${idProperty}`);
  }

  updateLandLordProperty(idLandLord: string, idProperty: string, landLordProperty:LandLordProperty):Observable<LandLordProperty>{
    return this.http.put(`${this.API_URI}/LandLordsProperties/${idLandLord}/${idProperty}`, landLordProperty)
  }
}
