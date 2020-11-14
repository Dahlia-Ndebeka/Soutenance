import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ModuleFormation } from 'src/app/modeles/module-formation.model';
import { ModuleformationService } from 'src/app/services/moduleformation.service';
import { jsPDF } from 'jspdf';
import { from } from 'rxjs';
import html2canvas from 'html2canvas';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { tick } from '@angular/core/testing';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-voirmoduleformation',
  templateUrl: './voirmoduleformation.component.html',
  styleUrls: ['./voirmoduleformation.component.scss']
})
export class VoirmoduleformationComponent implements OnInit {

  @ViewChild('pdfTable') pdfTable : ElementRef;

  ///data: any;
  module:ModuleFormation;
  list: ModuleFormation[];

  moduleForm = new FormGroup({
  idModule : new FormControl(),
  codeModule : new FormControl(),
  titreModule : new FormControl(),
  contenuModule : new FormControl(),
  dureeModule : new FormControl(),
  idFormation : new FormControl(),
  idFor : new FormControl()
 });

  constructor(private toastr : ToastrService, private serviceModule : ModuleformationService, private routes : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    const routeParams = this.routes.snapshot.params.idModule;
    console.log(routeParams);

    this.serviceModule.getModule(routeParams).subscribe(data=>{
      this.module = data;
    })
  }


  // public downloadAsPDF() {
  //   const doc = new jsPDF();

  //   const specialElementHandlers = {
  //     '#editor': function (element, renderer) {
  //       return true;
  //     }
  //   };

  //   const pdfTable = this.pdfTable.nativeElement;

  //   doc.fromHTML(pdfTable.innerHTML, 15, 15, {
  //     width: 190,
  //     'elementHandlers': specialElementHandlers
  //   });

  //   doc.save('tableToPdf.pdf');
  // }
    


    generatePdf(){
      const documentDefinition = {
        content:[
          {text:"Cours numero "+this.module.idModule,style:'header',alignment:'center'},
          {text: this.module.contenuModule,style:'contenu',alignment:'justify'}
        ],
        styles:{
          header:{
            fontsize:18,
            bold:true,
            color:'red',
            decoration:'underline'
          }
        }
        
        
        };
      pdfMake.createPdf(documentDefinition).open();
     }

  deconnexion(){
    window.localStorage.removeItem('token');
    this.toastr.success('Vous etes maintenant déconnecté', 'Operation sur l\'authentification');
    this.router.navigate(['accueil']);
  }

}
