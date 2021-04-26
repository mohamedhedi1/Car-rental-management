import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
 
  threes:any;

  constructor(private http :HttpClient) { }

  async ngOnInit() {
    localStorage.clear()
    this.http.get("http://127.0.0.1:8000/3voiteur").subscribe(data=>{
      this.threes=data
      console.log(this.threes)
    })
  
  }

}
