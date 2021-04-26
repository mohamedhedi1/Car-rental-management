import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor() { }
  async addclient(body1:any){
      
    const  rep = await fetch("http://127.0.0.1:8000/ajout_client",{
      method:"post",
      body:body1
    })
    if (rep.ok){
    rep.json().then(data =>{
      console.log(data);
    })
  }
}







async addloc(body1:any){
      
  const  rep1= await fetch("http://127.0.0.1:8000/ajout_location",{
    method:"post",
    body:body1
  })
  if (rep1.ok){
  rep1.json().then(data =>{
    console.log(data);
  })
}
}
}
