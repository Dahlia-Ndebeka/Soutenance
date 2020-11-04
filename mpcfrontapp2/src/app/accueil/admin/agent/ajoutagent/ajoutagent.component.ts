import { Component, OnInit } from '@angular/core';
import { AgentService } from 'src/app/services/agent.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Agent } from 'src/app/modeles/agent.model';
import { MustMatch } from 'src/app/securite/must-match.validator';

@Component({
  selector: 'app-ajoutagent',
  templateUrl: './ajoutagent.component.html',
  styleUrls: ['./ajoutagent.component.scss']
})
export class AjoutagentComponent implements OnInit {

  list: Agent[];

  constructor(private serviceAgent : AgentService, private toastr : ToastrService, private formBuilder : FormBuilder) {  }

  data: any;
  
  //   agentForm = new FormGroup({
  //     idAg : new FormControl,
  //     codeAg : new FormControl,
  //     nomUtilisateur : new FormControl,
  //     motDePasse : new FormControl,
  //     confMotDePasse : new FormControl
  //   })

    agentForm : FormGroup;
    codeAg = new FormControl();
    nomUtilisateur = new FormControl();
    motDePasse = new FormControl();
    confMotDePasse = new FormControl();

  ngOnInit(): void {

    this.serviceAgent.refreshListe().subscribe((data: Agent[])=>{
      this.list = data;
    })

    // this.agentForm = this.formBuilder.group({
    //     codeAg : new FormControl('', [Validators.required]),
    //     nomUtilisateur : new FormControl('', [Validators.required]),
    //     motDePasse : new FormControl('', [Validators.required]),
    //     confMotDePasse : new FormControl('', [Validators.required]),
    // });

    // const codeValidation = "^[A][0-9]{4}$";
    // this.codeAg = new FormControl('', [Validators.required, Validators.pattern(codeValidation)]);
    this.codeAg = new FormControl('', [Validators.required]);
    this.nomUtilisateur = new FormControl('', [Validators.required]);
    this.motDePasse = new FormControl('', [Validators.required]);
    this.confMotDePasse = new FormControl('', [Validators.required]);

    this.agentForm = new FormGroup({
        codeAg : this.codeAg,
        nomUtilisateur : this.nomUtilisateur,
        motDePasse : this.motDePasse,
        confMotDePasse : this.confMotDePasse
    });

  }

  ajoutAgent(obj : any){
    obj.id = 0; 
    this.serviceAgent.postAgent(obj).subscribe((data): any => {
      this.toastr.success('Agent ajouté avec succes', 'Operation sur l\'agent');
      this.serviceAgent.refreshListe().subscribe((data: Agent[])=>{
        this.list = data;
      })
      this.agentForm.reset();
    })
  }

  ValidatecodeAg(){
    return this.codeAg.valid || this.codeAg.untouched;
  }

  ValidatenomUtilisateur(){
    return this.nomUtilisateur.valid || this.nomUtilisateur.untouched;
  }

  ValidatemotDePasse(){
    return this.motDePasse.valid || this.motDePasse.untouched;
  }

  ValidateconfMotDePasse(){
    return this.confMotDePasse.valid || this.confMotDePasse.untouched;
  }
}
