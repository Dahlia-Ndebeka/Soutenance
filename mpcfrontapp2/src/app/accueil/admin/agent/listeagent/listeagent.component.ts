import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AgentService } from 'src/app/services/agent.service';
import { Agent } from 'src/app/modeles/agent.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-listeagent',
  templateUrl: './listeagent.component.html',
  styleUrls: ['./listeagent.component.scss']
})
export class ListeagentComponent implements OnInit {
  
  // list: any;
  list: Agent[];

    agentForm = new FormGroup({
      motCle : new FormControl()
   });

  constructor(
    private toastr : ToastrService,
    public serviceAgent : AgentService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.serviceAgent.refreshListe().subscribe((data: Agent[])=>{
      this.list = data;
    })

  }

  supprimerAgent(ag : Agent){
    if(confirm('Attention ce champs va être supprimé')){
      this.serviceAgent.deleteAgent(ag.idAg).subscribe( u => {
        this.serviceAgent.refreshListe().subscribe((data: Agent[])=>{
          this.list = data;
        })
      this.toastr.warning('Suppression éffectué avec succes', 'Operation sur l\'agent');
      });
    }
  }


}
