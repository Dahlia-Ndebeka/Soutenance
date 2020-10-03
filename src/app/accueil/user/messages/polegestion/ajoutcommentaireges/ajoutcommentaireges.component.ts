import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Polegestioncom } from 'src/app/modeles/discussion/polegestioncom';
import { PolegestioncomService } from 'src/app/services/discussion/polegestioncom.service';

@Component({
  selector: 'app-ajoutcommentaireges',
  templateUrl: './ajoutcommentaireges.component.html',
  styleUrls: ['./ajoutcommentaireges.component.scss']
})
export class AjoutcommentairegesComponent implements OnInit {

  list: Polegestioncom[];
  data: any;

  constructor(private servicePolegestioncom : PolegestioncomService, private toastr : ToastrService, private formBuilder : FormBuilder) {  }

  sujetForm : FormGroup;
  idpoleGes = new FormControl();
  reponse = new FormControl();

  ngOnInit(): void {

    this.servicePolegestioncom.refreshListe().subscribe((data: Polegestioncom[])=>{
      this.list = data;
    })

    this.reponse = new FormControl('', [Validators.required]);

    this.sujetForm = new FormGroup({
      idpoleGes : this.idpoleGes,
      reponse : this.reponse
    });

  }

  ajoutCommentaire(obj : any){
    obj.id = 0; 
    this.servicePolegestioncom.postPolegestioncom(obj).subscribe((data): any => {
      this.toastr.success('Sujet ajouté avec succes');
      this.servicePolegestioncom.refreshListe().subscribe((data: Polegestioncom[])=>{
        this.list = data;
      })
      this.sujetForm.reset();
    })
  }

  Validatereponse(){
    return this.reponse.valid || this.reponse.untouched;
  }

}
