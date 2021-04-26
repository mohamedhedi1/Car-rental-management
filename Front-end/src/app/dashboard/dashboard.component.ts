import { GestionService } from './../services/gestion.service';
import { locations } from './../model/locations.model';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  location:any;
  
  constructor(private http: HttpClient,private GestionService:GestionService) { }
 
  async ngOnInit() {

    const rep = await fetch("http://127.0.0.1:8000/affichel");
    if (rep.ok){
     rep.json().then(data =>{
     this.location =data ;
     console.log(this.location);
    })
    }
    
   }
   Supprimeres(val:any){
    this.GestionService.supprime(val);
    window.location.reload()
   }

}
