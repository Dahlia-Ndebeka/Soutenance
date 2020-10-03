import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor( private toastr : ToastrService) {  }

  data: any;

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

  auth(obj : any){
    // obj.id = 0; 
    // this.serviceAgent.postAgent(obj).subscribe((data): any => {
    //   this.toastr.success('Agent ajouté avec succes', 'Operation sur l\'agent');
    // })
  }

  ValidatenomUtilisateur(){
    return this.nomUtilisateur.valid || this.nomUtilisateur.untouched;
  }

  ValidatemotDePasse(){
    return this.motDePasse.valid || this.motDePasse.untouched;
  }

}
