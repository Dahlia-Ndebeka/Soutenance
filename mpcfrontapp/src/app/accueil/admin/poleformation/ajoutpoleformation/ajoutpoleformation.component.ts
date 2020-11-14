import { Component, OnInit } from '@angular/core';
import { Poleformation } from 'src/app/modeles/poleformation.model';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { PoleformationService } from 'src/app/services/poleformation.service';
import { ToastrService } from 'ngx-toastr';
import { Utilisateur } from 'src/app/modeles/utilisateur';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ajoutpoleformation',
  templateUrl: './ajoutpoleformation.component.html',
  styleUrls: ['./ajoutpoleformation.component.scss']
})
export class AjoutpoleformationComponent implements OnInit {

  list: Poleformation[];
  lyste : Utilisateur[];
  
    constructor(private servicePole : PoleformationService, 
      private toastr : ToastrService, 
      private formBuilder : FormBuilder, 
      private serviceAgent : UtilisateurService,
      private route: ActivatedRoute,
      private router: Router ) {  }

  data: any;

    // poleForm = new FormGroup({
    //   codePolFor : new FormControl(),
    //   libellePolFor : new FormControl()
    // });
    poleForm : FormGroup
    codePolFor = new FormControl();
    libellePolFor = new FormControl();
    idCompte = new FormControl();

  ngOnInit(): void {

    this.servicePole.refreshListe().subscribe((data: Poleformation[])=>{
      this.list = data;
    })

    this.serviceAgent.refreshListeAgent().subscribe((data:Utilisateur[])=>{
      this.lyste = data;
    })

    // const codeValidation = "^[A][0-9]{4}$";
    // this.codeAg = new FormControl('', [Validators.required, Validators.pattern(codeValidation)]);
    this.codePolFor = new FormControl('', [Validators.required]);
    this.libellePolFor = new FormControl('', [Validators.required]);

    this.poleForm = new FormGroup({
        codePolFor : this.codePolFor,
        libellePolFor : this.libellePolFor,
        idCompte : this.idCompte
    });

  }

  ajoutPole(obj : any){
    obj.id = 0; 
    this.servicePole.postPole(obj).subscribe((data): any => {
      this.toastr.success('Pole ajoutée avec succes', 'Operation sur les pôles de formation');
      this.servicePole.refreshListe().subscribe((data: Poleformation[])=>{
        this.list = data;
      })
      this.poleForm.reset();
    })
  }

  editerPole(pole : Poleformation) : void{
    this.router.navigate(['editerpoleformation/' + pole.idPolFor]);
  }

  supprimerPole(pole : Poleformation){
    if(confirm('Attention ce champs va être supprimé')){
      this.servicePole.deletePole(pole.idPolFor).subscribe( u => {
        this.servicePole.refreshListe().subscribe((data: Poleformation[])=>{
          this.list = data;
        })
      this.toastr.warning('Suppression éffectué avec succes', 'Operation sur les pôles de formation');
      });
    }
  }

  ValidatecodePolFor(){
    return this.codePolFor.valid || this.codePolFor.untouched;
  }

  ValidatelibellePolFor(){
    return this.libellePolFor.valid || this.libellePolFor.untouched;
  }
  ValidateidCompte(){
    return this.idCompte.valid || this.idCompte.untouched;
  }

}
