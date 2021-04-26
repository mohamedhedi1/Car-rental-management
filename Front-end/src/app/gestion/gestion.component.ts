import { HttpClient } from '@angular/common/http';
import { GestionService } from './../services/gestion.service';
import {Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {user} from '../model/user.model'


@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css']
})
export class GestionComponent implements OnInit {
  
  userlog = new user()
  dbuser:any;
  logged =false
  constructor( private router: Router,private GestionService:GestionService){}
  
  ngOnInit():void{
     localStorage.clear()
     this.GestionService.getlogin().subscribe(data=>{
       this.dbuser=data;
       console.log(this.dbuser)
      })
  }
  
  connection() {
    for (let i = 0; i < this.dbuser.length; i++) {
   
    
    if (this.userlog.username == this.dbuser[i].username && this.userlog.password == this.dbuser[i].password){
      console.log("succecfull")
      this.logged=true
      localStorage.setItem('isloggedIn',String(this.logged))
      this.router.navigate(["/bd"])}
    else{
      localStorage.setItem('isloggedIn',String(this.logged))
      alert("Verifier Votre login  ")
    }
  }
  }

  
 
 
}