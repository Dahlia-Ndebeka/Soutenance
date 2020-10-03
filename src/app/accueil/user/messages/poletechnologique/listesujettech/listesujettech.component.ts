import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { Poletechnologiquesujet } from 'src/app/modeles/discussion/poletechnologiquesujet';
import { PoletechnologiquesujetService } from 'src/app/services/discussion/poletechnologiquesujet.service';

@Component({
  selector: 'app-listesujettech',
  templateUrl: './listesujettech.component.html',
  styleUrls: ['./listesujettech.component.scss']
})
export class ListesujettechComponent implements OnInit {

  list: Poletechnologiquesujet[];

  constructor(
    private toastr : ToastrService,
    public servicePoletechnologiquesujet : PoletechnologiquesujetService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.servicePoletechnologiquesujet.refreshListe().subscribe((data: Poletechnologiquesujet[])=>{
      this.list = data;
    })  
  }

  voirCommentaire(poleTech : Poletechnologiquesujet) : void{
    this.router.navigate(['ajoutcommentairetech' , 'ajoutcommentairetech/' + poleTech.idpoleTech]);
  }

}
