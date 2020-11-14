import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Utilisateur } from 'src/app/modeles/utilisateur';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-listeapprenant',
  templateUrl: './listeapprenant.component.html',
  styleUrls: ['./listeapprenant.component.scss']
})
export class ListeapprenantComponent implements OnInit {

  
  list: Utilisateur[];

  constructor(
    private toastr : ToastrService,
    public serviceApprenant : UtilisateurService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.serviceApprenant.refreshListeApprenant().subscribe((data: Utilisateur[])=>{
      this.list = data;
    })  
  }

  // editerApprenant(ap : Utilisateur) : void{
  //   this.router.navigate(['editerapprenant/' + ap.idCompte]);
  // }

  // supprimerApprenant(ap : Utilisateur){
  //   if(confirm('Attention ce champs va être supprimé')){
  //     this.serviceApprenant.deleteUtilisateur(ap.idCompte).subscribe( u => {
  //       this.serviceApprenant.refreshListe().subscribe((data: Utilisateur[])=>{
  //         this.list = data;
  //       })
  //     this.toastr.warning('Suppression éffectué avec succes', 'Operation sur l\'apprenant');
  //     });
  //   }
  // }

}
