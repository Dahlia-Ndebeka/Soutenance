import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-editeragent',
  templateUrl: './editeragent.component.html',
  styleUrls: ['./editeragent.component.scss']
})
export class EditeragentComponent implements OnInit {

  agentForm : FormGroup;
  idCompte = new FormControl();
  codeCompte = new FormControl();
  nomUtilisateur = new FormControl();
  motDePasse = new FormControl();
  confMotDePasse = new FormControl();
  roleUtilisateur = new FormControl();

  constructor(private formBuilder : FormBuilder, private routes : ActivatedRoute, private serviceAgent : UtilisateurService, private router : Router, private toastr : ToastrService) { }

  ngOnInit(): void {

    // const codeValidation = "^[A][0-9]{4}$";
    // this.codeAg = new FormControl('', [Validators.required, Validators.pattern(codeValidation)]);
    this.idCompte = new FormControl('', [Validators.required]);
    this.codeCompte = new FormControl('', [Validators.required]);
    this.nomUtilisateur = new FormControl('', [Validators.required]);
    this.motDePasse = new FormControl('', [Validators.required]);
    this.confMotDePasse = new FormControl('', [Validators.required]);
    this.roleUtilisateur = new FormControl('', [Validators.required]);

    this.agentForm = new FormGroup({
        idCompte  : this.idCompte ,
        codeCompte : this.codeCompte,
        nomUtilisateur : this.nomUtilisateur,
        motDePasse : this.motDePasse,
        confMotDePasse : this.confMotDePasse,
        roleUtilisateur : this.roleUtilisateur
    });

    const routeParams = this.routes.snapshot.params;
    console.log(routeParams.idCompte);

    this.serviceAgent.getUtilisateur(routeParams.idCompte).subscribe((data : any) =>{
      this.agentForm.patchValue(data);
    })

  }

  modifierAgent(){ 
    this.serviceAgent.putUtilisateur(this.agentForm.value)
    .subscribe(data =>{
        this.toastr.info('Modification effectué avec succes', 'Operation sur l\'agent');
        this.agentForm.reset();
        this.router.navigate(['agent']);
    },error =>{
        alert(error);
      }
    );
  }

  annulerAgent(){
    this.agentForm.reset();
    this.router.navigate(['agent']);
  }

  ValidatecodeCompte(){
    return this.codeCompte.valid || this.codeCompte.untouched;
  }

  ValidatenomUtilisateur(){
    return this.nomUtilisateur.valid || this.nomUtilisateur.untouched;
  }

  ValidatemotDePasse(){
    return this.motDePasse.valid || this.motDePasse.untouched;
  }

  ValidateconfMotDePasse(){
    return this.confMotDePasse.valid || this.confMotDePasse.untouched;
  }
  ValidateroleUtilisateur(){
    return this.roleUtilisateur.valid || this.roleUtilisateur.untouched;
  }

}
