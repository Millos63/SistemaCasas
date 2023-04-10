import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Property } from '../models/Property';

import{Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  API_URI = 'http://localhost:3000/api'
  constructor(private http:HttpClient) {  
  }
  //Metodos
  getAll()
  {
    return this.http.get(`${this.API_URI}/Properties`)
  }
  get(id: string){
    //${id} interpolación de cadenas
    return this.http.get(`${this.API_URI}/Properties/${id}`);
  }

  save(property: Property){
    return this.http.post(`${this.API_URI}/Properties`, property);
  }

  delete(id:string){
    return this.http.delete(`${this.API_URI}/Properties/${id}`);
  }

  update(id: string, property:Property):Observable<Property>{
    return this.http.put(`${this.API_URI}/Properties/${id}`, property)
  }
}
