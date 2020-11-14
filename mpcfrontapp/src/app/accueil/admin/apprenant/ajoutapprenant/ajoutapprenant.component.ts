import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Utilisateur } from 'src/app/modeles/utilisateur';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-ajoutapprenant',
  templateUrl: './ajoutapprenant.component.html',
  styleUrls: ['./ajoutapprenant.component.scss']
})
export class AjoutapprenantComponent implements OnInit {

  list:Utilisateur[];

  constructor(private serviceApprenant : UtilisateurService, 
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

    this.serviceApprenant.refreshListeApprenant().subscribe((data: Utilisateur[])=>{
      this.list = data;
    })

    // const codeValidation = "^[A][0-9]{4}$";
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

  ajoutApprenant(obj : any){
    obj.id = 0; 
    this.serviceApprenant.postUtilisateur(obj).subscribe((data): any => {
      this.toastr.success('Agent ajouté avec succes', 'Operation sur l\'agent');
      this.serviceApprenant.refreshListeApprenant().subscribe((data: Utilisateur[])=>{
        this.list = data;
      })
      this.agentForm.reset();
    })
  }

  editerApprenant(ap : Utilisateur) : void{
    this.router.navigate(['editerapprenant/' + ap.idCompte]);
  }

  supprimerApprenant(ap : Utilisateur){
    if(confirm('Attention ce champs va être supprimé')){
      this.serviceApprenant.deleteUtilisateur(ap.idCompte).subscribe( u => {
        this.serviceApprenant.refreshListeApprenant().subscribe((data: Utilisateur[])=>{
          this.list = data;
        })
      this.toastr.warning('Suppression éffectué avec succes', 'Operation sur l\'apprenant');
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
