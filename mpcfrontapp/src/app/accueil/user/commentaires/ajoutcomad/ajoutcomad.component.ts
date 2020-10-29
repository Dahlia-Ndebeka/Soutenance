import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Commentairead } from 'src/app/modeles/commentairead';
import { CommentaireadService } from 'src/app/services/commentairead.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-ajoutcomad',
  templateUrl: './ajoutcomad.component.html',
  styleUrls: ['./ajoutcomad.component.scss']
})
export class AjoutcomadComponent implements OnInit {

  list: Commentairead[];

  constructor(
    private serviceCom : CommentaireadService, 
    private serviceMessage : MessageService , 
    private toastr : ToastrService, 
    private formBuilder : FormBuilder,
    private route: ActivatedRoute,
    private router: Router) {  }

  data: any;

    agentForm : FormGroup;
    idMessage = new FormControl();
    reponse = new FormControl();
    dateRep  = new FormControl();
    // sujetMessage = new FormControl();

  ngOnInit(): void {

    this.idMessage = new FormControl('', [Validators.required]);
    this.reponse = new FormControl('', [Validators.required]);
    this.dateRep = new FormControl('', [Validators.required]);

    this.agentForm = new FormGroup({
      idMessage : this.idMessage,
      reponse : this.reponse,
      dateRep : this.dateRep
    });

    const routeParams = this.route.snapshot.params;
    console.log(routeParams.idMessage);

    this.serviceMessage.getMessage(routeParams.idMessage).subscribe((data : any) =>{
      this.agentForm.patchValue(data);
    })

    this.serviceCom.refreshListe().subscribe((data: Commentairead[])=>{
      this.list = data;
    })

  }

  ajoutCom(obj : any){
    obj.id = 0; 
    this.serviceCom.postCommentairecomAd(obj).subscribe((data): any => {
      this.toastr.success('Commentaire ajouté avec succes', 'Operation sur les commentaires');
      this.serviceCom.refreshListe().subscribe((data: Commentairead[])=>{
        this.list = data;
      })
      this.agentForm.reset();
    })
  }

  Validatereponse(){
    return this.reponse.valid || this.reponse.untouched;
  }

  ValidatedateRep(){
    return this.dateRep.valid || this.dateRep.untouched;
  }
}
