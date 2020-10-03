import { Component, OnInit } from '@angular/core';
import { Poleadministratif } from 'src/app/modeles/discussion/poleadministratif';
import { ToastrService } from 'ngx-toastr';
import { PoleadministratifService } from 'src/app/services/discussion/poleadministratif.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listesujet',
  templateUrl: './listesujet.component.html',
  styleUrls: ['./listesujet.component.scss']
})
export class ListesujetComponent implements OnInit {

  list: Poleadministratif[];

  constructor(
    private toastr : ToastrService,
    public servicePoleadministratif : PoleadministratifService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.servicePoleadministratif.refreshListe().subscribe((data: Poleadministratif[])=>{
      this.list = data;
    })  
  }

  voirCommentaire(poleAd : Poleadministratif) : void{
    this.router.navigate(['ajoutcommentaire' , 'ajoutcommentaire/' + poleAd.idpoleAd]);
  }
}
