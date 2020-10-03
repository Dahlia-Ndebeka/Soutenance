import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Polegestioncom } from 'src/app/modeles/discussion/polegestioncom';
import { PolegestioncomService } from 'src/app/services/discussion/polegestioncom.service';

@Component({
  selector: 'app-listecommentaireges',
  templateUrl: './listecommentaireges.component.html',
  styleUrls: ['./listecommentaireges.component.scss']
})
export class ListecommentairegesComponent implements OnInit {

  list: Polegestioncom[];

  constructor(
    private toastr : ToastrService,
    public servicePolegestioncom : PolegestioncomService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.servicePolegestioncom.refreshListe().subscribe((data: Polegestioncom[])=>{
      this.list = data;
    })  
  }

}
