import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Formation } from 'src/app/modeles/formation.model';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-formationtech',
  templateUrl: './formationtech.component.html',
  styleUrls: ['./formationtech.component.scss']
})
export class FormationtechComponent implements OnInit {

  list: Formation[];

  constructor(
    private toastr : ToastrService,
    public serviceFormation : FormationService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.serviceFormation.refreshListeTech().subscribe((data: Formation[])=>{
      this.list = data;
    });

  }

  editerFormation(formation : Formation) : void{
    this.router.navigate(['editerformation/' + formation.idFormation]);
  }

  supprimerFormation(formation : Formation){
    if(confirm('Attention ce champs va être supprimé')){
      this.serviceFormation.deleteFormation(formation.idFormation).subscribe( u => {
      this.serviceFormation.refreshListe().subscribe((data: Formation[])=>{
        this.list = data;
      }) ;
      this.toastr.warning('Suppression éffectué avec succes', 'Operation sur la formation');
      });
    }
  }

}
