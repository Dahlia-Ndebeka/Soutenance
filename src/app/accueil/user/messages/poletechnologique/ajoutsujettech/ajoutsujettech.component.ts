import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Poletechnologiquesujet } from 'src/app/modeles/discussion/poletechnologiquesujet';
import { PoletechnologiquesujetService } from 'src/app/services/discussion/poletechnologiquesujet.service';

@Component({
  selector: 'app-ajoutsujettech',
  templateUrl: './ajoutsujettech.component.html',
  styleUrls: ['./ajoutsujettech.component.scss']
})
export class AjoutsujettechComponent implements OnInit {

  list: Poletechnologiquesujet[];
  data: any;

  constructor(private servicePoletechnologiquesujet : PoletechnologiquesujetService, private toastr : ToastrService, private formBuilder : FormBuilder) {  }

  sujetForm : FormGroup;
  sujet = new FormControl();

  ngOnInit(): void {

    this.servicePoletechnologiquesujet.refreshListe().subscribe((data: Poletechnologiquesujet[])=>{
      this.list = data;
    })

    this.sujet = new FormControl('', [Validators.required]);

    this.sujetForm = new FormGroup({
        sujet : this.sujet
    });

  }

  ajoutSujet(obj : any){
    obj.id = 0; 
    this.servicePoletechnologiquesujet.postPoletechnologiquesujet(obj).subscribe((data): any => {
      this.toastr.success('Sujet ajouté avec succes');
      this.servicePoletechnologiquesujet.refreshListe().subscribe((data: Poletechnologiquesujet[])=>{
        this.list = data;
      })
      this.sujetForm.reset();
    })
  }

  Validatesujet(){
    return this.sujet.valid || this.sujet.untouched;
  }

}
