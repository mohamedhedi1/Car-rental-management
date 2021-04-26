import { Router } from '@angular/router';
import { VoituerService } from './../services/voituer.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css']
})
export class ModifierComponent implements OnInit {
  select:any;
  mats:any;
  h:any;
  voit:any;
  url:any;
  NBPORTE:any;
  NBPLACE:any;
  constructor(private VoituerService:VoituerService ,private router:Router) { }

  async ngOnInit(){
    const rep = await fetch("http://127.0.0.1:8000/affichev");
    if (rep.ok){
     rep.json().then(data =>{
     this.mats =data ;
     
    })
    }
    
  }
  
   async selects(val:any){
     
    const rep = await fetch("http://127.0.0.1:8000/affichevmoidifer?mat="+val);
    if (rep.ok){
     rep.json().then(data =>{
       this.voit =data ;
     
    })
    }
    alert("Modifiez et ne vous inquiétez pas")
 }
 Modifier(){
  var price = (<HTMLInputElement>document.getElementById("PRIX")).value
  if (this.voit[0].prix!=price){
    price=this.voit[0].prix
  }
  var MARQUE = (<HTMLInputElement>document.getElementById("MARQUE")).value
  if (this.voit[0].marque!=MARQUE){
    MARQUE=this.voit[0].marque
  }
  var MODEL = (<HTMLInputElement>document.getElementById("MODEL")).value
  if (this.voit[0].modele!=MODEL){
    MODEL=this.voit[0].modele
  }
  
  var CLIMATISATION = (<HTMLInputElement>document.getElementById("CLIMATISATION")).value
  if (this.voit[0].climatisation!=CLIMATISATION){
    CLIMATISATION=this.voit[0].climatisation
  }

  var BOITVITESSE = (<HTMLInputElement>document.getElementById("BOITVITESSE")).value
  if (this.voit[0].type_boite!=BOITVITESSE){
    BOITVITESSE=this.voit[0].type_boite
  }
  if (this.voit[0].nb_porte!=this.NBPORTE){
    this.NBPORTE=this.voit[0].nb_porte
  }
  if (this.voit[0].nb_place!=this.NBPLACE){
    this.NBPLACE=this.voit[0].nb_place
  }
  if (this.voit[0].imagev!=this.url){
    this.url=this.voit[0].imagev
  }

  var body = `{"matricule":"${this.select}" , "nb_place":"${Number(this.NBPLACE)}" , "nb_porte":"${Number(this.NBPORTE)}" , "type_boite":"${Number(BOITVITESSE)}" ,"espace":"${Number(0)}","climatisation":"${Number(CLIMATISATION)}","prix":"${Number(price)}","marque":"${MARQUE}" , "modele":"${MODEL}","imagev":"${this.url}"}`
  console.log(body)
  this.VoituerService.modifier(body)
  alert("Successful")
  this.router.navigate(["/bd"])
 }
 onSelectFile(event:any){
  console.log("here");
  if (event.target.files && event.target.files[0]){
    var reader = new FileReader()// 
    reader.readAsDataURL(event.target.files[0])
    reader.onload = async (data) =>{
      this.url = data.target?.result as string;
    }
  }

}
}