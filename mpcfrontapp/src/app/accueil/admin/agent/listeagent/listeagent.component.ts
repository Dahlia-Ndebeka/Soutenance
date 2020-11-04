import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AgentService } from 'src/app/services/agent.service';
import { Agent } from 'src/app/modeles/agent.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Utilisateur } from 'src/app/modeles/utilisateur';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-listeagent',
  templateUrl: './listeagent.component.html',
  styleUrls: ['./listeagent.component.scss']
})
export class ListeagentComponent implements OnInit {
  
  // list: any;
  list: Utilisateur[];

    agentForm = new FormGroup({
      motCle : new FormControl()
   });

  constructor(
    private toastr : ToastrService,
    public serviceAgent : UtilisateurService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.serviceAgent.refreshListe().subscribe((data: Utilisateur[])=>{
      this.list = data;
    })
  }

  supprimerAgent(ag : Utilisateur){
    if(confirm('Attention ce champs va être supprimé')){
      this.serviceAgent.deleteUtilisateur(ag.idCompte).subscribe( u => {
        this.serviceAgent.refreshListeAgent().subscribe((data: Utilisateur[])=>{
          this.list = data;
        })
      this.toastr.warning('Suppression éffectué avec succes', 'Operation sur l\'agent');
      });
    }
  }


}
