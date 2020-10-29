import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  data: any;
  loginbtn:boolean;
  logoutbtn:boolean;

  constructor( private toastr : ToastrService, private dataService : AuthService) { 

    dataService.getLoggedInName.subscribe(name => this.changeName(name));

    if(this.dataService.isLoggedIn()){
      console.log("loggedin");
      this.loginbtn=false;
      this.logoutbtn=true
    }else{
      this.loginbtn=true;
      this.logoutbtn=false
    }

  }

  authForm : FormGroup;
  nomUtilisateur = new FormControl();
  motDePasse = new FormControl();

  ngOnInit(): void {

    this.nomUtilisateur = new FormControl('', [Validators.required]);
    this.motDePasse = new FormControl('', [Validators.required]);

    this.authForm = new FormGroup({
        nomUtilisateur : this.nomUtilisateur,
        motDePasse : this.motDePasse
    });

  }

  private changeName(name: boolean): void {
  this.logoutbtn = name;
  this.loginbtn = !name;
  }
  logout()
  {
  this.dataService.deleteToken();
  window.location.href = window.location.href;
  }

  ValidatenomUtilisateur(){
    return this.nomUtilisateur.valid || this.nomUtilisateur.untouched;
  }

  ValidatemotDePasse(){
    return this.motDePasse.valid || this.motDePasse.untouched;
  }

}
