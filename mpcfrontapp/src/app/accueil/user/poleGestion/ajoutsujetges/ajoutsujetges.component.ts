import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Message } from 'src/app/modeles/message.model';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-ajoutsujetges',
  templateUrl: './ajoutsujetges.component.html',
  styleUrls: ['./ajoutsujetges.component.scss']
})
export class AjoutsujetgesComponent implements OnInit {

  list: Message[];

  constructor(private serviceSujet : MessageService, 
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

    this.serviceSujet.refreshListe().subscribe((data: Message[])=>{
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
    this.serviceSujet.postMessage(obj).subscribe((data): any => {
    this.toastr.success('Sujet ajouté avec succes', 'Operation sur les sujets');
      this.serviceSujet.refreshListe().subscribe((data: Message[])=>{
        this.list = data;
      })
      this.agentForm.reset();
    })
  }

  voirCom(msg : Message) : void{
    this.router.navigate(['ajoutcomad/' + msg.idSujet]);
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
