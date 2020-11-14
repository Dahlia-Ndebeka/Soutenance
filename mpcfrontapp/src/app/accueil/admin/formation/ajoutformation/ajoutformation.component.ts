import { Component, OnInit } from '@angular/core';
import { Formation } from 'src/app/modeles/formation.model';
import { FormationService } from 'src/app/services/formation.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Poleformation } from 'src/app/modeles/poleformation.model';
import { PoleformationService } from 'src/app/services/poleformation.service';
import { Utilisateur } from 'src/app/modeles/utilisateur';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ajoutformation',
  templateUrl: './ajoutformation.component.html',
  styleUrls: ['./ajoutformation.component.scss']
})
export class AjoutformationComponent implements OnInit {

  
  list: Formation[];
  liste : Poleformation[];
  lyste : Utilisateur[];
  constructor(
    private serviceFormation : FormationService, 
    private toastr : ToastrService, 
    private formBuilder : FormBuilder,
    private servicePole : PoleformationService,
    private serviceUtilisateur : UtilisateurService,
    private route: ActivatedRoute,
    private router: Router) {  }

  data: any;
  
    formationForm : FormGroup
    codeFormation = new FormControl();
    libelleFormation = new FormControl();
    dureeFormation = new FormControl();
    idPolFor = new FormControl();

  ngOnInit(): void {
    this.serviceFormation.refreshListe().subscribe((data: Formation[])=>{
      this.list = data;
    })

    this.servicePole.refreshListe().subscribe((data: Poleformation[])=>{
      this.liste = data;
    })
  

    // const codeValidation = "^[A][0-9]{4}$";
    // this.codeAg = new FormControl('', [Validators.required, Validators.pattern(codeValidation)]);
    this.codeFormation = new FormControl('', [Validators.required]);
    this.libelleFormation = new FormControl('', [Validators.required]);
    this.dureeFormation = new FormControl('', [Validators.required]);
    this.idPolFor = new FormControl('', [Validators.required]);

    this.formationForm = new FormGroup({
      codeFormation : this.codeFormation,
      libelleFormation : this.libelleFormation,
      dureeFormation : this.dureeFormation,
      idPolFor : this.idPolFor
    });

  }

  ajoutFormation(obj : any){
    obj.id = 0; 
    this.serviceFormation.postFormation(obj).subscribe((data): any => {
      this.toastr.success('Formation ajouté avec succes', 'Operation sur les formations');
      this.serviceFormation.refreshListe().subscribe((data: Formation[])=>{
        this.list = data;
      })
      this.formationForm.reset();
    })
  }

  editerFormation(formation : Formation) : void{
    this.router.navigate(['editerformation/' + formation.idFormation]);
  }

  supprimerFormation(formation : Formation){
    if(confirm('Attention ce champs va être supprimé')){
      this.serviceFormation.deleteFormation(formation.idFormation).subscribe( u => {
      this.serviceFormation.refreshListe().subscribe((data: Formation[])=>{
        this.list = data;
      }) ;
      this.toastr.warning('Suppression éffectué avec succes', 'Operation sur la formation');
      });
    }
  }

  ValidatecodeFormation(){
    return this.codeFormation.valid || this.codeFormation.untouched;
  }

  ValidatelibelleFormation(){
    return this.libelleFormation.valid || this.libelleFormation.untouched;
  }

  ValidatedureeFormation(){
    return this.dureeFormation.valid || this.dureeFormation.untouched;
  }

  ValidateidPolFor(){
    return this.idPolFor.valid || this.idPolFor.untouched;
  }

}
