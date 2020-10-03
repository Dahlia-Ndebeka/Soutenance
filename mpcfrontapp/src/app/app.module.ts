import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AdminComponent } from './accueil/admin/admin.component';
import { UserComponent } from './accueil/user/user.component';
import { AgentComponent } from './accueil/admin/agent/agent.component';
import { PoleformationComponent } from './accueil/admin/poleformation/poleformation.component';
import { FormationComponent } from './accueil/admin/formation/formation.component';
import { FormateurComponent } from './accueil/admin/formateur/formateur.component';
import { ApprenantComponent } from './accueil/admin/apprenant/apprenant.component';
import { MessageComponent } from './accueil/admin/message/message.component';
import { AjoutagentComponent } from './accueil/admin/agent/ajoutagent/ajoutagent.component';
import { ListeagentComponent } from './accueil/admin/agent/listeagent/listeagent.component';
import { AjoutpoleformationComponent } from './accueil/admin/poleformation/ajoutpoleformation/ajoutpoleformation.component';
import { ListepoleformationComponent } from './accueil/admin/poleformation/listepoleformation/listepoleformation.component';
import { ListeformationComponent } from './accueil/admin/formation/listeformation/listeformation.component';
import { AjoutformationComponent } from './accueil/admin/formation/ajoutformation/ajoutformation.component';
import { AjoutformateurComponent } from './accueil/admin/formateur/ajoutformateur/ajoutformateur.component';
import { ListeformateurComponent } from './accueil/admin/formateur/listeformateur/listeformateur.component';
import { AjoutapprenantComponent } from './accueil/admin/apprenant/ajoutapprenant/ajoutapprenant.component';
import { ListeapprenantComponent } from './accueil/admin/apprenant/listeapprenant/listeapprenant.component';
import { AgentService } from './services/agent.service';
import { PoleformationService } from './services/poleformation.service';
import { FormationService } from './services/formation.service';
import { FormateurService } from './services/formateur.service';
import { ApprenantService } from './services/apprenant.service';
import { ModuleformationService } from './services/moduleformation.service';
import { MessageService } from './services/message.service';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MustMatchDirective } from './securite/must-match.directive';
import { EditeragentComponent } from './accueil/admin/agent/editeragent/editeragent.component';
import { ListemessageComponent } from './accueil/admin/message/listemessage/listemessage.component';
import { EditerapprenantComponent } from './accueil/admin/apprenant/editerapprenant/editerapprenant.component';
import { EditerpoleformationComponent } from './accueil/admin/poleformation/editerpoleformation/editerpoleformation.component';
import { EditerformationComponent } from './accueil/admin/formation/editerformation/editerformation.component';
import { EditerformateurComponent } from './accueil/admin/formateur/editerformateur/editerformateur.component';
import { EditermessageComponent } from './accueil/admin/message/editermessage/editermessage.component';
import { NoFundComponent } from './no-fund/no-fund.component';
import { AuthComponent } from './auth/auth.component';
import { AjoutermoduleformationComponent } from './accueil/user/moduleformation/ajoutermoduleformation/ajoutermoduleformation.component';
import { ModuleformationComponent } from './accueil/user/moduleformation/moduleformation.component';
import { ListemoduleformationComponent } from './accueil/user/moduleformation/listemoduleformation/listemoduleformation.component';
import { EditermoduleformationComponent } from './accueil/user/moduleformation/editermoduleformation/editermoduleformation.component';
import { MessagesComponent } from './accueil/user/messages/messages.component';
import { PolegestionComponent } from './accueil/user/messages/polegestion/polegestion.component';
import { PoleadministratifComponent } from './accueil/user/messages/poleadministratif/poleadministratif.component';
import { PoletechnologiqueComponent } from './accueil/user/messages/poletechnologique/poletechnologique.component';
import { ListeapprenantmoduleformationComponent } from './accueil/user/moduleformation/listeapprenantmoduleformation/listeapprenantmoduleformation.component';

