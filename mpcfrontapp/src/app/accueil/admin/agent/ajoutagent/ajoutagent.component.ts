import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import { Utilisateur } from 'src/app/modeles/utilisateur';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ajoutagent',
  templateUrl: './ajoutagent.component.html',
  styleUrls: ['./ajoutagent.component.scss']
})
export class AjoutagentComponent implements OnInit {

  list:Utilisateur[];

  constructor(private serviceAgent : UtilisateurService, 
    private toastr : ToastrService, 
    private formBuilder : FormBuilder,
    private route: ActivatedRoute,
    private router: Router) {  }

  data: any;

    agentForm : FormGroup;
    codeCompte = new FormControl();
    nomUtilisateur = new FormControl();
    motDePasse = new FormControl();
    confMotDePasse = new FormControl();
    roleUtilisateur = new FormControl();

  ngOnInit(): void {

    this.serviceAgent.refreshListeAgent().subscribe((data: Utilisateur[])=>{
      this.list = data;
    })

    // const codeValidation = "/^[A][0-9]{4}/";
    // this.codeCompte = new FormControl('', [Validators.required, Validators.pattern(codeValidation)]);
    this.codeCompte = new FormControl('', [Validators.required]);
    this.nomUtilisateur = new FormControl('', [Validators.required]);
    this.motDePasse = new FormControl('', [Validators.required]);
    this.confMotDePasse = new FormControl('', [Validators.required]);
    this.roleUtilisateur = new FormControl('', [Validators.required]);

    this.agentForm = new FormGroup({
        codeCompte : this.codeCompte,
        nomUtilisateur : this.nomUtilisateur,
        motDePasse : this.motDePasse,
        confMotDePasse : this.confMotDePasse,
        roleUtilisateur : this.roleUtilisateur
    });

  }

  ajoutAgent(obj : any){
    obj.id = 0; 
    this.serviceAgent.postUtilisateur(obj).subscribe((data): any => {
      this.toastr.success('Agent ajouté avec succes', 'Operation sur l\'agent');
      this.serviceAgent.refreshListeAgent().subscribe((data: Utilisateur[])=>{
        this.list = data;
      })
      this.agentForm.reset();
    })
  }

  supprimerAgent(ag : Utilisateur){
    if(confirm('Attention ce champs va être supprimé')){
      this.serviceAgent.deleteUtilisateur(ag.idCompte).subscribe( u => {
        this.serviceAgent.refreshListeAgent().subscribe((data: Utilisateur[])=>{
          this.list = data;
        })
      this.toastr.warning('Suppression éffectué avec succes', 'Operation sur l\'agent');
      });
    }
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
