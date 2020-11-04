import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  token: any;

  constructor() { }

  ngOnInit(): void {
    // this.token = window.localStorage.getItem('token');
    // if (this.token == 'admin') {
    //   console.log("Bienvenue M. l'administrateur");
    // }
    
  }

}
