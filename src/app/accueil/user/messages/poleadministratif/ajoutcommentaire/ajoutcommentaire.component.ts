import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PoleadministratifcomService } from 'src/app/services/discussion/poleadministratifcom.service';
import { Poleadministratifcom } from 'src/app/modeles/discussion/poleadministratifcom';

@Component({
  selector: 'app-ajoutcommentaire',
  templateUrl: './ajoutcommentaire.component.html',
  styleUrls: ['./ajoutcommentaire.component.scss']
})
export class AjoutcommentaireComponent implements OnInit {

  list: Poleadministratifcom[];
  data: any;

  constructor(private servicePoleadministratif : PoleadministratifcomService, private toastr : ToastrService, private formBuilder : FormBuilder) {  }

  sujetForm : FormGroup;
  idpoleAd = new FormControl();
  reponse = new FormControl();

  ngOnInit(): void {

    this.servicePoleadministratif.refreshListe().subscribe((data: Poleadministratifcom[])=>{
      this.list = data;
    })

    this.reponse = new FormControl('', [Validators.required]);

    this.sujetForm = new FormGroup({
      idpoleAd : this.idpoleAd,
      reponse : this.reponse
    });

  }

  ajoutCommentaire(obj : any){
    obj.id = 0; 
    this.servicePoleadministratif.postPoleadministratifcom(obj).subscribe((data): any => {
      this.toastr.success('Sujet ajouté avec succes');
      this.servicePoleadministratif.refreshListe().subscribe((data: Poleadministratifcom[])=>{
        this.list = data;
      })
      this.sujetForm.reset();
    })
  }

  Validatereponse(){
    return this.reponse.valid || this.reponse.untouched;
  }

}
