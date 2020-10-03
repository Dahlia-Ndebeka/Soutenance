import { Component, OnInit, Input } from '@angular/core';
import { ModuleFormation } from 'src/app/modeles/module-formation.model';
import { ToastrService } from 'ngx-toastr';
import { ModuleformationService } from 'src/app/services/moduleformation.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listemoduleformation',
  templateUrl: './listemoduleformation.component.html',
  styleUrls: ['./listemoduleformation.component.scss']
})
export class ListemoduleformationComponent implements OnInit {

  // @Input() indexModule: number;
  
  list: ModuleFormation[];

  constructor(
    private toastr : ToastrService,
    public serviceModule : ModuleformationService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.serviceModule.refreshListe().subscribe((data: ModuleFormation[])=>{
      this.list = data;
    })  
  }

  editerModule(module : ModuleFormation) : void{
    this.router.navigate(['editermoduleformation/' + module.idModule]);
  }

  supprimerModule(module : ModuleFormation){
    if(confirm('Attention ce champs va être supprimé')){
      this.serviceModule.deleteModule(module.idModule).subscribe( u => {
        this.serviceModule.refreshListe().subscribe((data: ModuleFormation[])=>{
          this.list = data;
        })
      this.toastr.warning('Suppression éffectué avec succes', 'Operation sur les modules');
      });
    }
  }

  // onAllumer(){
  //   this.serviceModule.debloqueModule(this.indexModule)
  // }

  // onEteindre(){
  //   this.serviceModule.bloqueModule(this.indexModule)
  // }

}
