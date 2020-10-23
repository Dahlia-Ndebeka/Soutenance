import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
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

  isModule = false;
  isVoir = false;
  moduleStatus: boolean;
  voirStatus: boolean;
  
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

  // public openPDF():void {
  //   let DATA = this.htmlData.nativeElement;
  //   let doc = new jsPDF('p','pt', 'a4');
  //   doc.fromHTML(DATA.innerHTML,15,15);
  //   doc.output('dataurlnewwindow');
  // }


  // public downloadPDF():void {
  //   let DATA = this.htmlData.nativeElement;
  //   let doc = new jsPDF('p','pt', 'a4');

  //   let handleElement = {
  //     '#editor':function(element,renderer){
  //       return true;
  //     }
  //   };
  //   doc.fromHTML(DATA.innerHTML,15,15,{
  //     'width': 200,
  //     'elementHandlers': handleElement
  //   });

  //   doc.save('angular-demo.pdf');
  // }


}
