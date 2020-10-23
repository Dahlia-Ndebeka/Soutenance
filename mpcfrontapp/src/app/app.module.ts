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
import { ListeapprenantmoduleformationComponent } from './accueil/user/moduleformation/listeapprenantmoduleformation/listeapprenantmoduleformation.component';
import { VoirmoduleformationComponent } from './accueil/user/moduleformation/voirmoduleformation/voirmoduleformation.component';
import { NgxSimplePrintModule } from 'ngx-simple-print';
import { AjoutsujetadComponent } from './accueil/user/poleAdministratif/ajoutsujetad/ajoutsujetad.component';
import { PoleadminComponent } from './accueil/user/poleAdministratif/poleadmin/poleadmin.component';
import { ListesujetadComponent } from './accueil/user/poleAdministratif/listesujetad/listesujetad.component';
import { AjoutsujetgesComponent } from './accueil/user/poleGestion/ajoutsujetges/ajoutsujetges.component';
import { ListesujetgesComponent } from './accueil/user/poleGestion/listesujetges/listesujetges.component';
import { PolegesComponent } from './accueil/user/poleGestion/poleges/poleges.component';
import { PoletechComponent } from './accueil/user/poleTechnologique/poletech/poletech.component';
import { AjoutsujettechComponent } from './accueil/user/poleTechnologique/ajoutsujettech/ajoutsujettech.component';
import { ListesujettechComponent } from './accueil/user/poleTechnologique/listesujettech/listesujettech.component';

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
    ListeapprenantmoduleformationComponent,
    VoirmoduleformationComponent,
    AjoutsujetadComponent,
    PoleadminComponent,
    ListesujetadComponent,
    AjoutsujetgesComponent,
    ListesujetgesComponent,
    PolegesComponent,
    PoletechComponent,
    AjoutsujettechComponent,
    ListesujettechComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxSimplePrintModule

  ],
  providers: [
    AgentService,
    PoleformationService,
    FormationService,
    FormateurService,
    ApprenantService,
    ModuleformationService,
    MessageService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
