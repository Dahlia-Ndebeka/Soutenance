import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { ModuleFormation } from 'src/app/modeles/module-formation.model';
import { ModuleformationService } from 'src/app/services/moduleformation.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editermoduleformation',
  templateUrl: './editermoduleformation.component.html',
  styleUrls: ['./editermoduleformation.component.scss']
})
export class EditermoduleformationComponent implements OnInit {

  list: ModuleFormation[];
  data: any;

  moduleForm : FormGroup;
  idModule = new FormControl();
  codeModule = new FormControl();
  titreModule = new FormControl();
  contenuModule = new FormControl();
  dureeModule = new FormControl();
  idFormation = new FormControl();
  idFor = new FormControl();

  constructor(private toastr : ToastrService, private serviceModule : ModuleformationService, private routes : ActivatedRoute, private router : Router) { }
  
  ngOnInit(): void {

    this.serviceModule.refreshListe().subscribe((data: ModuleFormation[])=>{
      this.list = data;
    })

    // const codeValidation = "^[A][0-9]{4}$";
    // this.codeAg = new FormControl('', [Validators.required, Validators.pattern(codeValidation)]);
    this.idModule = new FormControl('', [Validators.required]);
    this.codeModule = new FormControl('', [Validators.required]);
    this.titreModule = new FormControl('', [Validators.required]);
    this.contenuModule = new FormControl('', [Validators.required]);
    this.dureeModule = new FormControl('', [Validators.required]);
    this.idFormation = new FormControl('', [Validators.required]);
    this.idFor = new FormControl('', [Validators.required]);

    this.moduleForm = new FormGroup({
      idModule : this.idModule,
      codeModule : this.codeModule,
      contenuModule : this.contenuModule,
      titreModule : this.titreModule,
      dureeModule : this.dureeModule,
      idFormation : this.idFormation,
      idFor : this.idFor
    });

    const routeParams = this.routes.snapshot.params;
    console.log(routeParams.idModule);

    this.serviceModule.getModule(routeParams.idModule).subscribe((data : any) =>{
      this.moduleForm.patchValue(data);
    })

  }

  modifierModule(){ 
    this.serviceModule.putModule(this.moduleForm.value)
    .subscribe(data =>{
        this.toastr.info('Module modifié avec succes', 'Operation sur les modules');
        this.moduleForm.reset();
        this.router.navigate(['moduleformation']);
    },error =>{
        alert(error);
      }
    );
  }

  annulerModule(){
    this.moduleForm.reset();
    this.router.navigate(['moduleformation']);
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

  ValidateidFor(){
    return this.idFor.valid || this.idFor.untouched;
  }

}
