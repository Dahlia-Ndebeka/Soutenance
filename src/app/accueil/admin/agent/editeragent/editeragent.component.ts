import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AgentService } from 'src/app/services/agent.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Agent } from 'src/app/modeles/agent.model';

@Component({
  selector: 'app-editeragent',
  templateUrl: './editeragent.component.html',
  styleUrls: ['./editeragent.component.scss']
})
export class EditeragentComponent implements OnInit {

    id : number
    agent : Agent

    agentForm : FormGroup;
    idAg = new FormControl();
    codeAg = new FormControl();
    nomUtilisateur = new FormControl();
    motDePasse = new FormControl();
    confMotDePasse = new FormControl();

  constructor(private formBuilder : FormBuilder, private routes : ActivatedRoute, private serviceAgent : AgentService, private router : Router, private toastr : ToastrService) { }

  ngOnInit(): void {

    // const codeValidation = "^[A][0-9]{4}$";
    // this.codeAg = new FormControl('', [Validators.required, Validators.pattern(codeValidation)]);
    this.codeAg = new FormControl('', [Validators.required]);
    this.nomUtilisateur = new FormControl('', [Validators.required]);
    this.motDePasse = new FormControl('', [Validators.required]);
    this.confMotDePasse = new FormControl('', [Validators.required]);

    this.agentForm = new FormGroup({
        idAg : this.idAg,
        codeAg : this.codeAg,
        nomUtilisateur : this.nomUtilisateur,
        motDePasse : this.motDePasse,
        confMotDePasse : this.confMotDePasse
    });

    const routeParams = this.routes.snapshot.params;
    console.log(routeParams.idAg);

    this.serviceAgent.getAgent(routeParams.idAg).subscribe((data : any) =>{
      this.agentForm.patchValue(data);
    })

  }

  modifierAgent(){ 
    this.serviceAgent.putAgent(this.agentForm.value)
    .subscribe(data =>{
        this.toastr.info('Modification effectué avec succes', 'Operation sur l\'agent');
        this.agentForm.reset();
        this.router.navigate(['agent']);
    },error =>{
        alert(error);
      }
    );
  }

  annulerAgent(){
    this.agentForm.reset();
    this.router.navigate(['agent']);
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
