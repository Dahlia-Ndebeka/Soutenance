import { Component, OnInit } from '@angular/core';
import { Poleadministratifcom } from 'src/app/modeles/discussion/poleadministratifcom';
import { ToastrService } from 'ngx-toastr';
import { PoleadministratifcomService } from 'src/app/services/discussion/poleadministratifcom.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listecommentaire',
  templateUrl: './listecommentaire.component.html',
  styleUrls: ['./listecommentaire.component.scss']
})
export class ListecommentaireComponent implements OnInit {

  list: Poleadministratifcom[];

  constructor(
    private toastr : ToastrService,
    public servicePoleadministratif : PoleadministratifcomService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.servicePoleadministratif.refreshListe().subscribe((data: Poleadministratifcom[])=>{
      this.list = data;
    })  
  }
}
