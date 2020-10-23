import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ModuleFormation } from 'src/app/modeles/module-formation.model';
import { ModuleformationService } from 'src/app/services/moduleformation.service';

@Component({
  selector: 'app-listeapprenantmoduleformation',
  templateUrl: './listeapprenantmoduleformation.component.html',
  styleUrls: ['./listeapprenantmoduleformation.component.scss']
})
export class ListeapprenantmoduleformationComponent implements OnInit {

  data: any;
  list: ModuleFormation[];

  moduleForm : FormGroup;
  idModule = new FormControl();
  codeModule = new FormControl();
  titreModule = new FormControl();
  contenuModule = new FormControl();
  dureeModule = new FormControl();
  idFormation = new FormControl();
  idFor = new FormControl();

  constructor(private toastr : ToastrService, private serviceModule : ModuleformationService, private routes : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    const routeParams = this.routes.snapshot.params;
    console.log(routeParams.idModule);

    this.serviceModule.getModule(routeParams.idModule).subscribe((data : any) =>{
      this.moduleForm.patchValue(data);
    })
  }

}
