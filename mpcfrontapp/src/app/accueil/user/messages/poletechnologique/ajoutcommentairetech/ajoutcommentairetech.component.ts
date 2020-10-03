import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Poletechnologiquecom } from 'src/app/modeles/discussion/poletechnologiquecom';
import { PoletechnologiquecomService } from 'src/app/services/discussion/poletechnologiquecom.service';

@Component({
  selector: 'app-ajoutcommentairetech',
  templateUrl: './ajoutcommentairetech.component.html',
  styleUrls: ['./ajoutcommentairetech.component.scss']
})
export class AjoutcommentairetechComponent implements OnInit {

  list: Poletechnologiquecom[];
  data: any;

  constructor(private servicePoletechnologiquecom : PoletechnologiquecomService, private toastr : ToastrService, private formBuilder : FormBuilder) {  }

  sujetForm : FormGroup;
  idpoleTech = new FormControl();
  reponse = new FormControl();

  ngOnInit(): void {

    this.servicePoletechnologiquecom.refreshListe().subscribe((data: Poletechnologiquecom[])=>{
      this.list = data;
    })

    this.reponse = new FormControl('', [Validators.required]);

    this.sujetForm = new FormGroup({
      idpoleTech : this.idpoleTech,
      reponse : this.reponse
    });

  }

  ajoutCommentaire(obj : any){
    obj.id = 0; 
    this.servicePoletechnologiquecom.postPoletechnologiquecom(obj).subscribe((data): any => {
      this.toastr.success('Sujet ajouté avec succes');
      this.servicePoletechnologiquecom.refreshListe().subscribe((data: Poletechnologiquecom[])=>{
        this.list = data;
      })
      this.sujetForm.reset();
    })
  }

  Validatereponse(){
    return this.reponse.valid || this.reponse.untouched;
  }

}
