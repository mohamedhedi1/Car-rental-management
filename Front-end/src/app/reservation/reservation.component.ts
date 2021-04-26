import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {ReservationService} from './../services/reservation.service';
import {client} from './../model/client.model';

import {Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']

})
export class ReservationComponent implements OnInit {
  d1=new Date()
  x=this.d1.getDate
  matricul: any;
  matsel: any;
  client = new client();
  constructor(private ReservationService: ReservationService,private Router:Router,private http:HttpClient) {}

  async ngOnInit() {
    localStorage.removeItem("isloggedIn")
    localStorage.setItem('var',"false")
    localStorage.clear()
    const rep = await fetch("http://127.0.0.1:8000/affichev");
    if (rep.ok) {
      rep.json().then(data => {
        this.matricul = data;

      })
    }
  }

  async addres() {
    var verif=true
    if((Number(this.d1.getTime)>Number(this.client.debuit?.getTime)||Number(this.d1.getTime)>Number(this.client.fin?.getTime))&&(
    Number(this.client.debuit?.getTime)>=Number(this.client.fin?.getTime) ||Number(this.client.debuit?.getTime)<=Number(this.client.fin?.getTime))
    )
    {
       verif=false;

    }



      var loc: any
     const rep = await fetch("http://127.0.0.1:8000/affichel");
      if (rep.ok) {
      rep.json().then(data => {
        loc = data;
        console.log(loc);
      })
    } var test = true
    


    
    if(loc==undefined){
      test=true
    }else{
       for (let i = 0; i <= loc.length; i++) {
        if (loc[i].date_debut == this.client.debuit || loc[i].date_fin == this.client.fin) {
          test = false }
        }
      }
      /***********Test client */
      var clc:any;
      const rep1 = await fetch("http://127.0.0.1:8000/affichec");
    if (rep1.ok) {
      rep1.json().then(data => {
        clc = data;
        console.log(clc);
      })
    } var testc = true
    

  
    
    if(clc==undefined){
      testc=true
    }else{
       for (let i = 0; i <= clc.length; i++) {
        if (clc[i].cin == this.client.cin) {
          testc = false }
        }
      }
    
    ///////////*********/ */
   var voit:any
    
  if (verif==false){  
    alert("date n est pas identique")
  }else if (test == false) {
      alert("c'ette Voiteur est indisponible dans se periode "+JSON.stringify( this.client.debuit)+"&"+JSON.stringify( this.client.fin)+"")
    } else if(testc=true) {
     
      ////** ajouter client *//
      var body = `{"cin":"${this.client.cin}" , "nom":"${this.client.nom}" , "prenom":"${this.client.prenom}" , "dn":"${this.client.dn}" ,"email":"${this.client.email}","tel":"${this.client.tel}","adresse":"${this.client.adresse}"}`
      this.ReservationService.addclient(body)
      /////////*********ajout location */
      var body1 = `{"id_location":"${Number(0)}" ,"matricule_v":"${this.client.mat}" , "cin_c":"${Number(this.client.cin)}" , "date_debut":"${this.client.debuit}" , "date_fin":"${this.client.fin}"}`
      this.ReservationService.addloc(body1)
      localStorage.setItem('nom',String(this.client.nom))
      localStorage.setItem('prenom',String(this.client.prenom))
      localStorage.setItem('var',"true")
     
      localStorage.setItem('mat',String(this.client.mat))
      this.ff()
      this.Router.navigate(["/Confirmation"])
      
      
     }else{
      var body1 = `{"id_location":"${Number(0)}" ,"matricule_v":"${this.client.mat}" , "cin_c":"${Number(this.client.cin)}" , "date_debut":"${this.client.debuit}" , "date_fin":"${this.client.fin}"}`
      this.ReservationService.addloc(body1)
      localStorage.setItem('nom',String(this.client.nom))
      localStorage.setItem('prenom',String(this.client.prenom))
      localStorage.setItem('var',"true")
      localStorage.setItem('mat',String(this.client.mat))
      this.ff()
      this.Router.navigate(["/Confirmation"])
     }


    }

    async ff(){

      var voit:any;
      this.http.get("http://127.0.0.1:8000/affichev").subscribe(data=>{
        voit=data
      }) 
      for(let i=0;i<=voit.length;i++){
        if(voit[i].matricule===localStorage.getItem("mat")){
           
          sessionStorage.setItem("url",String(voit[i].imagev))
       }
      
      }
      
    }

  }





    
    






