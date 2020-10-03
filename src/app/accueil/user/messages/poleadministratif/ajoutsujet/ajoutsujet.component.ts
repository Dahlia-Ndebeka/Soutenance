import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Poleadministratif } from 'src/app/modeles/discussion/poleadministratif';
import { ToastrService } from 'ngx-toastr';
import { PoleadministratifService } from 'src/app/services/discussion/poleadministratif.service';

@Component({
  selector: 'app-ajoutsujet',
  templateUrl: './ajoutsujet.component.html',
  styleUrls: ['./ajoutsujet.component.scss']
})
export class AjoutsujetComponent implements OnInit {

  list: Poleadministratif[];
  data: any;

  constructor(private servicePoleadministratif : PoleadministratifService, private toastr : ToastrService, private formBuilder : FormBuilder) {  }

  sujetForm : FormGroup;
  sujet = new FormControl();

  ngOnInit(): void {

    this.servicePoleadministratif.refreshListe().subscribe((data: Poleadministratif[])=>{
      this.list = data;
    })

    this.sujet = new FormControl('', [Validators.required]);

    this.sujetForm = new FormGroup({
        sujet : this.sujet
    });

  }

  ajoutSujet(obj : any){
    obj.id = 0; 
    this.servicePoleadministratif.postPoleadministratif(obj).subscribe((data): any => {
      this.toastr.success('Sujet ajouté avec succes');
      this.servicePoleadministratif.refreshListe().subscribe((data: Poleadministratif[])=>{
        this.list = data;
      })
      this.sujetForm.reset();
    })
  }

  Validatesujet(){
    return this.sujet.valid || this.sujet.untouched;
  }

}
