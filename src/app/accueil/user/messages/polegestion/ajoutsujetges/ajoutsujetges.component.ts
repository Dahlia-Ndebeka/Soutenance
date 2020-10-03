import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Polegestionsujet } from 'src/app/modeles/discussion/polegestionsujet';
import { PolegestionsujetService } from 'src/app/services/discussion/polegestionsujet.service';

@Component({
  selector: 'app-ajoutsujetges',
  templateUrl: './ajoutsujetges.component.html',
  styleUrls: ['./ajoutsujetges.component.scss']
})
export class AjoutsujetgesComponent implements OnInit {

  list: Polegestionsujet[];
  data: any;

  constructor(private servicePolegestionsujet : PolegestionsujetService, private toastr : ToastrService, private formBuilder : FormBuilder) {  }

  sujetForm : FormGroup;
  sujet = new FormControl();

  ngOnInit(): void {

    this.servicePolegestionsujet.refreshListe().subscribe((data: Polegestionsujet[])=>{
      this.list = data;
    })

    this.sujet = new FormControl('', [Validators.required]);

    this.sujetForm = new FormGroup({
        sujet : this.sujet
    });

  }

  ajoutSujet(obj : any){
    obj.id = 0; 
    this.servicePolegestionsujet.postPolegestionsujet(obj).subscribe((data): any => {
      this.toastr.success('Sujet ajouté avec succes');
      this.servicePolegestionsujet.refreshListe().subscribe((data: Polegestionsujet[])=>{
        this.list = data;
      })
      this.sujetForm.reset();
    })
  }

  Validatesujet(){
    return this.sujet.valid || this.sujet.untouched;
  }

}
