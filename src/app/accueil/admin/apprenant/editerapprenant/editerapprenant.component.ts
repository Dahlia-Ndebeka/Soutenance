import { Component, OnInit } from '@angular/core';
import { Apprenant } from 'src/app/modeles/apprenant.model';
import { ApprenantService } from 'src/app/services/apprenant.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editerapprenant',
  templateUrl: './editerapprenant.component.html',
  styleUrls: ['./editerapprenant.component.scss']
})
export class EditerapprenantComponent implements OnInit {

  list: Apprenant[];

  constructor(private serviceApprenant : ApprenantService, private toastr : ToastrService, private formBuilder : FormBuilder, 
    private routes : ActivatedRoute, private router : Router) {  }

  data: any;
  
  //   apprenantForm = new FormGroup({
  //     idAg : new FormControl,
  //     codeAg : new FormControl,
  //     nomAp : new FormControl,
  //     motDePasseAp : new FormControl,
  //     confMotDePasseAp : new FormControl
  //   })

    apprenantForm : FormGroup;
    idAp = new FormControl();
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
    this.idAp = new FormControl('', [Validators.required]);
    this.codeAp = new FormControl('', [Validators.required]);
    this.nomAp = new FormControl('', [Validators.required]);
    this.motDePasseAp = new FormControl('', [Validators.required]);
    this.confMotDePasseAp = new FormControl('', [Validators.required]);
    this.idAg = new FormControl('', [Validators.required]);

    this.apprenantForm = new FormGroup({
      idAp : this.idAp,
      codeAp : this.codeAp,
      nomAp : this.nomAp,
      motDePasseAp : this.motDePasseAp,
      confMotDePasseAp : this.confMotDePasseAp,
      idAg : this.idAg,
    });

    const routeParams = this.routes.snapshot.params;
    console.log(routeParams.idAp);

    this.serviceApprenant.getApprenant(routeParams.idAp).subscribe((data : any) =>{
      this.apprenantForm.patchValue(data);
    })

  }

  modifierApprenant(){ 
    this.serviceApprenant.putApprenant(this.apprenantForm.value)
    .subscribe(data =>{
      this.toastr.success('Apprenant modifier avec succes', 'Operation sur l\'apprenant');
        this.apprenantForm.reset();
        this.router.navigate(['apprenant']);
    },error =>{
        alert(error);
      }
    );
  }

  annulerApprenant(){
    this.apprenantForm.reset();
    this.router.navigate(['apprenant']);
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
