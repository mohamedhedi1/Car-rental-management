import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardv',
  templateUrl: './cardv.component.html',
  styleUrls: ['./cardv.component.css']
})
export class CardvComponent implements OnInit {
  carname="kia"
  prix="50dt"
  myimg="../img/c1.png"
  test="C:\Users\nejib\Dropbox\My PC (LAPTOP-PT4D1F2V)\Desktop\mini projet web\c1.png"
  constructor() { }

  ngOnInit(): void {
  }

}
