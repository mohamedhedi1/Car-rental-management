import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbd',
  templateUrl: './navbd.component.html',
  styleUrls: ['./navbd.component.css']
})
export class NavbdComponent implements OnInit {
  login = localStorage.getItem("isloggedIn");
  constructor(private router: Router) { }
  ngOnInit(): void {
  }
  Disconnect(){
    console.log(this.login)
    localStorage.clear()
    this.router.navigate(["/gestion"])}
    
  }

