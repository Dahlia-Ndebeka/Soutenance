import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Formation } from 'src/app/modeles/formation.model';
import { ModuleFormation } from 'src/app/modeles/module-formation.model';
import { FormationService } from 'src/app/services/formation.service';
import { ModuleformationService } from 'src/app/services/moduleformation.service';

@Component({
  selector: 'app-modulead',
  templateUrl: './modulead.component.html',
  styleUrls: ['./modulead.component.scss']
})
export class ModuleadComponent implements OnInit {

  
  isModule = false;
  isVoir = false;
  moduleStatus: boolean;
  voirStatus: boolean;
  
  list: ModuleFormation[];

  constructor(
    private toastr : ToastrService,
    public serviceModule : ModuleformationService,
    private router: Router,
    private routes : ActivatedRoute
  ) { }

  ngOnInit(): void {

    const routeParams = this.routes.snapshot.params.idFormation;
    console.log(routeParams);

    this.serviceModule.refreshListeG(routeParams).subscribe((data: ModuleFormation[])=>{
      this.list = data;
    })


    // this.serviceModule.refreshListeTech().subscribe((data: ModuleFormation[])=>{
    //   this.list = data;
    // })  
  }

  editerModule(module : ModuleFormation) : void{
    this.router.navigate(['editermoduleformation/' + module.idModule]);
  }

  supprimerModule(module : ModuleFormation){
    if(confirm('Attention ce champs va être supprimé')){
      this.serviceModule.deleteModule(module.idModule).subscribe( u => {
        // this.serviceModule.refreshListeGes().subscribe((data: ModuleFormation[])=>{
        //   this.list = data;
        // })
      this.toastr.warning('Suppression éffectué avec succes', 'Operation sur les modules');
      });
    }
  }

  onbloquer() {
    this.serviceModule.bloquer().then(
      () => {
        console.log('Sign in successful!');
        this.moduleStatus = this.serviceModule.isModule;
        this.voirStatus = this.serviceModule.isVoir;

      }
    );
  }

  ondebloquer() {
    this.serviceModule.debloquer();
        this.voirStatus = this.serviceModule.isVoir;
        this.moduleStatus = this.serviceModule.isModule;
  }


  deconnexion(){
    window.localStorage.removeItem('token');
    this.toastr.success('Vous etes maintenant déconnecté', 'Operation sur l\'authentification');
    this.router.navigate(['accueil']);
  }

}
