import { Component, OnInit } from '@angular/core';
import { Formateur } from 'src/app/modeles/formateur.model';
import { FormateurService } from 'src/app/services/formateur.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-ajoutformateur',
  templateUrl: './ajoutformateur.component.html',
  styleUrls: ['./ajoutformateur.component.scss']
})
export class AjoutformateurComponent implements OnInit {

  list: Formateur[];

  constructor(private serviceFormateur : FormateurService, private toastr : ToastrService, private formBuilder : FormBuilder) {  }

  data: any;
  
  //   formateurForm = new FormGroup({
  //     codeFor : new FormControl,
  //     nomFor : new FormControl,
  //     motDePasseFor : new FormControl,
  //     confMotDePasseFor : new FormControl,
  //     idAg : new FormControl,
  //   })

    formateurForm : FormGroup;
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
    this.codeFor = new FormControl('', [Validators.required]);
    this.nomFor = new FormControl('', [Validators.required]);
    this.motDePasseFor = new FormControl('', [Validators.required]);
    this.confMotDePasseFor = new FormControl('', [Validators.required]);
    this.idAg = new FormControl('', [Validators.required]);

    this.formateurForm = new FormGroup({
      codeFor : this.codeFor,
      nomFor : this.nomFor,
      motDePasseFor : this.motDePasseFor,
      confMotDePasseFor : this.confMotDePasseFor,
      idAg : this.idAg,
    });

  }

  ajoutFormateur(obj : any){
    obj.id = 0; 
    this.serviceFormateur.postFormateur(obj).subscribe((data): any => {
      this.toastr.success('Formateur ajouté avec succes', 'Operation sur le formateur');
      this.serviceFormateur.refreshListe().subscribe((data: Formateur[])=>{
        this.list = data;
      })
      this.formateurForm.reset();
    })
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
