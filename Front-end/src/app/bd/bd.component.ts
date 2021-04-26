import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bd',
  templateUrl: './bd.component.html',
  styleUrls: ['./bd.component.css']
})
export class BdComponent implements OnInit {
  login = localStorage.getItem("isloggedIn");
  constructor() { }

  ngOnInit(): void {
  }

}
