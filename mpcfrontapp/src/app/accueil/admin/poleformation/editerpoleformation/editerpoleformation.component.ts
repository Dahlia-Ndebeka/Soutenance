import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { PoleformationService } from 'src/app/services/poleformation.service';
import { ToastrService } from 'ngx-toastr';
import { Poleformation } from 'src/app/modeles/poleformation.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editerpoleformation',
  templateUrl: './editerpoleformation.component.html',
  styleUrls: ['./editerpoleformation.component.scss']
})
export class EditerpoleformationComponent implements OnInit {

  list: Poleformation[];

  constructor(private servicePole : PoleformationService, private toastr : ToastrService, private formBuilder : FormBuilder, private routes : ActivatedRoute, private router : Router) {  }

  data: any;

    poleForm : FormGroup
    idPolFor = new FormControl();
    codePolFor = new FormControl();
    libellePolFor = new FormControl();
    idCompte = new FormControl();

  ngOnInit(): void {

    this.servicePole.refreshListe().subscribe((data: Poleformation[])=>{
      this.list = data;
    });
  

    // const codeValidation = "^[P][0-9]{4}$";
    // this.codeAg = new FormControl('', [Validators.required, Validators.pattern(codeValidation)]);
    this.codePolFor = new FormControl('', [Validators.required]);
    this.libellePolFor = new FormControl('', [Validators.required]);

    this.poleForm = new FormGroup({
      idPolFor : this.idPolFor,
      codePolFor : this.codePolFor,
      libellePolFor : this.libellePolFor,
      idCompte : this.idCompte
    });

    const routeParams = this.routes.snapshot.params;
    console.log(routeParams.idPolFor);

    this.servicePole.getPole(routeParams.idPolFor).subscribe((data : any) =>{
      this.poleForm.patchValue(data);
    })

  }

  modifierPole(){ 
    this.servicePole.putPole(this.poleForm.value)
    .subscribe(data =>{
        this.toastr.info('Modification effectué avec succes', 'Operation sur les pôles de formation');
        this.poleForm.reset();
        this.servicePole.refreshListe().subscribe((data: Poleformation[])=>{
          this.list = data;
        })
        this.router.navigate(['poleformation']);
    },error =>{
        alert(error);
      }
    );
  }

  annulerPole(){
    this.poleForm.reset();
    this.router.navigate(['poleformation']);
  }

  ValidatecodePolFor(){
    return this.codePolFor.valid || this.codePolFor.untouched;
  }

  ValidatelibellePolFor(){
    return this.libellePolFor.valid || this.libellePolFor.untouched;
  }
  ValidateidCompte(){
    return this.idCompte.valid || this.idCompte.untouched;
  }

}
