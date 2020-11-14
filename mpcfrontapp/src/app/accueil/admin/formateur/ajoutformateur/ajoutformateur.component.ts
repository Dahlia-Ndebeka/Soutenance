import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Utilisateur } from 'src/app/modeles/utilisateur';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ajoutformateur',
  templateUrl: './ajoutformateur.component.html',
  styleUrls: ['./ajoutformateur.component.scss']
})
export class AjoutformateurComponent implements OnInit {

  list:Utilisateur[];

  constructor(private serviceFormateur : UtilisateurService, 
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

    this.serviceFormateur.refreshListeFormateur().subscribe((data: Utilisateur[])=>{
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

  ajoutFormateur(obj : any){
    obj.id = 0; 
    this.serviceFormateur.postUtilisateur(obj).subscribe((data): any => {
      this.toastr.success('Formateur ajouté avec succes', 'Operation sur le formateur');
      this.serviceFormateur.refreshListeFormateur().subscribe((data: Utilisateur[])=>{
        this.list = data;
      })
      this.agentForm.reset();
    })
  }

  editerFormateur(For : Utilisateur) : void{
    this.router.navigate(['editerformateur/' + For.idCompte]);
  }

  supprimerFormateur(For : Utilisateur){
    if(confirm('Attention ce champs va être supprimé')){
      this.serviceFormateur.deleteUtilisateur(For.idCompte).subscribe( u => {
        this.serviceFormateur.refreshListeFormateur().subscribe((data: Utilisateur[])=>{
          this.list = data;
        })
      this.toastr.warning('Suppression éffectué avec succes', 'Operation sur le formateur');
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
