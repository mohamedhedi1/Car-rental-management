import { Router } from '@angular/router';
import { VoituerService } from './../services/voituer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supprimer',
  templateUrl: './supprimer.component.html',
  styleUrls: ['./supprimer.component.css']
})
export class SupprimerComponent implements OnInit {
  mat:any;
  matsel:any;
  constructor(private VoituerService:VoituerService,private router: Router) { }

   async ngOnInit() {

    const rep = await fetch("http://127.0.0.1:8000/matricule");
    if (rep.ok){
     rep.json().then(data =>{
     this.mat =data ;
     
    })
    }
    
   }
   supprime(){
     console.log(this.matsel)
     this.VoituerService.suprime(this.matsel)
     alert("Voiture Supprime avec Succes")
     window.location.reload()
     
   }
}
