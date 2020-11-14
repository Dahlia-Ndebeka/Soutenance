import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-poleadmin',
  templateUrl: './poleadmin.component.html',
  styleUrls: ['./poleadmin.component.scss']
})
export class PoleadminComponent implements OnInit {

  constructor(private toastr : ToastrService,
    private router : Router) { }

  ngOnInit(): void {
  }

  deconnexion(){
    window.localStorage.removeItem('token');
    this.toastr.success('Vous etes maintenant déconnecté', 'Operation sur l\'authentification');
    this.router.navigate(['accueil']);
  }
  
}