import { AjoutsujetComponent } from './accueil/user/messages/poleadministratif/ajoutsujet/ajoutsujet.component';
import { ListesujetComponent } from './accueil/user/messages/poleadministratif/listesujet/listesujet.component';
import { ListecommentaireComponent } from './accueil/user/messages/poleadministratif/listecommentaire/listecommentaire.component';
import { AjoutcommentaireComponent } from './accueil/user/messages/poleadministratif/ajoutcommentaire/ajoutcommentaire.component';

import { AjoutcommentairetechComponent } from './accueil/user/messages/poletechnologique/ajoutcommentairetech/ajoutcommentairetech.component';
import { ListecommentairetechComponent } from './accueil/user/messages/poletechnologique/listecommentairetech/listecommentairetech.component';
import { ListesujettechComponent } from './accueil/user/messages/poletechnologique/listesujettech/listesujettech.component';
import { AjoutsujettechComponent } from './accueil/user/messages/poletechnologique/ajoutsujettech/ajoutsujettech.component';


import { AjoutsujetgesComponent } from './accueil/user/messages/polegestion/ajoutsujetges/ajoutsujetges.component';
import { ListesujetgesComponent } from './accueil/user/messages/polegestion/listesujetges/listesujetges.component';
import { ListecommentairegesComponent } from './accueil/user/messages/polegestion/listecommentaireges/listecommentaireges.component';
import { AjoutcommentairegesComponent } from './accueil/user/messages/polegestion/ajoutcommentaireges/ajoutcommentaireges.component';

import { PoleadministratifService } from './services/discussion/poleadministratif.service';
import { PolegestionsujetService } from './services/discussion/polegestionsujet.service';
import { PolegestioncomService } from './services/discussion/polegestioncom.service';
import { PoleadministratifcomService } from './services/discussion/poleadministratifcom.service';
import { PoletechnologiquesujetService } from './services/discussion/poletechnologiquesujet.service';
import { PoletechnologiquecomService } from './services/discussion/poletechnologiquecom.service';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    AdminComponent,
    UserComponent,
    AgentComponent,
    PoleformationComponent,
    FormationComponent,
    FormateurComponent,
    ApprenantComponent,
    MessageComponent,
    AjoutagentComponent,
    ListeagentComponent,
    AjoutpoleformationComponent,
    ListepoleformationComponent,
    ListeformationComponent,
    AjoutformationComponent,
    AjoutformateurComponent,
    ListeformateurComponent,
    AjoutapprenantComponent,
    ListeapprenantComponent,
    MustMatchDirective,
    EditeragentComponent,
    ListemessageComponent,
    EditerapprenantComponent,
    EditerpoleformationComponent,
    EditerformationComponent,
    EditerformateurComponent,
    EditermessageComponent,
    NoFundComponent,
    AuthComponent,
    ModuleformationComponent,
    ListemoduleformationComponent,
    EditermoduleformationComponent,
    AjoutermoduleformationComponent,
    MessagesComponent,
    PolegestionComponent,
    PoleadministratifComponent,
    PoletechnologiqueComponent,
    ListeapprenantmoduleformationComponent,

    AjoutsujetComponent,
    ListesujetComponent,
    ListecommentaireComponent,
    AjoutcommentaireComponent,

    AjoutcommentairetechComponent,
    ListecommentairetechComponent,
    ListesujettechComponent,
    AjoutsujettechComponent,

    AjoutsujetgesComponent,
    ListesujetgesComponent,
    ListecommentairegesComponent,
    AjoutcommentairegesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    AgentService,
    PoleformationService,
    FormationService,
    FormateurService,
    ApprenantService,
    ModuleformationService,
    MessageService,
    PoleadministratifService,
    PoleadministratifcomService,
    PolegestionsujetService,
    PolegestioncomService,
    PoletechnologiquesujetService,
    PoletechnologiquecomService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
