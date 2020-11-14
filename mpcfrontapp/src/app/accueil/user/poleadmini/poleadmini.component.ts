import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Formation } from 'src/app/modeles/formation.model';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-poleadmini',
  templateUrl: './poleadmini.component.html',
  styleUrls: ['./poleadmini.component.scss']
})
export class PoleadminiComponent implements OnInit {

  liste : Formation[];

  constructor(
    private serviceFormation : FormationService,
    private toastr : ToastrService,
    private router : Router ) { }

  ngOnInit(): void {
    this.serviceFormation.refreshListeAd().subscribe((data: Formation[])=>{
      this.liste = data;
    })
  }

  deconnexion(){
    window.localStorage.removeItem('token');
    this.toastr.success('Vous etes maintenant déconnecté', 'Operation sur l\'authentification');
    this.router.navigate(['accueil']);
  }

}
