import { Component, OnInit } from '@angular/core';
import { Formation } from 'src/app/modeles/formation.model';
import { ToastrService } from 'ngx-toastr';
import { FormationService } from 'src/app/services/formation.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listeformation',
  templateUrl: './listeformation.component.html',
  styleUrls: ['./listeformation.component.scss']
})
export class ListeformationComponent implements OnInit {

  list: Formation[];

  constructor(
    private toastr : ToastrService,
    public serviceFormation : FormationService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.serviceFormation.refreshListe().subscribe((data: Formation[])=>{
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
