import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AdminComponent } from './accueil/admin/admin.component';
import { AgentComponent } from './accueil/admin/agent/agent.component';
import { AjoutagentComponent } from './accueil/admin/agent/ajoutagent/ajoutagent.component';
import { ListeagentComponent } from './accueil/admin/agent/listeagent/listeagent.component';
import { PoleformationComponent } from './accueil/admin/poleformation/poleformation.component';
import { AjoutpoleformationComponent } from './accueil/admin/poleformation/ajoutpoleformation/ajoutpoleformation.component';
import { ListepoleformationComponent } from './accueil/admin/poleformation/listepoleformation/listepoleformation.component';
import { FormationComponent } from './accueil/admin/formation/formation.component';
import { AjoutformationComponent } from './accueil/admin/formation/ajoutformation/ajoutformation.component';
import { ListeformationComponent } from './accueil/admin/formation/listeformation/listeformation.component';
import { FormateurComponent } from './accueil/admin/formateur/formateur.component';
import { AjoutformateurComponent } from './accueil/admin/formateur/ajoutformateur/ajoutformateur.component';
import { ListeformateurComponent } from './accueil/admin/formateur/listeformateur/listeformateur.component';
import { ApprenantComponent } from './accueil/admin/apprenant/apprenant.component';
import { AjoutapprenantComponent } from './accueil/admin/apprenant/ajoutapprenant/ajoutapprenant.component';
import { ListeapprenantComponent } from './accueil/admin/apprenant/listeapprenant/listeapprenant.component';
import { UserComponent } from './accueil/user/user.component';
import { MessageComponent } from './accueil/admin/message/message.component';
import { EditeragentComponent } from './accueil/admin/agent/editeragent/editeragent.component';
import { EditerpoleformationComponent } from './accueil/admin/poleformation/editerpoleformation/editerpoleformation.component';
import { EditerformationComponent } from './accueil/admin/formation/editerformation/editerformation.component';
import { EditerformateurComponent } from './accueil/admin/formateur/editerformateur/editerformateur.component';
import { EditerapprenantComponent } from './accueil/admin/apprenant/editerapprenant/editerapprenant.component';
import { ListemessageComponent } from './accueil/admin/message/listemessage/listemessage.component';
import { AjoutermoduleformationComponent } from './accueil/user/moduleformation/ajoutermoduleformation/ajoutermoduleformation.component';
import { ListemoduleformationComponent } from './accueil/user/moduleformation/listemoduleformation/listemoduleformation.component';
import { EditermoduleformationComponent } from './accueil/user/moduleformation/editermoduleformation/editermoduleformation.component';
import { MessagesComponent } from './accueil/user/messages/messages.component';
import { NoFundComponent } from './no-fund/no-fund.component';
import { ModuleformationComponent } from './accueil/user/moduleformation/moduleformation.component';

import { PoletechnologiqueComponent } from './accueil/user/messages/poletechnologique/poletechnologique.component';
import { PoleadministratifComponent } from './accueil/user/messages/poleadministratif/poleadministratif.component';
import { PolegestionComponent } from './accueil/user/messages/polegestion/polegestion.component';
import { ListeapprenantmoduleformationComponent } from './accueil/user/moduleformation/listeapprenantmoduleformation/listeapprenantmoduleformation.component';

import { AjoutcommentaireComponent } from './accueil/user/messages/poleadministratif/ajoutcommentaire/ajoutcommentaire.component';
import { ListecommentaireComponent } from './accueil/user/messages/poleadministratif/listecommentaire/listecommentaire.component';

import { AjoutcommentairetechComponent } from './accueil/user/messages/poletechnologique/ajoutcommentairetech/ajoutcommentairetech.component';
import { ListecommentairetechComponent } from './accueil/user/messages/poletechnologique/listecommentairetech/listecommentairetech.component';

