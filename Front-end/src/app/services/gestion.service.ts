import { GestionComponent } from './../gestion/gestion.component';

import { Injectable } from '@angular/core';
import{Observable}from 'rxjs';
import {HttpClient}from'@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class GestionService {
  apiURL:string='http://127.0.0.1:8000/login';
 

  constructor(private http :HttpClient) { }
  getlogin():Observable <any[]>{
    return this.http.get<any[]>(this.apiURL)


  }
  async supprime(val:any){
    var url="http://127.0.0.1:8000/supprimel?id="+val
    const  rep = await fetch(url,{
      method:"post"
    })
    if (rep.ok){
    rep.json().then(data =>{
      console.log(data);
    })
  }
  }

}


