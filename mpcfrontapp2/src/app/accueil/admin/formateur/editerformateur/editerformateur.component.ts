import { Component, OnInit } from '@angular/core';
import { Formateur } from 'src/app/modeles/formateur.model';
import { FormateurService } from 'src/app/services/formateur.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editerformateur',
  templateUrl: './editerformateur.component.html',
  styleUrls: ['./editerformateur.component.scss']
})
export class EditerformateurComponent implements OnInit {

  list: Formateur[];

  constructor(private serviceFormateur : FormateurService, private toastr : ToastrService, private formBuilder : FormBuilder,
    private routes : ActivatedRoute, private router : Router) {  }

  data: any;
  
  //   formateurForm = new FormGroup({
  //     codeFor : new FormControl,
  //     nomFor : new FormControl,
  //     motDePasseFor : new FormControl,
  //     confMotDePasseFor : new FormControl,
  //     idAg : new FormControl,
  //   })

    formateurForm : FormGroup;
    idFor = new FormControl();
    codeFor = new FormControl();
    nomFor = new FormControl();
    motDePasseFor = new FormControl();
    confMotDePasseFor = new FormControl();
    idAg = new FormControl();

  ngOnInit(): void {

    this.serviceFormateur.refreshListe().subscribe((data: Formateur[])=>{
      this.list = data;
    })

    // this.formateurForm = this.formBuilder.group({
    //     codeFor : new FormControl('', [Validators.required]),
    //     nomFor : new FormControl('', [Validators.required]),
    //     motDePasseFor : new FormControl('', [Validators.required]),
    //     confMotDePasseFor : new FormControl('', [Validators.required]),
    //     idAg : new FormControl('', [Validators.required]),
    // });

    // const codeValidation = "^[A][0-9]{4}$";
    // this.codeAg = new FormControl('', [Validators.required, Validators.pattern(codeValidation)]);
    this.idFor = new FormControl('', [Validators.required]);
    this.codeFor = new FormControl('', [Validators.required]);
    this.nomFor = new FormControl('', [Validators.required]);
    this.motDePasseFor = new FormControl('', [Validators.required]);
    this.confMotDePasseFor = new FormControl('', [Validators.required]);
    this.idAg = new FormControl('', [Validators.required]);

    this.formateurForm = new FormGroup({
      idFor : this.idFor,
      codeFor : this.codeFor,
      nomFor : this.nomFor,
      motDePasseFor : this.motDePasseFor,
      confMotDePasseFor : this.confMotDePasseFor,
      idAg : this.idAg,
    });

    const routeParams = this.routes.snapshot.params;
    console.log(routeParams.idFor);

    this.serviceFormateur.getFormateur(routeParams.idFor).subscribe((data : any) =>{
      this.formateurForm.patchValue(data);
    })

  }

  modifierFormateur(){ 
    this.serviceFormateur.putFormateur(this.formateurForm.value)
    .subscribe(data =>{
      this.toastr.success('Formateur modifier avec succes', 'Operation sur le formateur');
        this.formateurForm.reset();
        this.router.navigate(['formateur']);
    },error =>{
        alert(error);
      }
    );
  }

  annulerFormateur(){
    this.formateurForm.reset();
    this.router.navigate(['formateur']);
  }

  ValidatecodeFor(){
    return this.codeFor.valid || this.codeFor.untouched;
  }

  ValidatenomFor(){
    return this.nomFor.valid || this.nomFor.untouched;
  }

  ValidatemotDePasseFor(){
    return this.motDePasseFor.valid || this.motDePasseFor.untouched;
  }

  ValidateconfMotDePasseFor(){
    return this.confMotDePasseFor.valid || this.confMotDePasseFor.untouched;
  }

  ValidateidAg(){
    return this.idAg.valid || this.idAg.untouched;
  }

}
