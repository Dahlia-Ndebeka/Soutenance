import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Apprenant } from 'src/app/modeles/apprenant.model';
import { ApprenantService } from 'src/app/services/apprenant.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ajoutapprenant',
  templateUrl: './ajoutapprenant.component.html',
  styleUrls: ['./ajoutapprenant.component.scss']
})
export class AjoutapprenantComponent implements OnInit {

  list: Apprenant[];

  constructor(private serviceApprenant : ApprenantService, private toastr : ToastrService, private formBuilder : FormBuilder) {  }

  data: any;
  
  //   apprenantForm = new FormGroup({
  //     idAg : new FormControl,
  //     codeAg : new FormControl,
  //     nomAp : new FormControl,
  //     motDePasseAp : new FormControl,
  //     confMotDePasseAp : new FormControl
  //   })

    apprenantForm : FormGroup;
    codeAp = new FormControl();
    nomAp = new FormControl();
    motDePasseAp = new FormControl();
    confMotDePasseAp = new FormControl();
    idAg = new FormControl();

  ngOnInit(): void {

    this.serviceApprenant.refreshListe().subscribe((data: Apprenant[])=>{
      this.list = data;
    })

    // this.apprenantForm = this.formBuilder.group({
    //     codeAg : new FormControl('', [Validators.required]),
    //     nomUtilisateur : new FormControl('', [Validators.required]),
    //     motDePasse : new FormControl('', [Validators.required]),
    //     confMotDePasse : new FormControl('', [Validators.required]),
    // });

    // const codeValidation = "^[A][0-9]{4}$";
    // this.codeAg = new FormControl('', [Validators.required, Validators.pattern(codeValidation)]);
    this.codeAp = new FormControl('', [Validators.required]);
    this.nomAp = new FormControl('', [Validators.required]);
    this.motDePasseAp = new FormControl('', [Validators.required]);
    this.confMotDePasseAp = new FormControl('', [Validators.required]);
    this.idAg = new FormControl('', [Validators.required]);

    this.apprenantForm = new FormGroup({
      codeAp : this.codeAp,
      nomAp : this.nomAp,
      motDePasseAp : this.motDePasseAp,
      confMotDePasseAp : this.confMotDePasseAp,
      idAg : this.idAg,
    });

  }

  ajoutApprenant(obj : any){
    obj.id = 0; 
    this.serviceApprenant.postApprenant(obj).subscribe((data): any => {
      this.toastr.success('Apprenant ajouté avec succes', 'Operation sur l\'apprenant');
      this.serviceApprenant.refreshListe().subscribe((data: Apprenant[])=>{
        this.list = data;
      })
      this.apprenantForm.reset();
    })
  }

  ValidatecodeAp(){
    return this.codeAp.valid || this.codeAp.untouched;
  }

  ValidatenomAp(){
    return this.nomAp.valid || this.nomAp.untouched;
  }

  ValidatemotDePasseAp(){
    return this.motDePasseAp.valid || this.motDePasseAp.untouched;
  }

  ValidateconfMotDePasseAp(){
    return this.confMotDePasseAp.valid || this.confMotDePasseAp.untouched;
  }

  ValidateidAg(){
    return this.idAg.valid || this.idAg.untouched;
  }

}