import { AjoutcommentairegesComponent } from './accueil/user/messages/polegestion/ajoutcommentaireges/ajoutcommentaireges.component';
import { ListecommentairegesComponent } from './accueil/user/messages/polegestion/listecommentaireges/listecommentaireges.component';
import { AjoutsujettechComponent } from './accueil/user/messages/poletechnologique/ajoutsujettech/ajoutsujettech.component';
import { ListesujettechComponent } from './accueil/user/messages/poletechnologique/listesujettech/listesujettech.component';
import { AjoutsujetgesComponent } from './accueil/user/messages/polegestion/ajoutsujetges/ajoutsujetges.component';
import { ListesujetgesComponent } from './accueil/user/messages/polegestion/listesujetges/listesujetges.component';
import { AjoutsujetComponent } from './accueil/user/messages/poleadministratif/ajoutsujet/ajoutsujet.component';
import { ListesujetComponent } from './accueil/user/messages/poleadministratif/listesujet/listesujet.component';

const routes: Routes = [
  {path:'', component:AccueilComponent, pathMatch:"prefix"},
  {path:'accueil', component: AccueilComponent},
  {path:'admin', component:AdminComponent},
  {path:'agent', component:AgentComponent},
  {path:'listeagent', component:ListeagentComponent},
  {path:'ajoutagent', component:AjoutagentComponent},
  {path:'editeragent/:idAg', component:EditeragentComponent},
  {path:'poleformation', component:PoleformationComponent},
  {path:'ajoutpoleformation', component:AjoutpoleformationComponent},
  {path:'listepoleformation', component:ListepoleformationComponent},
  {path:'editerpoleformation/:idPolFor', component:EditerpoleformationComponent},
  {path:'formation', component:FormationComponent},
  {path:'ajoutformation', component:AjoutformationComponent},
  {path:'listeformation', component:ListeformationComponent},
  {path:'editerformation/:idFormation', component:EditerformationComponent},
  {path:'formateur', component:FormateurComponent},
  {path:'ajoutformateur', component:AjoutformateurComponent},
  {path:'listeformateur', component:ListeformateurComponent},
  {path:'editerformateur/:idFor', component:EditerformateurComponent},
  {path:'apprenant', component:ApprenantComponent},
  {path:'ajoutapprenant', component:AjoutapprenantComponent},
  {path:'listeapprenant', component:ListeapprenantComponent},
  {path:'editerapprenant/:idAp', component:EditerapprenantComponent},
  {path:'message', component:MessageComponent},
  {path:'listemessage', component:ListemessageComponent},
  {path:'user', component:UserComponent},
  {path:'moduleformation', component:ModuleformationComponent},
  {path:'ajoutermoduleformation', component:AjoutermoduleformationComponent},
  {path:'listemoduleformation', component:ListemoduleformationComponent},
  {path:'editermoduleformation/:idModule', component:EditermoduleformationComponent},
  {path:'listeapprenantmoduleformation', component:ListeapprenantmoduleformationComponent},
  {path:'messages', component:MessagesComponent},
  {path:'poleadministratif', component:PoleadministratifComponent},
  {path:'ajoutsujet', component:AjoutsujetComponent},
  {path:'listesujet', component:ListesujetComponent},
  {path:'ajoutcommentaire', component:AjoutcommentaireComponent},
  {path:'listecommentaire', component:ListecommentaireComponent},
  {path:'polegestion', component:PolegestionComponent},
  {path:'ajoutsujetges', component:AjoutsujetgesComponent},
  {path:'listesujetges', component:ListesujetgesComponent},
  {path:'ajoutcommentaireges', component:AjoutcommentairegesComponent},
  {path:'listecommentaireges', component:ListecommentairegesComponent},
  {path:'poletechnologique', component:PoletechnologiqueComponent},
  {path:'ajoutsujettech', component:AjoutsujettechComponent},
  {path:'listesujettech', component:ListesujettechComponent},
  {path:'ajoutcommentairetech', component:AjoutcommentairetechComponent},
  {path:'listecommentairetech', component:ListecommentairetechComponent},
  // {path:'no-fund', component:NoFundComponent},
  // {path:'**', redirectTo :'/no-fund'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
