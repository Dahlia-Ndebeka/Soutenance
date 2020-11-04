import { Component, OnInit } from '@angular/core';
import { Formateur } from 'src/app/modeles/formateur.model';
import { ToastrService } from 'ngx-toastr';
import { FormateurService } from 'src/app/services/formateur.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listeformateur',
  templateUrl: './listeformateur.component.html',
  styleUrls: ['./listeformateur.component.scss']
})
export class ListeformateurComponent implements OnInit {

    list: Formateur[];

  constructor(
    private toastr : ToastrService,
    public serviceFormateur : FormateurService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.serviceFormateur.refreshListe().subscribe((data: Formateur[])=>{
      this.list = data;
    })  
  }

  editerFormateur(For : Formateur) : void{
    this.router.navigate(['editerformateur/' + For.idFor]);
  }

  supprimerFormateur(For : Formateur){
    if(confirm('Attention ce champs va être supprimé')){
      this.serviceFormateur.deleteFormateur(For.idFor).subscribe( u => {
        this.serviceFormateur.refreshListe().subscribe((data: Formateur[])=>{
          this.list = data;
        })
      this.toastr.warning('Suppression éffectué avec succes', 'Operation sur le formateur');
      });
    }
  }

}
