import { Component, OnInit } from '@angular/core';
import { ModuleFormation } from 'src/app/modeles/module-formation.model';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModuleformationService } from 'src/app/services/moduleformation.service';

@Component({
  selector: 'app-ajoutermoduleformation',
  templateUrl: './ajoutermoduleformation.component.html',
  styleUrls: ['./ajoutermoduleformation.component.scss']
})
export class AjoutermoduleformationComponent implements OnInit {

  list: ModuleFormation[];

  constructor(private toastr : ToastrService, private serviceModule : ModuleformationService) { }

  data: any;

    moduleForm : FormGroup;
    codeModule = new FormControl();
    titreModule = new FormControl();
    contenuModule = new FormControl();
    dureeModule = new FormControl();
    idFormation = new FormControl();
    idFor = new FormControl();

  ngOnInit(): void {

    this.serviceModule.refreshListe().subscribe((data: ModuleFormation[])=>{
      this.list = data;
    })

    // const codeValidation = "^[A][0-9]{4}$";
    // this.codeAg = new FormControl('', [Validators.required, Validators.pattern(codeValidation)]);
    this.codeModule = new FormControl('', [Validators.required]);
    this.titreModule = new FormControl('', [Validators.required]);
    this.contenuModule = new FormControl('', [Validators.required]);
    this.dureeModule = new FormControl('', [Validators.required]);
    this.idFormation = new FormControl('', [Validators.required]);
    this.idFor = new FormControl('', [Validators.required]);

    this.moduleForm = new FormGroup({
      codeModule : this.codeModule,
      contenuModule : this.contenuModule,
      titreModule : this.titreModule,
      dureeModule : this.dureeModule,
      idFormation : this.idFormation,
      idFor : this.idFor
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

  ValidateidFor(){
    return this.idFor.valid || this.idFor.untouched;
  }

}
