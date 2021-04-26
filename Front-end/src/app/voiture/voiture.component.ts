import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.component.html',
  styleUrls: ['./voiture.component.css']
})
export class VoitureComponent implements OnInit {

  voitu1:any;

  constructor(private http :HttpClient) { }

  async ngOnInit() {
    localStorage.clear()
    this.http.get("http://127.0.0.1:8000/affichev").subscribe(data=>{
      this.voitu1=data
      console.log(this.voitu1)
    })
  
  }
}
