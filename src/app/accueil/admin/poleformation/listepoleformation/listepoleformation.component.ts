import { Component, OnInit } from '@angular/core';
import { Poleformation } from 'src/app/modeles/poleformation.model';
import { ToastrService } from 'ngx-toastr';
import { PoleformationService } from 'src/app/services/poleformation.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listepoleformation',
  templateUrl: './listepoleformation.component.html',
  styleUrls: ['./listepoleformation.component.scss']
})
export class ListepoleformationComponent implements OnInit {

  list: Poleformation[];

  constructor(
    private toastr : ToastrService,
    public servicePole : PoleformationService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.servicePole.refreshListe().subscribe((data: Poleformation[])=>{
      this.list = data;
    })  
  }

  editerPole(pole : Poleformation) : void{
    this.router.navigate(['editerpoleformation/' + pole.idPolFor]);
  }

  supprimerPole(pole : Poleformation){
    if(confirm('Attention ce champs va être supprimé')){
      this.servicePole.deletePole(pole.idPolFor).subscribe( u => {
        this.servicePole.refreshListe().subscribe((data: Poleformation[])=>{
          this.list = data;
        })
      this.toastr.warning('Suppression éffectué avec succes', 'Operation sur les pôles de formation');
      });
    }
  }

}
