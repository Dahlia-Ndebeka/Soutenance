import { Component, OnInit } from '@angular/core';
import { Poleformation } from 'src/app/modeles/poleformation.model';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { PoleformationService } from 'src/app/services/poleformation.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ajoutpoleformation',
  templateUrl: './ajoutpoleformation.component.html',
  styleUrls: ['./ajoutpoleformation.component.scss']
})
export class AjoutpoleformationComponent implements OnInit {

  list: Poleformation[];

  constructor(private servicePole : PoleformationService, private toastr : ToastrService, private formBuilder : FormBuilder) {  }

  data: any;

    // poleForm = new FormGroup({
    //   codePolFor : new FormControl(),
    //   libellePolFor : new FormControl()
    // });
    poleForm : FormGroup
    codePolFor = new FormControl();
    libellePolFor = new FormControl();
    idAg = new FormControl();

  ngOnInit(): void {

    this.servicePole.refreshListe().subscribe((data: Poleformation[])=>{
      this.list = data;
    })
  

    // const codeValidation = "^[A][0-9]{4}$";
    // this.codeAg = new FormControl('', [Validators.required, Validators.pattern(codeValidation)]);
    this.codePolFor = new FormControl('', [Validators.required]);
    this.libellePolFor = new FormControl('', [Validators.required]);

    this.poleForm = new FormGroup({
        codePolFor : this.codePolFor,
        libellePolFor : this.libellePolFor,
        idAg : this.idAg
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

  ValidatecodePolFor(){
    return this.codePolFor.valid || this.codePolFor.untouched;
  }

  ValidatelibellePolFor(){
    return this.libellePolFor.valid || this.libellePolFor.untouched;
  }
  ValidateidAg(){
    return this.idAg.valid || this.idAg.untouched;
  }

}
