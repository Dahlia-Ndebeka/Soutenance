import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Poletechnologiquecom } from 'src/app/modeles/discussion/poletechnologiquecom';
import { PoletechnologiquecomService } from 'src/app/services/discussion/poletechnologiquecom.service';

@Component({
  selector: 'app-listecommentairetech',
  templateUrl: './listecommentairetech.component.html',
  styleUrls: ['./listecommentairetech.component.scss']
})
export class ListecommentairetechComponent implements OnInit {

  list: Poletechnologiquecom[];

  constructor(
    private toastr : ToastrService,
    public servicePoletechnologiquecom : PoletechnologiquecomService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.servicePoletechnologiquecom.refreshListe().subscribe((data: Poletechnologiquecom[])=>{
      this.list = data;
    })  
  }

}
