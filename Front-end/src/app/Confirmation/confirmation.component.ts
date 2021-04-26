import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
 nom=localStorage.getItem("nom")
 pre=localStorage.getItem("prenom")
 test=localStorage.getItem("var")
 mat=localStorage.getItem("mat")
 url=sessionStorage.getItem("url")
 voit:any
  constructor(private http:HttpClient) { }

  async ngOnInit() {


}



}
