import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gdv',
  templateUrl: './gdv.component.html',
  styleUrls: ['./gdv.component.css']
})
export class GdvComponent implements OnInit {
  login = localStorage.getItem("isloggedIn");
  constructor() { }

  ngOnInit(): void {
  }

}
