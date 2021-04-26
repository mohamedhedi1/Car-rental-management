import { Injectable } from '@angular/core';

import {HttpClient,HttpHeaders}from'@angular/common/http';
import { Observable } from 'rxjs';
const httpOptions={headers:new HttpHeaders({'Content-Type':'application/json'})};
@Injectable({
  providedIn: 'root'
})
export class VoituerService {
   
  
  constructor(private http :HttpClient) { }
  async suprime(id:string){
    
    const url ="http://127.0.0.1:8000/supprimer?id="+id;
    
    const  rep = await fetch(url,{
      method:"delete"
    })
      if (rep.ok){
      rep.json().then(data =>{
        console.log(data);
      })
    }
  }
  async addvoiteur(body1:any){
      
      const  rep = await fetch("http://127.0.0.1:8000/ajout_voiture",{
        method:"post",
        body:body1
      })
      if (rep.ok){
      rep.json().then(data =>{
        console.log(data);
      })
    }
  }
  async modifier(body1:any){
      
    const  rep = await fetch("http://127.0.0.1:8000/modifier_voiture",{
      method:"post",
      body:body1
    })
    if (rep.ok){
    rep.json().then(data =>{
      console.log(data);
    })
  }
}
  
  
}
