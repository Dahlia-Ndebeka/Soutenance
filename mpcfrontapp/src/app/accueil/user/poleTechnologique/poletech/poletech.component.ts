import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-poletech',
  templateUrl: './poletech.component.html',
  styleUrls: ['./poletech.component.scss']
})
export class PoletechComponent implements OnInit {

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
