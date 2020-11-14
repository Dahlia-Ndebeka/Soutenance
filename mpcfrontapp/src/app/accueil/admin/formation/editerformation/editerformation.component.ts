import { Component, OnInit } from '@angular/core';
import { Formation } from 'src/app/modeles/formation.model';
import { FormationService } from 'src/app/services/formation.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import { Utilisateur } from 'src/app/modeles/utilisateur';

@Component({
  selector: 'app-editerformation',
  templateUrl: './editerformation.component.html',
  styleUrls: ['./editerformation.component.scss']
})
export class EditerformationComponent implements OnInit {

  list: Formation[];
  lyste : Utilisateur[];

  constructor(private serviceFormation : FormationService, private toastr : ToastrService, private formBuilder : FormBuilder,
     private routes : ActivatedRoute, private router : Router, private serviceUtilisateur : UtilisateurService) {  }

  data: any;
  
    formationForm : FormGroup
    idFormation = new FormControl();
    codeFormation = new FormControl();
    libelleFormation = new FormControl();
    dureeFormation = new FormControl();
    idPolFor = new FormControl();

  ngOnInit(): void {

    this.serviceFormation.refreshListe().subscribe((data: Formation[])=>{
        this.list = data;
    }) ;
  
    this.serviceUtilisateur.refreshListeAgent().subscribe((data:Utilisateur[])=>{
      this.lyste = data;
    })

    // const codeValidation = "^[A][0-9]{4}$";
    // this.codeAg = new FormControl('', [Validators.required, Validators.pattern(codeValidation)]);
    
    this.idFormation = new FormControl('', [Validators.required]);
    this.codeFormation = new FormControl('', [Validators.required]);
    this.libelleFormation = new FormControl('', [Validators.required]);
    this.dureeFormation = new FormControl('', [Validators.required]);
    this.idPolFor = new FormControl('', [Validators.required]);

    this.formationForm = new FormGroup({
      idFormation : this.idFormation,
      codeFormation : this.codeFormation,
      libelleFormation : this.libelleFormation,
      dureeFormation : this.dureeFormation,
      idPolFor : this.idPolFor
    });

    const routeParams = this.routes.snapshot.params;
    console.log(routeParams.idFormation);

    this.serviceFormation.getFormation(routeParams.idFormation).subscribe((data : any) =>{
        this.formationForm.patchValue(data);
      })

  }

  modifierFormation(){ 
    this.serviceFormation.putFormation(this.formationForm.value)
    .subscribe(data =>{
        this.toastr.info('Formation modifier avec succes', 'Operation sur la formation');
        this.formationForm.reset();
        this.serviceFormation.refreshListe().subscribe((data: Formation[])=>{
            this.list = data;
        });
        this.router.navigate(['formation']);
    },error =>{
        alert(error);
      }
    );
  }

  annulerFormation(){
    this.formationForm.reset();
    this.router.navigate(['poleformation']);
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
