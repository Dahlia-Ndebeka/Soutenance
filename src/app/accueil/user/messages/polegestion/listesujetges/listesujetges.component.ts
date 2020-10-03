import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { Polegestionsujet } from 'src/app/modeles/discussion/polegestionsujet';
import { PolegestionsujetService } from 'src/app/services/discussion/polegestionsujet.service';

@Component({
  selector: 'app-listesujetges',
  templateUrl: './listesujetges.component.html',
  styleUrls: ['./listesujetges.component.scss']
})
export class ListesujetgesComponent implements OnInit {

  list: Polegestionsujet[];

  constructor(
    private toastr : ToastrService,
    public servicePolegestionsujet : PolegestionsujetService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.servicePolegestionsujet.refreshListe().subscribe((data: Polegestionsujet[])=>{
      this.list = data;
    })  
  }

  voirCommentaire(poleGes : Polegestionsujet) : void{
    this.router.navigate(['ajoutcommentaireges' , 'ajoutcommentaireges/' + poleGes.idpoleGes]);
  }

}
