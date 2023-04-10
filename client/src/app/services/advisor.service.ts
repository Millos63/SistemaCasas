import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Advisor } from '../models/Advisor';

@Injectable({
  providedIn: 'root'
})
export class AdvisorService {

  API_URI = 'http://localhost:3000/api'
  constructor(private http:HttpClient) {  
  }
  //Metodos
  getAll()
  {
    return this.http.get(`${this.API_URI}/Advisors`)
  }
  get(id: string){
    //${id} interpolación de cadenas
    return this.http.get(`${this.API_URI}/Advisors/${id}`);
  }

  save(advisor: Advisor){
    return this.http.post(`${this.API_URI}/Advisors`, advisor);
  }

  delete(id:string){
    return this.http.delete(`${this.API_URI}/Advisors/${id}`);
  }

  update(id: string, advisor:Advisor):Observable<Advisor>{
    return this.http.put(`${this.API_URI}/Advisors/${id}`, advisor)
  }}
