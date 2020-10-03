import { Component, OnInit } from '@angular/core';
import { Apprenant } from 'src/app/modeles/apprenant.model';
import { ToastrService } from 'ngx-toastr';
import { ApprenantService } from 'src/app/services/apprenant.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listeapprenant',
  templateUrl: './listeapprenant.component.html',
  styleUrls: ['./listeapprenant.component.scss']
})
export class ListeapprenantComponent implements OnInit {

  
  list: Apprenant[];

  constructor(
    private toastr : ToastrService,
    public serviceApprenant : ApprenantService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.serviceApprenant.refreshListe().subscribe((data: Apprenant[])=>{
      this.list = data;
    })  
  }

  editerApprenant(ap : Apprenant) : void{
    this.router.navigate(['editerapprenant/' + ap.idAp]);
  }

  supprimerApprenant(ap : Apprenant){
    if(confirm('Attention ce champs va être supprimé')){
      this.serviceApprenant.deleteApprenant(ap.idAp).subscribe( u => {
        this.serviceApprenant.refreshListe().subscribe((data: Apprenant[])=>{
          this.list = data;
        })
      this.toastr.warning('Suppression éffectué avec succes', 'Operation sur l\'apprenant');
      });
    }
  }

}
