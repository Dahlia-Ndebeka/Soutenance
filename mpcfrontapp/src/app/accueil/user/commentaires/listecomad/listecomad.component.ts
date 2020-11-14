import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Commentaire } from 'src/app/modeles/commentaire';
import { Commentairead } from 'src/app/modeles/commentairead';
import { CommentaireService } from 'src/app/services/commentaire.service';
import { CommentaireadService } from 'src/app/services/commentairead.service';

@Component({
  selector: 'app-listecomad',
  templateUrl: './listecomad.component.html',
  styleUrls: ['./listecomad.component.scss']
})
export class ListecomadComponent implements OnInit {

  list : Commentaire[] ;

  constructor(
    private toastr : ToastrService,
    public serviceCom : CommentaireService,
    private routes: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    const routeParams = this.routes.snapshot.params.idSujet;
    console.log(routeParams); 

    this.serviceCom.refreshListeG(routeParams).subscribe((data: Commentaire[])=>{
      this.list = data;
    });
    
    this.serviceCom.refreshListe().subscribe((data: Commentaire[])=>{
      this.list = data;
    });
  }

}
