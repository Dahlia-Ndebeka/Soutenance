import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Commentaire } from 'src/app/modeles/commentaire';
import { Commentairead } from 'src/app/modeles/commentairead';
import { CommentaireService } from 'src/app/services/commentaire.service';
import { CommentaireadService } from 'src/app/services/commentairead.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-ajoutcomad',
  templateUrl: './ajoutcomad.component.html',
  styleUrls: ['./ajoutcomad.component.scss']
})
export class AjoutcomadComponent implements OnInit {

  list: Commentaire[];

  constructor(
    private serviceCom : CommentaireService, 
    private serviceMessage : MessageService , 
    private toastr : ToastrService, 
    private formBuilder : FormBuilder,
    private route: ActivatedRoute,
    private router: Router) {  }

  data: any;

    agentForm : FormGroup;
    idSujet = new FormControl();
    reponse = new FormControl();
    daterep  = new FormControl();
    // sujetMessage = new FormControl();

  ngOnInit(): void {

    this.serviceCom.refreshListe().subscribe((data: Commentaire[])=>{
      this.list = data;
    })


    this.idSujet = new FormControl('', [Validators.required]);
    this.reponse = new FormControl('', [Validators.required]);
    this.daterep = new FormControl('', [Validators.required]);

    this.agentForm = new FormGroup({
      idSujet : this.idSujet,
      reponse : this.reponse,
      daterep : this.daterep
    });

    // const routeParams = this.route.snapshot.params.idSujet;
    // console.log(routeParams);

    // // this.serviceMessage.getMessage(routeParams).subscribe((data : any) =>{
    // //   this.agentForm.patchValue(data.idSujet);
    // // })

    

  }

  ajoutCom(obj : any){
    obj.id = 0; 
    this.serviceCom.postCommentaire(obj).subscribe((data): any => {
    this.toastr.success('Commentaire ajouté avec succes', 'Operation sur les commentaires');
      this.serviceCom.refreshListe().subscribe((data: Commentaire[])=>{
        this.list = data;
      })
      this.agentForm.reset();
    })
  }

  deconnexion(){
    window.localStorage.removeItem('token');
    this.toastr.success('Vous etes maintenant déconnecté', 'Operation sur l\'authentification');
    this.router.navigate(['accueil']);
  }

  
  Validatereponse(){
    return this.reponse.valid || this.reponse.untouched;
  }

  Validatedaterep(){
    return this.daterep.valid || this.daterep.untouched;
  }
}
