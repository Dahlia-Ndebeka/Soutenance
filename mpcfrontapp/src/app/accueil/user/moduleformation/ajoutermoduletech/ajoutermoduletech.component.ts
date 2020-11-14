import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Formation } from 'src/app/modeles/formation.model';
import { ModuleFormation } from 'src/app/modeles/module-formation.model';
import { Utilisateur } from 'src/app/modeles/utilisateur';
import { FormationService } from 'src/app/services/formation.service';
import { ModuleformationService } from 'src/app/services/moduleformation.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-ajoutermoduletech',
  templateUrl: './ajoutermoduletech.component.html',
  styleUrls: ['./ajoutermoduletech.component.scss']
})
export class AjoutermoduletechComponent implements OnInit {

  
  list: ModuleFormation[];
  liste : Formation[];
  lyste : Utilisateur[];
  token: string;

  constructor(
    private toastr : ToastrService, 
    private serviceModule : ModuleformationService, 
    private serviceFormation : FormationService, 
    private serviceFormateur : UtilisateurService,
    private router : Router) { }

  data: any;

    moduleForm : FormGroup;
    codeModule = new FormControl();
    titreModule = new FormControl();
    contenuModule = new FormControl();
    dureeModule = new FormControl();
    idFormation = new FormControl();
    idCompte = new FormControl();

  ngOnInit(): void {

    // this.token = window.localStorage.getItem('token');
    // if (!this.token || this.token == 'apprenant') {
    //   this.router.navigate(['login']);

    // }
    // else if (this.token == 'formateur') {
    // }

    this.serviceModule.refreshListe().subscribe((data: ModuleFormation[])=>{
      this.list = data;
    })

    this.serviceFormation.refreshListe().subscribe((data: Formation[])=>{
      this.liste = data;
    })
  
    this.serviceFormateur.refreshListeFormateur().subscribe((data: Utilisateur[])=>{
      this.lyste = data;
    })

    // const codeValidation = "^[A][0-9]{4}$";
    // this.codeAg = new FormControl('', [Validators.required, Validators.pattern(codeValidation)]);
    this.codeModule = new FormControl('', [Validators.required]);
    this.titreModule = new FormControl('', [Validators.required]);
    this.contenuModule = new FormControl('', [Validators.required]);
    this.dureeModule = new FormControl('', [Validators.required]);
    this.idFormation = new FormControl('', [Validators.required]);
    this.idCompte = new FormControl('', [Validators.required]);

    this.moduleForm = new FormGroup({
      codeModule : this.codeModule,
      contenuModule : this.contenuModule,
      titreModule : this.titreModule,
      dureeModule : this.dureeModule,
      idFormation : this.idFormation,
      idCompte: this.idCompte
    });

  }

  ajoutModule(obj : any){
    obj.id = 0; 
    this.serviceModule.postModule(obj).subscribe((data): any => {
      this.toastr.success('Module ajouté avec succes', 'Operation sur les modules');
      this.serviceModule.refreshListe().subscribe((data: ModuleFormation[])=>{
        this.list = data;
      })
      this.moduleForm.reset();
    })
  }

  ValidatecodeModule(){
    return this.codeModule.valid || this.codeModule.untouched;
  }

  ValidatetitreModule(){
    return this.titreModule.valid || this.titreModule.untouched;
  }

  ValidatecontenuModule(){
    return this.contenuModule.valid || this.contenuModule.untouched;
  }

  ValidatedureeModule(){
    return this.dureeModule.valid || this.dureeModule.untouched;
  }

  ValidateidFormation(){
    return this.idFormation.valid || this.idFormation.untouched;
  }

  ValidateidCompte(){
    return this.idCompte.valid || this.idCompte.untouched;
  }

}
