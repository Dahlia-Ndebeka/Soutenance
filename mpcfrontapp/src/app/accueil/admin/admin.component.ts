import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  token: any;

  constructor(private toastr : ToastrService, 
    private router : Router) { }

  ngOnInit(): void {
    // this.token = window.localStorage.getItem('token');
    // if (this.token == 'admin') {
    //   console.log("Bienvenue M. l'administrateur");
    // }
    
  }

  deconnexion(){
    window.localStorage.removeItem('token');
    this.toastr.success('Vous etes maintenant déconnecté', 'Operation sur l\'authentification');
    this.router.navigate(['accueil']);
  }

}
