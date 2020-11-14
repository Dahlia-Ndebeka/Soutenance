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
import { VoirmoduleformationComponent } from './accueil/user/moduleformation/voirmoduleformation/voirmoduleformation.component';
import { PoleadminComponent } from './accueil/user/poleAdministratif/poleadmin/poleadmin.component';
import { AjoutsujetadComponent } from './accueil/user/poleAdministratif/ajoutsujetad/ajoutsujetad.component';
import { ListesujetadComponent } from './accueil/user/poleAdministratif/listesujetad/listesujetad.component';
import { PolegesComponent } from './accueil/user/poleGestion/poleges/poleges.component';
import { AjoutsujetgesComponent } from './accueil/user/poleGestion/ajoutsujetges/ajoutsujetges.component';
import { ListesujetgesComponent } from './accueil/user/poleGestion/listesujetges/listesujetges.component';
import { PoletechComponent } from './accueil/user/poleTechnologique/poletech/poletech.component';
import { AjoutsujettechComponent } from './accueil/user/poleTechnologique/ajoutsujettech/ajoutsujettech.component';
import { ListesujettechComponent } from './accueil/user/poleTechnologique/listesujettech/listesujettech.component';
import { AjoutcomadComponent } from './accueil/user/commentaires/ajoutcomad/ajoutcomad.component';
import { ListecomadComponent } from './accueil/user/commentaires/listecomad/listecomad.component';
import { FormationpoleComponent } from './accueil/admin/formation/formationpole/formationpole.component';
import { FormationadComponent } from './accueil/admin/formation/formationad/formationad.component';
import { FormationgesComponent } from './accueil/admin/formation/formationges/formationges.component';
import { FormationtechComponent } from './accueil/admin/formation/formationtech/formationtech.component';
import { LoginComponent } from './login/login.component';
import { ModuleadComponent } from './accueil/user/moduleformation/modulead/modulead.component';
import { ModulegesComponent } from './accueil/user/moduleformation/moduleges/moduleges.component';
import { ModuletechComponent } from './accueil/user/moduleformation/moduletech/moduletech.component';
import { PolegestComponent } from './accueil/user/polegest/polegest.component';
import { PoletechnoComponent } from './accueil/user/poletechno/poletechno.component';
import { PoleadminiComponent } from './accueil/user/poleadmini/poleadmini.component';

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
  {path:'voirmoduleformation/:idModule', component:VoirmoduleformationComponent},
  {path: 'formationpole', component:FormationpoleComponent},
  {path: 'formationad', component:FormationadComponent},
  {path: 'formationges', component:FormationgesComponent},
  {path: 'formationtech', component:FormationtechComponent},
  {path: 'login', component:LoginComponent},
  {path: 'poleadmini', component:PoleadminiComponent},
  {path: 'polegest', component:PolegestComponent},
  {path: 'poletechno', component:PoletechnoComponent},
  {path: 'modulead/:idFormation', component:ModuleadComponent},
  {path: 'moduleges/:idFormation', component:ModulegesComponent},
  {path: 'moduletech/:idFormation', component:ModuletechComponent},
  {path: 'ajoutermoduleformation', component:AjoutermoduleformationComponent},
  {path: 'listemoduleformation', component:ListemoduleformationComponent},
  {path:'messages', component:MessagesComponent},
  {path:'poleadmin', component:PoleadminComponent},
  {path:'ajoutsujetad', component:AjoutsujetadComponent},
  {path:'listesujetad', component:ListesujetadComponent},
  {path:'poleges', component:PolegesComponent},
  {path:'ajoutsujetges', component:AjoutsujetgesComponent},
  {path:'listesujetges', component:ListesujetgesComponent},
  {path:'poletech', component:PoletechComponent},
  {path:'ajoutsujettech', component:AjoutsujettechComponent},
  {path:'listesujettech', component:ListesujettechComponent},
  {path:'ajoutcomad/:idSujet', component:AjoutcomadComponent},
  {path:'listecomad', component:ListecomadComponent},
  {path:'no-fund', component:NoFundComponent},
  {path:'**', redirectTo :'/no-fund'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
