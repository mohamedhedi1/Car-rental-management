import { Router } from '@angular/router';
import { VoituerService } from './../services/voituer.service';
import { Component, OnInit,Input} from '@angular/core';
import { voiteur } from '../model/voituer.model';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {
  voit=new voiteur();
   NBPORTE:any;
   NBPLACE:any;
   currentInput:any;
   mat:any;
  
  constructor(private VoituerService:VoituerService,private router:Router) { }
  url!:string;
  async ngOnInit()  {
    
  }
 
 
  async add(){
    var Matricule=(<HTMLInputElement>document.getElementById("Matricule")).value
    var price = (<HTMLInputElement>document.getElementById("PRIX")).value
    var MARQUE = (<HTMLInputElement>document.getElementById("MARQUE")).value
    var MODEL = (<HTMLInputElement>document.getElementById("MODEL")).value
    var CLIMATISATION = (<HTMLInputElement>document.getElementById("CLIMATISATION")).value
    var BOITVITESSE = (<HTMLInputElement>document.getElementById("BOITVITESSE")).value
  
    var body = `{"matricule":"${Matricule}" , "nb_place":"${Number(this.NBPLACE)}" , "nb_porte":"${Number(this.NBPORTE)}" , "type_boite":"${Number(BOITVITESSE)}" ,"espace":"${Number(0)}","climatisation":"${Number(CLIMATISATION)}","prix":"${Number(price)}","marque":"${MARQUE}" , "modele":"${MODEL}","imagev":"${this.url}"}`

      
      this.VoituerService.addvoiteur(body)
      alert("succesful")
      window.location.reload()
    
    
   
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
