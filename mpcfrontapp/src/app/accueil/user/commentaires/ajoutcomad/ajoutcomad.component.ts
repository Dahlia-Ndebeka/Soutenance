import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Commentairead } from 'src/app/modeles/commentairead';
import { CommentaireadService } from 'src/app/services/commentairead.service';

@Component({
  selector: 'app-ajoutcomad',
  templateUrl: './ajoutcomad.component.html',
  styleUrls: ['./ajoutcomad.component.scss']
})
export class AjoutcomadComponent implements OnInit {

  list: Commentairead[];

  constructor(
    private serviceCom : CommentaireadService, 
    private toastr : ToastrService, 
    private formBuilder : FormBuilder,
    private route: ActivatedRoute,
    private router: Router) {  }

  data: any;
  
  //   agentForm = new FormGroup({
  //     sujetMessage : new FormControl,
  //     dateMessage : new FormControl,
  //     PolFor : new FormControl
  //   })

    agentForm : FormGroup;
    sujetMessage = new FormControl();
    dateMessage  = new FormControl();
    polFor = new FormControl();

  ngOnInit(): void {

    this.serviceCom.refreshListe().subscribe((data: Commentairead[])=>{
      this.list = data;
    })

    this.sujetMessage = new FormControl('', [Validators.required]);
    this.dateMessage = new FormControl('', [Validators.required]);
    this.polFor = new FormControl('', [Validators.required]);

    this.agentForm = new FormGroup({
        sujetMessage : this.sujetMessage,
        dateMessage : this.dateMessage,
        polFor : this.polFor
    });

  }

  ajoutSujet(obj : any){
    obj.id = 0; 
    this.serviceCom.postCommentairead(obj).subscribe((data): any => {
      this.toastr.success('Commentaire ajouté avec succes', 'Operation sur les commentaires');
      this.serviceCom.refreshListe().subscribe((data: Commentairead[])=>{
        this.list = data;
      })
      this.agentForm.reset();
    })
  }

  voirCom(com : Commentairead) : void{
    this.router.navigate(['voircommentaire/' + com.idCom]);
  }

  ValidatesujetMessage(){
    return this.sujetMessage.valid || this.sujetMessage.untouched;
  }

  ValidatedateMessage(){
    return this.dateMessage.valid || this.dateMessage.untouched;
  }

  ValidatepolFor(){
    return this.polFor.valid || this.polFor.untouched;
  }

}
